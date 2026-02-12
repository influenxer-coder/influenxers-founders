"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function PayingCustomerTerminal() {
  const [count, setCount] = useState(10156);
  const [reach, setReach] = useState(100000000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 10999 ? 10000 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReach((prev) => {
        const step = Math.random() > 0.5 ? 1 : -1;
        const next = prev + step * Math.floor(Math.random() * 5000 + 1000);
        return Math.max(99500000, Math.min(100500000, next));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-[14px] border border-[#2E1065] bg-[#120A24] shadow-none transition-shadow hover:shadow-[0_0_0_1px_rgba(34,211,238,0.22),0_0_30px_rgba(34,211,238,0.12)]">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-[#2E1065] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#6D2C8A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2C6D8A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2C8A6D]" />
      </div>
      {/* Content */}
      <div className="p-6 font-mono">
        <p className="text-xs text-[#9B8FB8]">monthly active startups</p>
        <p className="mt-2 tabular-nums text-3xl font-medium text-[#EDEDED] transition-all duration-300">
          {count.toLocaleString()}
        </p>
        <p className="mt-6 text-xs text-[#9B8FB8]">
          influencing people across US via multiple channels
        </p>
        <p className="mt-1 tabular-nums text-2xl font-medium text-[#EDEDED] transition-all duration-300">
          {reach.toLocaleString()}
        </p>
        <span className="mt-4 inline-block rounded border border-[#22D3EE] px-2 py-0.5 text-xs text-[#22D3EE]">
          LIVE
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-grid min-h-screen bg-[#0B0616]">
      <div className="hero-vignette">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10">
          {/* 1. TOP NAV */}
          <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[#2E1065] bg-[#0B0616]/90 backdrop-blur-sm">
            <Link
              href="/"
              className="font-mono text-sm font-medium text-[#EDEDED]"
            >
              InfluenXers
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="font-mono text-sm text-[#A3A3A3] hover:text-[#00FF84] transition-colors"
              >
                Docs
              </Link>
              <Link
                href="#reduce-suite"
                className="font-mono text-sm text-[#A3A3A3] hover:text-[#22D3EE] transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="font-mono text-sm text-[#A3A3A3] hover:text-[#22D3EE] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/apply"
                className="rounded-[10px] border border-[#2E1065] px-4 py-2 font-mono text-sm text-[#EDEDED] hover:border-[#22D3EE] hover:bg-[#140C2B] transition-colors"
              >
                Start for free
              </Link>
            </div>
          </nav>

          {/* 2. HERO */}
          <section className="py-16 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 inline-block rounded-full border border-[#2E1065] bg-[#140C2B] px-3 py-1 font-mono text-xs text-[#9B8FB8]">
                  THE AWE-INSPIRING HOOK
                </div>
                <h1 className="text-3xl font-medium leading-tight text-[#EDEDED] md:text-5xl">
                  Don't Just Build a Brand. Build an Influence.
                </h1>
                <p className="mt-6 text-[#B7B0C8] leading-relaxed">
                  Most pitches fail because they trigger Reactance - the natural
                  "parking brake" that makes people push back when they feel
                  pushed. InfluenXers is the AI catalyst that removes the
                  barriers stopping investors, customers, and talent from
                  choosing you.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/apply"
                    className="rounded-[10px] bg-[#22D3EE] px-6 py-3 font-medium text-[#0B0616] transition-all hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Catalyze My Brand (Start for Free)
                  </Link>
                  <Link
                    href="#parking-brake"
                    className="rounded-[10px] border border-[#2E1065] px-6 py-3 font-medium text-[#EDEDED] transition-all hover:-translate-y-0.5 hover:border-[#22D3EE] hover:bg-[#140C2B]"
                  >
                    See the brake
                  </Link>
                </div>
                <p className="mt-6 font-mono text-xs text-[#7C7395]">
                  High-arousal, low-friction. Built for founders.
                </p>
              </div>
              <PayingCustomerTerminal />
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-[1120px] px-6 md:px-10">
          {/* 3. THE PROBLEM */}
          <section
            id="parking-brake"
            className="border-b border-[#2E1065] py-16 md:py-20"
          >
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-4xl">
              The "Parking Brake" Effect
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="rounded-[16px] border border-[#2E1065] bg-[#140C2B] p-6">
                <p className="font-mono text-xs text-[#9B8FB8]">
                  Why your current pitch is stuck in the Status Quo.
                </p>
                <p className="mt-4 text-[#B7B0C8] leading-relaxed">
                  You have a great product, but your audience is clinging to what
                  they know. This is Endowment Bias: people overvalue what they
                  already have and fear the risk of change. To them, the
                  "uncertainty tax" of a new brand feels too high.
                </p>
              </div>
              <div className="rounded-[16px] border border-[#2E1065] bg-[#140C2B] p-6">
                <p className="font-mono text-xs text-[#9B8FB8]">The Solution</p>
                <p className="mt-4 text-[#B7B0C8] leading-relaxed">
                  We don't just "write copy." We perform a Force Field Analysis
                  to identify and remove the restraining forces holding your
                  growth back.
                </p>
              </div>
            </div>
          </section>

          {/* 4. FEATURES */}
          <section
            id="reduce-suite"
            className="border-b border-[#2E1065] py-16 md:py-20"
          >
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-4xl">
              The "REDUCE" & "STEPPS" Suite
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="card-hover rounded-[16px] border border-[#2E1065] bg-[#120A24] p-6 transition-shadow">
                <p className="font-mono text-xs text-[#9B8FB8]">
                  For Investors (Overcoming Endowment)
                </p>
                <h3 className="mt-3 text-lg font-medium text-[#EDEDED]">
                  The Cost of Inaction Generator
                </h3>
                <p className="mt-3 text-sm text-[#B7B0C8]">
                  We help you show VCs exactly what they lose by staying with the
                  status quo. Because losses loom larger than gains, making
                  "doing nothing" feel expensive is the fastest way to move the
                  needle.
                </p>
              </div>
              <div className="card-hover rounded-[16px] border border-[#2E1065] bg-[#120A24] p-6 transition-shadow">
                <p className="font-mono text-xs text-[#9B8FB8]">
                  For Customers (Enhancing Trialability)
                </p>
                <h3 className="mt-3 text-lg font-medium text-[#EDEDED]">
                  The Trialability Architect
                </h3>
                <p className="mt-3 text-sm text-[#B7B0C8]">
                  We design "low-bar" entry points for your product. Innovations
                  that are easier to try are more likely to be bought. We turn
                  high-stakes purchases into simple, reversible trials.
                </p>
              </div>
              <div className="card-hover rounded-[16px] border border-[#2E1065] bg-[#120A24] p-6 transition-shadow">
                <p className="font-mono text-xs text-[#9B8FB8]">
                  For Employees (Evoking Awe & Stories)
                </p>
                <h3 className="mt-3 text-lg font-medium text-[#EDEDED]">
                  Trojan Horse Narrative Builder
                </h3>
                <p className="mt-3 text-sm text-[#B7B0C8]">
                  Don't just list benefits; tell a story. Stories are vessels for
                  information that are harder to dispute than facts. We embed
                  your mission in high-arousal narratives that evoke Awe, driving
                  top talent to share your vision.
                </p>
              </div>
            </div>
          </section>

          {/* 5. SOCIAL PROOF */}
          <section
            id="social-proof"
            className="border-b border-[#2E1065] py-16 md:py-20"
          >
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-4xl">
              Built to Show. Built to Grow.
            </h2>
            <p className="mt-4 text-[#B7B0C8]">
              See the Corroborating Evidence from founders who stopped "pushing"
              and started catalyzing.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Series A Raised",
                "Enterprise Win",
                "Top 10 Launch",
                "Global Partners",
                "Major Press",
                "Pipeline Doubled",
                "Hiring Surge",
                "Revenue Spike",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[14px] border border-[#2E1065] bg-[#140C2B] px-4 py-6 text-center font-mono text-xs text-[#9B8FB8]"
                >
                  {label}
                </div>
              ))}
            </div>
          </section>

          {/* 6. WHY US */}
          <section className="border-b border-[#2E1065] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-4xl">
              Minter of Social Currency
            </h2>
            <p className="mt-4 text-[#B7B0C8] leading-relaxed">
              InfluenXers doesn't just make you look good; it makes your audience
              look smart for choosing you. By leveraging Scarcity and
              Exclusivity, we help you frame your brand as an insider discovery,
              giving your supporters the Social Currency they crave.
            </p>
          </section>

          {/* 7. FINAL CTA */}
          <section className="py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-4xl">
              Eliminate the Fallback Options of the Status Quo.
            </h2>
            <p className="mt-4 text-[#B7B0C8] leading-relaxed">
              The most successful leaders "Burn the Ships" to ensure there is no
              retreat to the old way of doing things. It's time to commit to
              your influence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="rounded-[10px] bg-[#22D3EE] px-6 py-3 font-medium text-[#0B0616] transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Start Your First Catalyst Session
              </Link>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-[#2E1065] py-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="font-mono text-xs text-[#7C7395]">
                © {new Date().getFullYear()} InfluenXers
              </p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="font-mono text-xs text-[#7C7395] hover:text-[#22D3EE] transition-colors"
                >
                  Docs
                </Link>
                <Link
                  href="#reduce-suite"
                  className="font-mono text-xs text-[#7C7395] hover:text-[#22D3EE] transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/apply"
                  className="font-mono text-xs text-[#7C7395] hover:text-[#22D3EE] transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
