"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function PayingCustomerTicker() {
  const [mrr, setMrr] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setMrr((prev) => (prev >= 10999 ? 10000 : prev + 1));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between border-y border-[#1F1F1F] px-6 py-4 md:px-10">
      <span className="font-mono text-xs text-[#6B6B6B]">
        PAYING_CUSTOMERS_MRR
      </span>
      <span className="font-mono tabular-nums text-xl md:text-2xl text-[#EDEDED]">
        ${mrr.toLocaleString()}/mo
      </span>
      <span className="rounded border border-[#00FF84] px-2 py-0.5 font-mono text-xs text-[#00FF84]">
        LIVE
      </span>
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
                Start writing
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
                    Start writing
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

              {/* Editor Preview Card */}
              <div className="overflow-hidden rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] shadow-none transition-shadow hover:shadow-[0_0_0_1px_rgba(0,255,132,0.2),0_0_30px_rgba(0,255,132,0.08)]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-[#1F1F1F] px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8A2C2C]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8A7A2C]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2C8A52]" />
                  </div>
                  <span className="font-mono text-xs text-[#A3A3A3]">
                    InfluenXers / Narrative OS
                  </span>
                  <div className="w-14" />
                </div>

                {/* Two-pane layout */}
                <div className="flex min-h-[280px]">
                  {/* Left rail */}
                  <div className="w-32 border-r border-[#1F1F1F] py-3">
                    {["Inbox", "Narrative", "Story Bank", "Posts", "Ship"].map(
                      (item, i) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 px-3 py-2 font-mono text-xs ${
                            i === 1
                              ? "border-l-2 border-[#00FF84] bg-[#0F0F0F] text-[#EDEDED]"
                              : "text-[#6B6B6B]"
                          }`}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>

                  {/* Main panel */}
                  <div className="flex-1">
                    {/* Tabs */}
                    <div className="flex border-b border-[#1F1F1F] px-4">
                      {["Narrative.md", "Investor.md", "Customer.md"].map(
                        (tab, i) => (
                          <div
                            key={tab}
                            className={`border-b-2 px-4 py-2 font-mono text-xs ${
                              i === 0
                                ? "border-[#00FF84] text-[#EDEDED]"
                                : "border-transparent text-[#6B6B6B]"
                            }`}
                          >
                            {tab}
                          </div>
                        )
                      )}
                    </div>

                    {/* Content area */}
                    <div className="p-4 font-mono text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-[#6B6B6B]">&gt;</span>
                        <div className="flex-1">
                          <span className="text-[#A3A3A3]">
                            /generate investor story from last 30 days traction
                          </span>
                          <span className="cursor-blink ml-0.5 inline-block h-3 w-0.5 bg-[#00FF84]" />
                        </div>
                      </div>
                      <div className="mt-4 space-y-1 pl-4 text-[#6B6B6B]">
                        <div>→ Hook: why now</div>
                        <div>→ Proof: customer pull</div>
                        <div>→ Narrative: inevitable future</div>
                        <div>→ CTA: book a demo / join waitlist</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between border-t border-[#1F1F1F] px-4 py-1.5 font-mono text-[10px] text-[#6B6B6B]">
                  <span>MODEL: InfluenXers v1</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2C8A52]" />
                    <span>STATUS: READY</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 3. PAYING CUSTOMER TICKER */}
        <PayingCustomerTicker />

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
              {[
                {
                  title: "Narrative OS",
                  desc: "Clarifies what you stand for, what you avoid, and why you win — in one page.",
                  includes: "Investor / Customer / Hiring",
                },
                {
                  title: "Story Bank",
                  desc: "Turns your founder journey, product pull, and customer proof into reusable story assets.",
                  includes: "Founder / Product / Proof",
                },
                {
                  title: "Weekly Output Engine",
                  desc: "Generates posts and content that compound — not random posting.",
                  includes: "Posts / Threads / Rich media",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow"
                >
                  <h3 className="font-medium text-[#EDEDED]">{card.title}</h3>
                  <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                    {card.desc}
                  </p>
                  <p className="mt-4 font-mono text-[10px] text-[#6B6B6B]">
                    Includes: {card.includes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. HOW IT WORKS */}
          <section id="how-it-works" className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              How it works
            </h2>
            <div className="mt-12 space-y-10">
              {[
                {
                  num: "01",
                  title: "Mirror",
                  desc: "We analyze what you're currently signaling and where it's unclear.",
                  artifacts: "One-pager, Story Bank, Weekly Plan",
                },
                {
                  num: "02",
                  title: "Craft",
                  desc: "We build your story assets: investor narrative, customer narrative, hiring narrative.",
                  artifacts: "Narrative docs, Story Bank, Content calendar",
                },
                {
                  num: "03",
                  title: "Ship",
                  desc: "We turn stories into weekly content: posts, threads, visuals, and rich media.",
                  artifacts: "Weekly posts, Threads, Rich media",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-6">
                  <span className="shrink-0 rounded-full border border-[#1F1F1F] bg-[#0F0F0F] px-3 py-1 font-mono text-xs text-[#A3A3A3]">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-medium text-[#EDEDED]">{step.title}</h3>
                    <p className="mt-2 text-[#A3A3A3] leading-relaxed">
                      {step.desc}
                    </p>
                    <p className="mt-2 font-mono text-[10px] text-[#6B6B6B]">
                      Output artifacts: {step.artifacts}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. BUILT FOR */}
          <section className="border-b border-[#1F1F1F] py-16 md:py-20">
            <h2 className="text-2xl font-medium text-[#EDEDED] md:text-3xl">
              Built for
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Founders</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#A3A3A3]">
                  <li>• Raise faster with clearer conviction</li>
                  <li>• Win customers with stories that land</li>
                  <li>• Recruit talent with a magnetic mission</li>
                </ul>
              </div>
              <div className="card-hover rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <h3 className="font-medium text-[#EDEDED]">Growth teams</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#A3A3A3]">
                  <li>• Consistent narrative across channels</li>
                  <li>• Faster content cycles</li>
                  <li>• More output with the same headcount</li>
                </ul>
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
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#0F0F0F] font-mono text-sm text-[#A3A3A3]">
                  HP
                </div>
                <div>
                  <h3 className="font-medium text-[#EDEDED]">Harsh Pamnani</h3>
                  <p className="mt-1 font-mono text-xs text-[#6B6B6B]">
                    Brand builder. Author of multiple brand-building books.
                  </p>
                  <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                    Studied how founders and startups skyrocket their brands — and
                    turned it into a system.
                  </p>
                </div>
              </div>
              <div className="card-hover flex gap-6 rounded-[14px] border border-[#1F1F1F] bg-[#0B0B0B] p-6 transition-shadow">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#0F0F0F] font-mono text-sm text-[#A3A3A3]">
                  AL
                </div>
                <div>
                  <h3 className="font-medium text-[#EDEDED]">Amritashwar Lal</h3>
                  <p className="mt-1 font-mono text-xs text-[#6B6B6B]">
                    Performance marketing product builder across Instagram,
                    Tapestry, and Snap.
                  </p>
                  <p className="mt-3 text-sm text-[#A3A3A3] leading-relaxed">
                    Built products that helped the world's best brands grow — now
                    applying that playbook to founders.
                  </p>
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
                Start writing
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
