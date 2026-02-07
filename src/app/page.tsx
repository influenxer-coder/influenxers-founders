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

const whatWeDoColumns = [
  {
    title: "Customers",
    subhead: "Translate solution → demand",
    bullets: [
      "Positioning that resonates with who you serve",
      "Messaging that converts curiosity into action",
      "Content that builds trust before the sale",
    ],
  },
  {
    title: "Investors",
    subhead: "Story + proof that holds up",
    bullets: [
      "Narrative that makes the opportunity obvious",
      "Proof framing that answers the hardest questions",
      "Deck, memo, and pitch that align",
    ],
  },
  {
    title: "Employees & Partners",
    subhead: "Mission becomes a magnet",
    bullets: [
      "Recruiting materials that attract the right people",
      "Culture and values that show up in every touchpoint",
      "Partnership positioning that creates alignment",
    ],
  },
];

const howItWorksSteps = [
  { step: 1, title: "Intent check", detail: "Humanity-first" },
  { step: 2, title: "Problem clarity", detail: "" },
  { step: 3, title: "Proof & traction", detail: "" },
  { step: 4, title: "Story system", detail: "Deck, website, recruiting, content" },
  { step: 5, title: "Distribution loops", detail: "Repeatable" },
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
    <div className="min-h-screen bg-[#fafafa] text-zinc-900">
      {/* 1. Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="#" className="text-xl font-semibold text-zinc-900">
              Influenxers
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#apply"
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
              >
                Apply
              </Link>
              <Link
                href="#partner"
                className="px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 hover:border-zinc-400 rounded-lg transition-colors"
              >
                Partner
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* 2. Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-teal-50/50 to-transparent pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 animate-fade-in-up">
              The Founder Success Platform for Humanity-First Startups
            </h1>
            <p className="mt-6 text-xl text-zinc-600 max-w-2xl animate-fade-in-up animation-delay-100 opacity-0 [animation-fill-mode:forwards]">
              We help founders build an irrefutable brand—trusted by investors,
              loved by customers, and magnetic to talent.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
              <Link
                href="#apply"
                className="px-6 py-3 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
              >
                Apply
              </Link>
              <Link
                href="#partner"
                className="px-6 py-3 text-sm font-medium text-zinc-700 border border-zinc-300 hover:border-zinc-400 rounded-lg transition-colors"
              >
                Become a Partner
              </Link>
            </div>
            <p className="mt-10 text-sm text-zinc-500 italic animate-fade-in-up animation-delay-300 opacity-0 [animation-fill-mode:forwards]">
              Only one rule: it must serve humanity.
            </p>
          </div>
        </section>

        {/* 3. Credibility Strip */}
        <section className="border-y border-zinc-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center">
              {credibility.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-zinc-600"
                >
                  <span className="text-teal-600">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Problem Section */}
        <section id="for-founders" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 max-w-2xl">
              Great ideas don&apos;t fail because founders aren&apos;t smart.
            </h2>
            <p className="mt-4 text-xl text-zinc-600 max-w-2xl">
              Dreams die because the world doesn&apos;t clearly understand value,
              proof, or why now.
            </p>
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-zinc-600">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What We Do */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              Influenxers builds your Founder Brand Engine
            </h2>
            <div className="mt-16 grid sm:grid-cols-3 gap-8">
              {whatWeDoColumns.map((col, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {col.title}
                  </h3>
                  <p className="text-sm text-teal-600 font-medium">
                    {col.subhead}
                  </p>
                  <ul className="space-y-2">
                    {col.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-zinc-600 text-sm">
                        <span className="text-teal-500">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              How it works
            </h2>
            <div className="mt-12 space-y-4">
              {howItWorksSteps.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 p-4 rounded-lg hover:bg-white/80 transition-colors"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-semibold flex items-center justify-center text-sm">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {item.title}
                    </h3>
                    {item.detail && (
                      <p className="text-sm text-zinc-500 mt-0.5">
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
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-16">
              Where we are
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl border-2 border-teal-600 bg-teal-50/30">
                <span className="text-sm font-medium text-teal-600 uppercase tracking-wider">
                  Phase 1
                </span>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                  Agency-powered founder success
                </h3>
                <p className="mt-4 text-zinc-600">
                  Hands-on work with founders and agency partners. Narrative,
                  positioning, deck, and story system. We&apos;re doing it now.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-zinc-200 bg-zinc-50/50">
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  Phase 2
                </span>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                  Agentic platform
                </h3>
                <p className="mt-4 text-zinc-600">
                  The same system, scaled. Tools and workflows that help founders
                  and partners move faster. Building toward it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Who It's For */}
        <section id="for-partners" className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center mb-4">
              Who it&apos;s for
            </h2>
            <p className="text-zinc-600 text-center mb-16">
              Two paths. Same mission.
            </p>
            <WhoItForTabs />
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center mb-16">
              What founders and partners say
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-6 bg-zinc-50 rounded-xl border border-zinc-100"
                >
                  <p className="text-zinc-700 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4">
                    <p className="font-medium text-zinc-900">{t.name}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section id="apply" className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              If you&apos;re building to serve, you&apos;re not alone.
            </h2>
            <p className="mt-4 text-zinc-600">
              Join founders and partners who put humanity first.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="px-8 py-4 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
              >
                Apply
              </Link>
              <Link
                href="#"
                id="partner"
                className="px-8 py-4 text-base font-medium text-zinc-700 border border-zinc-300 hover:border-zinc-400 rounded-lg transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Mission strip */}
        <section id="mission" className="py-16 bg-white border-t border-zinc-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900">
              Our mission
            </h2>
            <p className="mt-4 text-zinc-600">
              Help humanity-first founders build brands that matter—so good ideas
              get the traction they deserve.
            </p>
          </div>
        </section>

        {/* 11. Footer */}
        <footer className="border-t border-zinc-200 bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-8">
                <Link href="#" className="text-lg font-semibold text-zinc-900">
                  Influenxers
                </Link>
                <div className="flex gap-6">
                  <Link
                    href="#how-it-works"
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    How it works
                  </Link>
                  <Link
                    href="#for-founders"
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    For Founders
                  </Link>
                  <Link
                    href="#for-partners"
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    For Partners
                  </Link>
                  <Link
                    href="#mission"
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    Mission
                  </Link>
                </div>
              </div>
              <a
                href="mailto:hello@influenxers.com"
                className="text-sm text-zinc-600 hover:text-zinc-900"
              >
                hello@influenxers.com
              </a>
            </div>
            <p className="mt-8 text-sm text-zinc-500">
              © {new Date().getFullYear()} Influenxers. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
