"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EmailSection() {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setShowToast(true);
      e.target.reset();

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative my-24 py-24 overflow-visible">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-50 w-50 rounded-full bg-orange-500/50 blur-[80px] z-0 pointer-events-none"
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <h5 className="text-xl font-bold text-white mb-2">
            Let&apos;s Connect
          </h5>

          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities. My inbox is always
            open—whether you have a question or just want to say hi.
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="https://github.com" target="_blank">
              <Image
                src="/github-icon.svg"
                alt="Github"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={42}
                height={32}
              />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              required
              placeholder="user@gmail.com"
              className="bg-[#18191E] border border-[#33353F] text-white rounded-lg p-3"
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="bg-[#18191E] border border-[#33353F] text-white rounded-lg p-3"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Message..."
              className="bg-[#18191E] border border-[#33353F] text-white rounded-lg p-3 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 hover:from-red-700 hover:via-orange-500 hover:to-yellow-400 text-black font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* TOAST */}
      {showToast && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-[#18191E] border border-green-500 text-green-400 px-8 py-6 rounded-2xl shadow-2xl">
            <p className="font-semibold text-lg text-center">
              ✉️ Email Sent Successfully! 🚀
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
