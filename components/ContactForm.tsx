"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setResponseMessage(data.message || "Message sent successfully!");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600 resize-none"
            placeholder="How can I help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-400 text-sm text-center">{responseMessage}</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 text-sm text-center">{responseMessage}</p>
        )}
      </div>
    </form>
  );
}
