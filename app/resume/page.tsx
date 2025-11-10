"use client";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ResumePage() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
        localStorage.removeItem("captchaVerified");
        setCaptchaToken(null);
        alert("Token expired or invalid. Please complete CAPTCHA again.");
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      setResumeUrl(url);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("captchaVerified");
      setCaptchaToken(null);
      alert("Failed to load resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    if (!token) return;
    setCaptchaToken(token);
    localStorage.setItem("captchaVerified", token);
    fetchResume(token);
  };

  const handleDownload = () => {
    if (!resumeUrl) return;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sam_Peterson_Resume.pdf";
    link.click();
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center gap-4 py-4 px-2 sm:px-4 md:px-6">
      {!captchaToken && !loading && (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleCaptchaChange}
        />
      )}

      {captchaToken && (
        <>
          <div className="text-center mb-4 text-gray-200 space-y-1">
            <p>Email: <a href="mailto:sam.peterson1@icloud.com" className="underline hover:text-purple-300">sam.peterson1@icloud.com</a></p>
            <p>Phone: <a href="tel:+16126692079" className="underline hover:text-purple-300">+1 (612) 669-2079</a></p>
          </div>

          {loading && <p className="text-gray-400 animate-pulse">Loading resume...</p>}

          {resumeUrl && (
            <div className="w-full max-w-4xl border border-purple-700 rounded-lg overflow-hidden">
              <embed
                src={resumeUrl}
                type="application/pdf"
                className="w-full h-[80vh] sm:h-[90vh] md:h-[95vh]"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}

          {resumeUrl && !loading && (
            <button
              onClick={handleDownload}
              className="mt-2 px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors"
            >
              Download Resume
            </button>
          )}
        </>
      )}
    </main>
  );
}
