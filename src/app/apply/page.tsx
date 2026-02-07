"use client";

import { createClient } from "@/lib/supabase/client";
import { submitApplication } from "./actions";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ApplyPage() {
  const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string } } | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [supabase, setSupabase] = useState<ReturnType<typeof createClient> | null>(null);

  useEffect(() => {
    try {
      setSupabase(createClient());
    } catch {
      // Env vars not configured
    }
  }, []);

  useEffect(() => {
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => setUser(user ?? null));
    }
  }, [supabase]);

  const handleSignInWithGoogle = async () => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback?next=/apply` },
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData: Parameters<typeof submitApplication>[0] = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      companyName: (form.elements.namedItem("companyName") as HTMLInputElement).value,
      websiteUrl: (form.elements.namedItem("websiteUrl") as HTMLInputElement).value,
      employeeCount: (form.elements.namedItem("employeeCount") as HTMLInputElement).value,
      mainGoal: (form.elements.namedItem("mainGoal") as HTMLInputElement).value,
      additionalInfo: (form.elements.namedItem("additionalInfo") as HTMLTextAreaElement).value,
    };

    const result = await submitApplication(formData);
    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-[#202124]">
        <nav className="border-b border-[#dadce0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-14">
              <Link href="/" className="text-[22px] font-normal text-[#202124]">
                Influenxers
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h1 className="text-3xl font-normal text-[#202124]">Thank you for applying</h1>
          <p className="mt-4 text-[#5f6368]">
            We&apos;ll review your application and be in touch soon.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block px-6 py-3 text-sm font-medium text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg transition-colors"
          >
            Back to home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <nav className="border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="text-[22px] font-normal text-[#202124]">
              Influenxers
            </Link>
            <Link
              href="/"
              className="text-sm text-[#5f6368] hover:text-[#202124]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <h1 className="text-3xl font-normal text-[#202124]">Apply</h1>
        <p className="mt-2 text-[#5f6368]">
          Tell us about yourself and your startup.
        </p>

        {!user && (
          <div className="mt-8 p-4 rounded-lg border border-[#dadce0] bg-[#f8f9fa]">
            <p className="text-sm text-[#5f6368] mb-3">
              Sign in with Google to pre-fill your name and email.
            </p>
            <button
              type="button"
              onClick={handleSignInWithGoogle}
              disabled={!supabase}
              className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#202124] bg-white border border-[#dadce0] rounded-lg hover:bg-[#f8f9fa] transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        )}

        {user && supabase && (
          <p className="mt-6 text-sm text-[#5f6368]">
            Signed in as {user.email}.{" "}
            <button
              type="button"
              onClick={() => supabase.auth.signOut()}
              className="text-[#4285f4] hover:underline"
            >
              Sign out
            </button>
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#202124] mb-1">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              defaultValue={user?.user_metadata?.full_name}
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#202124] mb-1">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              defaultValue={user?.email}
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-[#202124] mb-1">
              Company name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
              placeholder="Your company"
            />
          </div>

          <div>
            <label htmlFor="websiteUrl" className="block text-sm font-medium text-[#202124] mb-1">
              Website
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              type="url"
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
              placeholder="https://..."
            />
          </div>

          <div>
            <label htmlFor="employeeCount" className="block text-sm font-medium text-[#202124] mb-1">
              Number of employees
            </label>
            <select
              id="employeeCount"
              name="employeeCount"
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="1">Just me</option>
              <option value="2-10">2-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="200+">200+</option>
            </select>
          </div>

          <div>
            <label htmlFor="mainGoal" className="block text-sm font-medium text-[#202124] mb-1">
              Main goal *
            </label>
            <select
              id="mainGoal"
              name="mainGoal"
              required
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent"
            >
              <option value="">Select your primary objective</option>
              <option value="retain-customers">Retain customers</option>
              <option value="retain-investors">Retain investors</option>
              <option value="retain-employees">Retain employees</option>
            </select>
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-[#202124] mb-1">
              Anything we should know about you?
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className="w-full px-4 py-2.5 text-[#202124] bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:border-transparent resize-none"
              placeholder="Tell us about your startup, what you're building, and why you're applying."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 text-sm font-medium text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting…" : "Submit application"}
          </button>
        </form>
      </main>
    </div>
  );
}
