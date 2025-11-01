"use client";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ResumePage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Load token from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("captchaVerified");
    if (savedToken) {
      setCaptchaToken(savedToken);
      fetchResume(savedToken);
    }
  }, []);

  const fetchResume = async (token: string) => {
    try {
      setLoading(true);
      const res = await fetch("/api/request-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!res.ok) {
        console.warn("Token expired or invalid, re-prompting CAPTCHA");
        localStorage.removeItem("captchaVerified");
        setCaptchaToken(null);
        setResumeUrl(null);
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      setResumeUrl(url);
    } catch (error) {
      console.error("Error fetching resume:", error);
      localStorage.removeItem("captchaVerified");
      setCaptchaToken(null);
      setResumeUrl(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCaptchaChange = async (token: string | null) => {
    if (!token) return;
    setCaptchaToken(token);
    localStorage.setItem("captchaVerified", token);
    await fetchResume(token);
  };

  const handleDownload = () => {
    if (!resumeUrl) return;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sam_Peterson_Resume.pdf";
    link.click();
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center gap-6 pt-0">
      {/* CAPTCHA */}
      {!captchaToken && !loading && (
        <div className="flex flex-col items-center mt-2">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleCaptchaChange}
          />
        </div>
      )}

      {loading && (
        <p className="text-gray-400 text-sm mt-4 animate-pulse">
          Loading resume...
        </p>
      )}

{resumeUrl && (
  <div className="flex justify-center w-full mt-4 px-4">
    <iframe
      src={resumeUrl}
      className="border border-purple-700 rounded-lg w-full max-w-5xl"
      style={{
        // Take 90% of viewport height but not less than a proportional A4 height
        height: `min(90vh, calc(80vw * 1.414))`,
      }}
      title="Resume PDF"
    />
  </div>
)}






      {/* Download button */}
      {resumeUrl && !loading && (
        <button
          onClick={handleDownload}
          className="mt-4 px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-bold transition-colors"
        >
          Download Resume
        </button>
      )}
    </main>
  );
}
