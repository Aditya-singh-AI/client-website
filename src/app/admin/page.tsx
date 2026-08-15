"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CLINIC_DATA } from "@/constants/business";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      // Default Secure Master Credentials
      if (
        (username.trim().toLowerCase() === "drhemantsingh" || username.trim().toLowerCase() === "drhemant2026" || username.trim().toLowerCase() === "admin") &&
        (password === "nitya2026" || password === "2026nitya" || password === "admin" || password === "admin123")
      ) {
        sessionStorage.setItem("nitya_admin_auth", "true");
        sessionStorage.setItem("nitya_admin_user", username.trim());
        router.push("/admin/dashboard");
      } else {
        setError("Invalid username or password. Please check your credentials.");
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-900/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 space-y-8">
        {/* Clinic Identity */}
        <div className="text-center space-y-2">
          <div className="bg-white p-3 rounded-2xl border border-teal-600/40 inline-block mx-auto shadow-lg shadow-teal-900/50">
            <img src="/logo.png" alt="Nitya Physiotherapy Logo" className="h-14 w-auto object-contain mx-auto" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Clinic Administration</h1>
          <p className="text-xs text-teal-300 font-medium">{CLINIC_DATA.name}</p>
          <p className="text-[11px] text-slate-400">Thatipur, Gwalior • Dr. Hemant Singh PT (BPT)</p>
        </div>

        {error && (
          <div className="p-3.5 bg-rose-950/60 border border-rose-800 rounded-xl text-rose-300 text-xs text-center font-medium animate-in fade-in">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Username
            </label>
            <input
              type="text"
              required
              placeholder="e.g. admin or drhemant"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-xs text-white bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-xs text-white bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-950/50 transition duration-200 disabled:opacity-50"
            >
              {isLoading ? "Authenticating..." : "Sign In to Admin Portal →"}
            </button>
          </div>
        </form>

        <div className="text-center pt-2">
          <Link href="/" className="text-xs text-slate-500 hover:text-teal-400 transition">
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
