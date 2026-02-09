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
    <div className="overflow-hidden rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] shadow-none transition-shadow hover:shadow-[0_0_0_1px_rgba(0,255,132,0.2),0_0_30px_rgba(0,255,132,0.08)]">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-[#1F1F1F] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#8A2C2C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#8A7A2C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2C8A52]" />
      </div>
      {/* Content */}
      <div className="p-6 font-mono">
        <p className="text-xs text-[#6B6B6B]">monthly active startups</p>
        <p className="mt-2 tabular-nums text-3xl font-medium text-[#EDEDED] transition-all duration-300">
          {count.toLocaleString()}
        </p>
        <p className="mt-6 text-xs text-[#6B6B6B]">
          influencing people across US via multiple channels
        </p>
        <p className="mt-1 tabular-nums text-2xl font-medium text-[#EDEDED] transition-all duration-300">
          {reach.toLocaleString()}
        </p>
        <span className="mt-4 inline-block rounded border border-[#00FF84] px-2 py-0.5 text-xs text-[#00FF84]">
          LIVE
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-grid min-h-screen bg-[#050505]">
      <div className="hero-vignette">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10">
          {/* 1. TOP NAV */}
          <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[#1F1F1F] bg-[#050505]/90 backdrop-blur-sm">
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
                href="#pricing"
                className="font-mono text-sm text-[#A3A3A3] hover:text-[#00FF84] transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="font-mono text-sm text-[#A3A3A3] hover:text-[#00FF84] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/apply"
                className="rounded-[10px] border border-[#1F1F1F] px-4 py-2 font-mono text-sm text-[#EDEDED] hover:border-[#1F1F1F] hover:bg-[#0F0F0F] transition-colors"
              >
                Start influencing
              </Link>
            </div>
          </nav>

          {/* 2. HERO */}
          <section className="py-16 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 inline-block rounded-full border border-[#1F1F1F] bg-[#0B0B0B] px-3 py-1 font-mono text-xs text-[#6B6B6B]">
                  FOUNDERS • GROWTH • STORY OPS
                </div>
                <h1 className="text-3xl font-medium leading-tight text-[#EDEDED] md:text-4xl">
                  Turn your startup into an influencing machine.
                </h1>
                <p className="mt-6 text-[#A3A3A3] leading-relaxed">
                  InfluenXers helps founders and growth teams craft stories that
                  move customers and investors — then turns those stories into
                  high-performing content, weekly.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/apply"
                    className="rounded-[10px] bg-[#00FF84] px-6 py-3 font-medium text-[#050505] transition-all hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Start influencing
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="rounded-[10px] border border-[#1F1F1F] px-6 py-3 font-medium text-[#EDEDED] transition-all hover:-translate-y-0.5 hover:border-[#1F1F1F] hover:bg-[#0F0F0F]"
                  >
                    See how it works
                  </Link>
                </div>
                <p className="mt-6 font-mono text-xs text-[#6B6B6B]">
                  Built for founders. Used by growth teams.
                </p>
              </div>
              <PayingCustomerTerminal />
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-[1120px] px-6 md:px-10">
          {/* 4. FEATURES */}
          <section className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              Influence minds. Ship stories. Build conviction.
            </h2>
            <p className="mt-2 text-[#A3A3A3]">
              A narrative system that turns clarity into weekly output.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Attract customers</h3>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Attract investors</h3>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Attract employees</h3>
              </div>
            </div>
          </section>

          {/* 5. WHAT YOU CAN DO */}
          <section id="how-it-works" className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              What you can do
            </h2>
            <p className="mt-2 text-[#A3A3A3]">
              Pick a goal. We guide the work.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <p className="font-mono text-[10px] text-[#6B6B6B]">LIST</p>
                <h3 className="mt-2 font-medium text-[#EDEDED]">Build a target list</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Get a clean list of investors, customers, or hires.
                </p>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <p className="font-mono text-[10px] text-[#6B6B6B]">SEGMENT</p>
                <h3 className="mt-2 font-medium text-[#EDEDED]">Segment list as favorable</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Split your list into 2–5 segments that matter.
                </p>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <p className="font-mono text-[10px] text-[#6B6B6B]">MOCROTARGETED MESSAGE</p>
                <h3 className="mt-2 font-medium text-[#EDEDED]">Write message variants</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Generate 3–5 versions. You edit and send.
                </p>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <p className="font-mono text-[10px] text-[#6B6B6B]">SHADOW ADS</p>
                <h3 className="mt-2 font-medium text-[#EDEDED]">Use our account to market</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Run on LinkedIn, email (your list), ads, or communities.
                </p>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <p className="font-mono text-[10px] text-[#6B6B6B]">ITERATE</p>
                <h3 className="mt-2 font-medium text-[#EDEDED]">Learn and repeat</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  See what works. Scale winners next week.
                </p>
              </div>
            </div>
          </section>

          {/* 6. BUILT FOR */}
          <section className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              Built for
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Attract more customers</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Get in front of B2B and D2C consumers with clear messaging.
                </p>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Attract investors</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Tell your story with conviction. Make the opportunity obvious.
                </p>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Attract employees</h3>
                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Mission becomes a magnet. Recruit talent that fits.
                </p>
              </div>
            </div>
          </section>

          {/* 7. PRICING */}
          <section id="pricing" className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              Pricing that scales with your ambition.
            </h2>
            <p className="mt-4 font-mono text-xs text-[#6B6B6B]">
              Monthly • No hidden fees • Upgrade anytime
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$20/mo",
                  items: ["1 person", "Create posts + content"],
                  cta: "Start Starter",
                  highlight: false,
                },
                {
                  name: "Rich",
                  price: "$30/mo",
                  items: ["Everything in Starter", "Video + rich content generation"],
                  cta: "Go Rich",
                  highlight: true,
                },
                {
                  name: "Scale",
                  price: "$60/mo",
                  items: [
                    "Up to 5× scaling (teams / more output)",
                    "Priority workflows",
                  ],
                  cta: "Scale up",
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`card-hover rounded-[14px] border p-6 transition-shadow ${
                    plan.highlight
                      ? "border-[#1F1F1F] bg-[#0F0F0F]"
                      : "border-[#1F1F1F] bg-[#0B0B0B]"
                  }`}
                >
                  <h3 className="font-medium text-[#EDEDED]">{plan.name}</h3>
                  <p className="mt-2 font-mono text-2xl text-[#EDEDED]">
                    {plan.price}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[#A3A3A3]">
                    {plan.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <Link
                    href="/apply"
                    className={`mt-6 block w-full rounded-[10px] py-3 text-center font-medium transition-all ${
                      plan.highlight
                        ? "bg-[#00FF84] text-[#050505] hover:-translate-y-0.5 hover:brightness-110"
                        : "border border-[#1F1F1F] text-[#EDEDED] hover:bg-[#0F0F0F]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs text-[#6B6B6B]">
              Cancel anytime. Built for speed.
            </p>
          </section>

          {/* 8. FOUNDERS */}
          <section className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              Built by builders.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="card-hover flex gap-6 rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <a
                  href="https://www.linkedin.com/in/harshpamnani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Harsh+Pamnani&size=112&background=0F0F0F&color=A3A3A3"
                    alt="Harsh Pamnani"
                    className="h-14 w-14 rounded-full border border-[#1F1F1F] object-cover"
                  />
                </a>
                <div>
                  <h3 className="font-medium text-[#EDEDED]">Harsh Pamnani</h3>
                  <p className="mt-1 font-mono text-xs text-[#6B6B6B]">
                    Marketing Head at T-Hub. Best-selling author of 4 books on
                    branding. 100+ articles in Forbes, ET, FE. 7x TEDx speaker.
                    Visiting Faculty at IIMs & MICA. MBA from XLRI.
                  </p>
                  <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                    Marketer with deep experience crafting brand narratives that
                    build trust. Studied how founders skyrocket their brands — and
                    turned it into a system.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/harshpamnani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-mono text-xs text-[#00FF84] hover:underline"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
              <div className="card-hover flex gap-6 rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <a
                  href="https://www.linkedin.com/in/amritashwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Amritashwar+Lal&size=112&background=0F0F0F&color=A3A3A3"
                    alt="Amritashwar Lal"
                    className="h-14 w-14 rounded-full border border-[#1F1F1F] object-cover"
                  />
                </a>
                <div>
                  <h3 className="font-medium text-[#EDEDED]">Amritashwar Lal</h3>
                  <p className="mt-1 font-mono text-xs text-[#6B6B6B]">
                    Product Lead @ Snapchat Brand & AR Ads. Ex-Instagram Reels
                    Monetization. Ex-Tapestry AI, Apple Maps, Yahoo. CMU Tepper MBA.
                  </p>
                  <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                    Built Instagram Reels advertising and products for Fortune 500
                    brands. Now applying that playbook to help founders grow.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/amritashwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-mono text-xs text-[#00FF84] hover:underline"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 9. FINAL CTA */}
          <section className="py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-4xl">
              Make your startup inevitable.
            </h2>
            <p className="mt-4 text-[#A3A3A3]">
              Start with your story. Ship weekly. Compound.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="rounded-[10px] bg-[#00FF84] px-6 py-3 font-medium text-[#050505] transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Start influencing
              </Link>
              <Link
                href="#"
                className="rounded-[10px] border border-[#1F1F1F] px-6 py-3 font-medium text-[#EDEDED] transition-all hover:-translate-y-0.5 hover:border-[#1F1F1F] hover:bg-[#0F0F0F]"
              >
                Talk to us
              </Link>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-[#1F1F1F] py-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="font-mono text-xs text-[#6B6B6B]">
                © {new Date().getFullYear()} InfluenXers
              </p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="font-mono text-xs text-[#6B6B6B] hover:text-[#00FF84] transition-colors"
                >
                  Docs
                </Link>
                <Link
                  href="#pricing"
                  className="font-mono text-xs text-[#6B6B6B] hover:text-[#00FF84] transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/apply"
                  className="font-mono text-xs text-[#6B6B6B] hover:text-[#00FF84] transition-colors"
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
