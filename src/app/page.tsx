import Link from "next/link";
import { WhoItForTabs } from "./components/WhoItForTabs";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#for-founders", label: "For Founders" },
  { href: "#for-partners", label: "For Partners" },
  { href: "#mission", label: "Mission" },
];

const credibility = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Narrative clarity",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Proof-first positioning",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Distribution loops",
  },
];

const campaigns = [
  {
    title: "Retain customers",
    subhead: "Tell stories to customers",
    copy: "Create and post content across channels to drive demand and loyalty.",
  },
  {
    title: "Retain investors",
    subhead: "Investor pitches that hold up",
    copy: "Narrative and proof that makes the opportunity obvious.",
  },
  {
    title: "Retain employees",
    subhead: "Attract the right people",
    copy: "Mission becomes a magnet. Recruiting content that resonates.",
  },
];

const howItWorksSteps = [
  { step: 1, title: "Apply", detail: "Tell us about your startup and what you're building." },
  { step: 2, title: "We review", detail: "We check your background and ideas to see if we can help." },
  { step: 3, title: "You're in", detail: "If it's a fit, we accept your signup and set up an intro call." },
  { step: 4, title: "Intro call with an expert", detail: "We collect everything we need to create your best brand narrative." },
  { step: 5, title: "Upload your info", detail: "Once all information is in, we'll notify you on the next step." },
  { step: 6, title: "Choose your first campaign", detail: "Retain customers, retain employees, or retain investors. Pick one objective so we optimize for it." },
  { step: 7, title: "We run the campaign", detail: "We generate content and post across your accounts and the web to drive leads for your chosen outcome." },
];

const problemCards = [
  {
    title: "Clarity",
    copy: "The world doesn't understand what you do or why it matters.",
  },
  {
    title: "Trust",
    copy: "Proof gets lost in the noise. Investors and customers need to see it clearly.",
  },
  {
    title: "Momentum",
    copy: "Without a story that spreads, growth stalls.",
  },
];

const testimonials = [
  {
    quote: "Finally, a system that makes our story tangible. Our last raise felt completely different.",
    name: "Sarah Chen",
    role: "Founder, EdTech startup",
  },
  {
    quote: "We went from 'what do you do again?' to term sheets. The clarity piece was the unlock.",
    name: "Marcus Okonkwo",
    role: "CEO, Climate tech",
  },
  {
    quote: "As an agency, this gave us a framework we can repeat. Our clients see the difference.",
    name: "Elena Vasquez",
    role: "Managing Partner, Brand studio",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      {/* 1. Top Nav - Google-style minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="#" className="text-[22px] font-normal text-[#202124] tracking-tight">
              Influenxers
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/apply"
                className="px-4 py-2 text-sm font-medium text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg transition-colors"
              >
                Apply
              </Link>
              <Link
                href="#partner"
                className="px-4 py-2 text-sm font-medium text-[#5f6368] hover:text-[#202124] transition-colors"
              >
                Partner
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-14">
        {/* 2. Hero - Clean, centered, Google-style */}
        <section className="relative overflow-hidden">
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#202124] leading-tight tracking-tight animate-fade-in-up">
              The Founder Success Platform
            </h1>
            <p className="mt-6 text-xl text-[#5f6368] max-w-2xl mx-auto animate-fade-in-up animation-delay-100 opacity-0 [animation-fill-mode:forwards]">
              We help founders build an irrefutable brand—trusted by investors,
              loved by customers, and magnetic to talent.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
              <Link
                href="/apply"
                className="px-6 py-3 text-sm font-medium text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg transition-colors"
              >
                Apply
              </Link>
              <Link
                href="#partner"
                className="px-6 py-3 text-sm font-medium text-[#5f6368] hover:text-[#202124] border border-[#dadce0] hover:border-[#5f6368] rounded-lg transition-colors"
              >
                Become a Partner
              </Link>
            </div>
            <p className="mt-12 text-sm text-[#5f6368] animate-fade-in-up animation-delay-300 opacity-0 [animation-fill-mode:forwards]">
              Only one rule: it must serve humanity.
            </p>
            <p className="mt-2 text-sm text-[#5f6368] animate-fade-in-up animation-delay-300 opacity-0 [animation-fill-mode:forwards]">
              Free to use. Pay only per campaign you run.
            </p>
          </div>
        </section>

        {/* 3. Credibility Strip - Minimal */}
        <section className="bg-[#f8f9fa] border-y border-[#dadce0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center">
              {credibility.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[#5f6368]"
                >
                  <span className="text-[#4285f4]">{item.icon}</span>
                  <span className="font-medium text-[#202124]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Problem Section */}
        <section id="for-founders" className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124] max-w-2xl">
              Great ideas don&apos;t fail because founders aren&apos;t smart.
            </h2>
            <p className="mt-4 text-lg text-[#5f6368] max-w-2xl">
              Dreams die because the world doesn&apos;t clearly understand value,
              proof, or why now.
            </p>
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg border border-[#dadce0] hover:border-[#4285f4]/30 transition-colors"
                >
                  <h3 className="text-base font-medium text-[#202124]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[#5f6368] text-[15px] leading-relaxed">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Campaigns */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124]">
              Run campaigns for the outcomes that matter
            </h2>
            <p className="mt-4 text-[#5f6368] max-w-2xl">
              Choose one objective per campaign so we can optimize for it. Pay only for the campaigns you run.
            </p>
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {campaigns.map((col, i) => (
                <div key={i} className="p-6 rounded-lg bg-white border border-[#dadce0] hover:border-[#4285f4]/30 transition-colors">
                  <h3 className="text-base font-medium text-[#202124]">
                    {col.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#4285f4] font-medium">
                    {col.subhead}
                  </p>
                  <p className="mt-4 text-[#5f6368] text-[15px] leading-relaxed">
                    {col.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124]">
              How it works
            </h2>
            <p className="mt-4 text-[#5f6368]">
              Apply. We review. If we can help, we get you set up. Then you run campaigns for the outcomes you care about.
            </p>
            <div className="mt-14 space-y-1">
              {howItWorksSteps.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-4 border-b border-[#dadce0] last:border-0 hover:bg-[#f8f9fa]/50 rounded-lg transition-colors -mx-2 px-6"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-medium text-[#202124]">
                      {item.title}
                    </h3>
                    {item.detail && (
                      <p className="text-sm text-[#5f6368] mt-0.5">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Phase 1 vs Phase 2 */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124] mb-14">
              Where we are
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border-2 border-[#4285f4]">
                <span className="text-xs font-medium text-[#4285f4] uppercase tracking-wider">
                  Phase 1
                </span>
                <h3 className="mt-2 text-lg font-medium text-[#202124]">
                  Agency-powered founder success
                </h3>
                <p className="mt-3 text-[#5f6368] text-[15px] leading-relaxed">
                  Hands-on work with founders and agency partners. Narrative,
                  positioning, deck, and story system. We&apos;re doing it now.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wider">
                  Phase 2
                </span>
                <h3 className="mt-2 text-lg font-medium text-[#202124]">
                  Agentic platform
                </h3>
                <p className="mt-3 text-[#5f6368] text-[15px] leading-relaxed">
                  The same system, scaled. Tools and workflows that help founders
                  and partners move faster. Building toward it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Who It's For */}
        <section id="for-partners" className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124] text-center mb-2">
              Who it&apos;s for
            </h2>
            <p className="text-[#5f6368] text-center mb-14">
              Two paths. Same mission.
            </p>
            <WhoItForTabs />
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124] text-center mb-14">
              What founders and partners say
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg border border-[#dadce0]"
                >
                  <p className="text-[#5f6368] text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="font-medium text-[#202124]">{t.name}</p>
                    <p className="text-sm text-[#5f6368]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="apply" className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#202124]">
              If you&apos;re building to serve, you&apos;re not alone.
            </h2>
            <p className="mt-4 text-[#5f6368]">
              Join founders and partners who put humanity first.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-3 text-sm font-medium text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg transition-colors"
              >
                Apply
              </Link>
              <Link
                href="#"
                id="partner"
                className="px-8 py-3 text-sm font-medium text-[#5f6368] hover:text-[#202124] border border-[#dadce0] hover:border-[#5f6368] rounded-lg transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Mission strip */}
        <section id="mission" className="py-14 bg-white border-t border-[#dadce0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-normal text-[#202124]">
              Our mission
            </h2>
            <p className="mt-4 text-[#5f6368]">
              Help humanity-first founders build brands that matter—so good ideas
              get the traction they deserve.
            </p>
          </div>
        </section>

        {/* 11. Footer */}
        <footer className="border-t border-[#dadce0] bg-[#f8f9fa] py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <Link href="#" className="text-base font-medium text-[#202124]">
                  Influenxers
                </Link>
                <div className="flex gap-6">
                  <Link
                    href="#how-it-works"
                    className="text-sm text-[#5f6368] hover:text-[#202124]"
                  >
                    How it works
                  </Link>
                  <Link
                    href="#for-founders"
                    className="text-sm text-[#5f6368] hover:text-[#202124]"
                  >
                    For Founders
                  </Link>
                  <Link
                    href="#for-partners"
                    className="text-sm text-[#5f6368] hover:text-[#202124]"
                  >
                    For Partners
                  </Link>
                  <Link
                    href="#mission"
                    className="text-sm text-[#5f6368] hover:text-[#202124]"
                  >
                    Mission
                  </Link>
                </div>
              </div>
              <a
                href="mailto:hello@influenxers.com"
                className="text-sm text-[#5f6368] hover:text-[#202124]"
              >
                hello@influenxers.com
              </a>
            </div>
            <p className="mt-8 text-sm text-[#5f6368]">
              © {new Date().getFullYear()} Influenxers. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
