// app/api/request-resume/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const CACHE_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// In-memory cache: token -> timestamp
const verifiedTokens: Map<string, number> = new Map();

export async function POST(req: NextRequest) {
  try {
    if (!RECAPTCHA_SECRET) {
      console.error("Missing RECAPTCHA_SECRET in environment variables.");
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const now = Date.now();
    const cachedTimestamp = verifiedTokens.get(token);

    // ✅ If token is cached and still valid, skip reCAPTCHA verification
    if (cachedTimestamp && now - cachedTimestamp < CACHE_DURATION_MS) {
      return await serveResume();
    }

    // Otherwise, verify with Google reCAPTCHA
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token,
      }),
    });

    const data = await verifyRes.json();
    if (!data.success || (data.score && data.score < 0.5)) {
      console.warn("reCAPTCHA verification failed:", data);
      return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 403 });
    }

    // ✅ Cache the verified token
    verifiedTokens.set(token, now);

    return await serveResume();

  } catch (err) {
    console.error("Error in /api/request-resume:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Helper function to serve the resume PDF
async function serveResume() {
  try {
    const filePath = path.join(process.cwd(), "private", "resume.pdf");
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Sam_Peterson_Resume.pdf"',
      },
    });
  } catch (fileError) {
    console.error("Error reading resume file:", fileError);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
