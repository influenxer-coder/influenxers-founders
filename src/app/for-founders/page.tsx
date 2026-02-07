import Link from "next/link";
import { Nav } from "../components/Nav";

export const metadata = {
  title: "For Founders | Influenxers",
  description:
    "A growth engine for brands ready to move beyond planning decks and into real market momentum.",
};

export default function ForFoundersPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <Nav />
      <main className="pt-14">
        {/* Hero */}
        <section className="py-24 sm:py-32 border-b border-[#dadce0]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              NGen
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-normal text-[#202124]">
              A growth engine. Not an agency.
            </h1>
            <p className="mt-6 text-xl text-[#5f6368] leading-relaxed">
              A growth engine for brands ready to move beyond planning decks and
              into real market momentum.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              The problem
            </h2>
            <p className="mt-4 text-lg text-[#202124] font-medium">
              Most brands aren&apos;t broken. They&apos;re just unclear.
            </p>
            <h3 className="mt-8 text-lg font-medium text-[#202124]">
              The symptoms we see
            </h3>
            <ul className="mt-4 space-y-2 text-[#5f6368]">
              <li>• Strong product, weak story</li>
              <li>• Decent presence, no recall</li>
              <li>• Money going into content, nothing moving</li>
              <li>• Everyone&apos;s posting, no one&apos;s owning a narrative</li>
            </ul>
            <p className="mt-8 text-[#5f6368] leading-relaxed">
              That&apos;s where NGen steps in. We cut through the noise and help
              you find the signal.
            </p>
            <p className="mt-4 text-[#5f6368] leading-relaxed">
              Clarity isn&apos;t optional—it&apos;s the foundation of everything
              that follows. Without it, you&apos;re just spending money on motion
              that doesn&apos;t matter.
            </p>
          </div>
        </section>

        {/* From invisible to investable */}
        <section className="py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              From invisible to investable
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">New businesses</h3>
                <p className="mt-2 text-[#5f6368] text-[15px]">
                  Fresh ideas that need a professional foundation from day one.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">Acquired brands</h3>
                <p className="mt-2 text-[#5f6368] text-[15px]">
                  Existing equity that needs repositioning under new ownership.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">Founder-led ventures</h3>
                <p className="mt-2 text-[#5f6368] text-[15px]">
                  Personal brands that need to become scalable businesses.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">
                  Brands stuck between &quot;idea&quot; and &quot;scale&quot;
                </h3>
                <p className="mt-2 text-[#5f6368] text-[15px]">
                  Momentum stalled between concept and market dominance.
                </p>
              </div>
            </div>
            <p className="mt-8 text-[#5f6368] leading-relaxed">
              We&apos;re the team brands call when they want motion. Not ideas on
              paper. Real movement, in the market.
            </p>
          </div>
        </section>

        {/* First, we show you the mirror */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              First, we show you the mirror
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              Before plans, pitches, or promises, we start with radical honesty.
              Most agencies tell you what you want to hear. We tell you what you
              need to know.
            </p>
            <p className="mt-4 text-[#5f6368] leading-relaxed">
              This isn&apos;t about tearing down what you&apos;ve built. It&apos;s
              about seeing clearly where you actually stand versus where you
              think you stand.
            </p>
            <p className="mt-4 text-[#5f6368] leading-relaxed">
              No jargon. Just a reality check that sets the foundation for
              everything ahead.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-sm">
                  What the brand looks like today
                </h3>
                <p className="mt-2 text-[#5f6368] text-sm">
                  The unfiltered current state
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-sm">
                  How the internet actually sees it
                </h3>
                <p className="mt-2 text-[#5f6368] text-sm">
                  Perception vs. intention
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-sm">
                  Where the gaps really are
                </h3>
                <p className="mt-2 text-[#5f6368] text-sm">
                  The specific weak points. What&apos;s missing, broken, or
                  confused. The fixable problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 1 */}
        <section className="py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              Stage 1
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#202124]">
              Clarity before speed
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              This is where most brands skip. We don&apos;t. Rushing to execution
              without clarity is like building on quicksand—it looks productive
              until everything sinks.
            </p>
            <div className="mt-12 space-y-6">
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  01
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    What should this brand stand for?
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    The core belief that drives everything
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  02
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    Who is it actually for?
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    Specific humans, not demographics
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  03
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    What category does it really belong to?
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    Where it competes and wins
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  04
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    Why should anyone care?
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    The compelling reason to pay attention
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-[#5f6368] italic">
              No execution yet. Only thinking that saves money later.
            </p>
          </div>
        </section>

        {/* The non-negotiables */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              The non-negotiables
            </h2>
            <p className="mt-2 text-[#5f6368]">
              What gets decided in Think Mode
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <span className="text-lg font-medium text-[#4285f4]">1</span>
                <h3 className="mt-2 font-medium text-[#202124]">
                  Clear brand positioning
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  Your unique space in the market
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <span className="text-lg font-medium text-[#4285f4]">2</span>
                <h3 className="mt-2 font-medium text-[#202124]">
                  Sharp narrative & messaging
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  What you say and how you say it
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <span className="text-lg font-medium text-[#4285f4]">3</span>
                <h3 className="mt-2 font-medium text-[#202124]">
                  Founder story (if relevant)
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  The human origin that builds trust
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <span className="text-lg font-medium text-[#4285f4]">4</span>
                <h3 className="mt-2 font-medium text-[#202124]">
                  What we say vs what we don&apos;t
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  The boundaries that create focus
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0] sm:col-span-2">
                <span className="text-lg font-medium text-[#4285f4]">5</span>
                <h3 className="mt-2 font-medium text-[#202124]">
                  Which platforms matter (and which don&apos;t)
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  Strategic channel selection
                </p>
              </div>
            </div>
            <p className="mt-8 text-[#5f6368]">
              This locks direction. So nothing is built randomly.
            </p>
          </div>
        </section>

        {/* Stage 2 */}
        <section className="py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              Stage 2
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#202124]">
              Make the brand exist properly
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              Once clarity is locked, we build the base. Think of this as your
              brand&apos;s infrastructure—the foundation that everything else
              stands on.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <span className="text-[#4285f4]">•</span>
                <div>
                  <strong className="text-[#202124]">Website or platform setup / revamp</strong>
                  <span className="text-[#5f6368]"> — Your digital home rebuilt for conversion and credibility</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4285f4]">•</span>
                <div>
                  <strong className="text-[#202124]">SEO + LLMO (search + AI discovery)</strong>
                  <span className="text-[#5f6368]"> — Findable by humans and algorithms alike</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4285f4]">•</span>
                <div>
                  <strong className="text-[#202124]">Clean brand language across touchpoints</strong>
                  <span className="text-[#5f6368]"> — Every interaction reinforces who you are</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4285f4]">•</span>
                <div>
                  <strong className="text-[#202124]">Social handles with a real purpose</strong>
                  <span className="text-[#5f6368]"> — Presence with intention, not just placeholder accounts</span>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-[#5f6368] font-medium">
              No more half-baked presence.
            </p>
          </div>
        </section>

        {/* Stage 3 */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              Stage 3
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#202124]">
              Posts don&apos;t build brands. IPs do.
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              We move from &quot;posting&quot; to owning. Social media posts are
              rented attention that disappears in 24 hours. Intellectual property
              is owned equity that compounds over time.
            </p>
            <p className="mt-4 text-[#5f6368] leading-relaxed">
              We create content formats that become synonymous with your
              brand—recurring shows, signature series, and narrative threads that
              people actually look forward to.
            </p>
            <p className="mt-6 text-[#202124] font-medium">
              Content that compounds. Not content that disappears.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">YouTube shows</h3>
                <p className="mt-1 text-[#5f6368] text-sm">Long-form authority building</p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">Instagram formats</h3>
                <p className="mt-1 text-[#5f6368] text-sm">Visual storytelling with consistency</p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">Founder-led narratives</h3>
                <p className="mt-1 text-[#5f6368] text-sm">Personal voice at scale</p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124]">Brand-led series</h3>
                <p className="mt-1 text-[#5f6368] text-sm">Recurring content people anticipate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage 4 */}
        <section className="py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              Stage 4
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#202124]">
              This is where noise becomes meaning
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              Now we go loud. But with control. This isn&apos;t about volume—it&apos;s
              about precision. Every campaign is designed to shift perception, not
              just generate impressions.
            </p>
            <ul className="mt-8 space-y-3 text-[#5f6368]">
              <li>• Launch campaigns — Strategic unveilings that demand attention</li>
              <li>• Narrative-led drops — Content with a point of view</li>
              <li>• Influencer + page amplification — Distribution through trusted voices</li>
              <li>• LinkedIn / Twitter narratives — B2B authority when relevant</li>
            </ul>
            <p className="mt-8 text-[#202124] font-medium">
              Everything answers one question: What should the market believe now?
            </p>
          </div>
        </section>

        {/* We don't create without reach */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              We don&apos;t create without reach
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-lg bg-[#4285f4]/10 text-[#4285f4] font-medium text-sm">
                Create
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#4285f4]/10 text-[#4285f4] font-medium text-sm">
                Amplify
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#4285f4]/10 text-[#4285f4] font-medium text-sm">
                Optimize
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#4285f4]/10 text-[#4285f4] font-medium text-sm">
                Scale
              </span>
            </div>
            <p className="mt-6 text-[#5f6368]">
              Produce strategic content → Distribute via owned channels and
              partners → Refine using performance insights → Expand with
              influencers and paid media.
            </p>
            <p className="mt-6 text-[#202124] font-medium">
              Distribution isn&apos;t an afterthought. It&apos;s designed upfront.
            </p>
            <p className="mt-4 text-[#5f6368]">
              Most agencies create beautiful content that no one sees. We architect
              visibility from the start.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-sm">
                  Influencers where they matter
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  Strategic partnerships, not spray-and-pray
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-sm">
                  Owned & acquired pages
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  Control over the conversation
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-sm">
                  Platform-specific amplification
                </h3>
                <p className="mt-1 text-[#5f6368] text-sm">
                  Native strategies for each channel
                </p>
              </div>
            </div>
            <p className="mt-6 text-[#5f6368] text-sm">
              Zero &quot;hope it works&quot; content. Every piece has a distribution plan.
            </p>
          </div>
        </section>

        {/* Stage 5 */}
        <section className="py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              Stage 5
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#202124]">
              Attention → action
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              Once the story is working, we build the systems that convert
              awareness into revenue. Brand builds trust. Performance captures
              demand.
            </p>
            <ul className="mt-8 space-y-4 text-[#5f6368]">
              <li>• Performance marketing — Paid media that actually converts</li>
              <li>• Lead funnels — Automated systems that nurture prospects</li>
              <li>• Pre-sales narratives — Content that warms up buyers</li>
              <li>• Conversion optimization — Testing and improving every touchpoint</li>
            </ul>
          </div>
        </section>

        {/* Stage 6 */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-medium text-[#4285f4] uppercase tracking-wider">
              Stage 6
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-normal text-[#202124]">
              This is where engines matter
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              Scale isn&apos;t about doing more. It&apos;s about doing what works,
              better and faster. At this stage, brands stop guessing and start
              operating like machines.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <span className="text-[#4285f4]">✓</span>
                <span className="text-[#202124]">What&apos;s working gets scaled — Double down on winners</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#4285f4]">✓</span>
                <span className="text-[#202124]">What&apos;s not gets killed fast — No attachment to underperformers</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#4285f4]">✓</span>
                <span className="text-[#202124]">Content systems mature — Repeatable processes replace one-offs</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#4285f4]">✓</span>
                <span className="text-[#202124]">Distribution compounds — Network effects start to kick in</span>
              </div>
            </div>
          </div>
        </section>

        {/* How we get paid */}
        <section className="py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              How we get paid
            </h2>
            <p className="mt-4 text-lg text-[#4285f4] font-medium">
              Aligned with outcomes
            </p>
            <p className="mt-4 text-[#5f6368] leading-relaxed">
              We&apos;re not interested in taking your money and disappearing. Our
              pricing model reflects real partnership—when you win, we win.
            </p>
            <p className="mt-2 text-[#5f6368] leading-relaxed">
              When the brand grows, NGen grows with it.
            </p>
            <div className="mt-12 space-y-6">
              <div className="flex gap-4 p-6 rounded-lg border border-[#dadce0]">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  1
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    Retainers for building the engine
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    Strategy, foundation, and IP creation
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-lg border border-[#dadce0]">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  2
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    Campaign & scale budgets separately
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    Execution and amplification investment
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-lg border border-[#dadce0]">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#4285f4]/10 text-[#4285f4] font-medium flex items-center justify-center text-sm">
                  3
                </span>
                <div>
                  <h3 className="font-medium text-[#202124]">
                    Success fee / revenue share
                  </h3>
                  <p className="mt-1 text-[#5f6368] text-sm">
                    Open to discussion for the right partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The NGen Promise */}
        <section className="py-20 sm:py-24 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#202124]">
              The NGen Promise
            </h2>
            <p className="mt-6 text-[#5f6368] leading-relaxed">
              We don&apos;t run ads. We don&apos;t sell posts. We don&apos;t do random.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white border-2 border-[#4285f4]">
                <h3 className="font-medium text-[#202124]">Reposition brands</h3>
                <p className="mt-2 text-[#5f6368] text-sm">
                  Find your true place in the market
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border-2 border-[#4285f4]">
                <h3 className="font-medium text-[#202124]">Build their digital spine</h3>
                <p className="mt-2 text-[#5f6368] text-sm">
                  Infrastructure that supports scale
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border-2 border-[#4285f4]">
                <h3 className="font-medium text-[#202124]">Create narratives people remember</h3>
                <p className="mt-2 text-[#5f6368] text-sm">
                  Stories that stick and spread
                </p>
              </div>
            </div>
            <p className="mt-8 text-[#202124] font-medium">
              Scale what actually works. Growth engines, not guesswork.
            </p>
            <p className="mt-4 text-[#5f6368]">
              NGen — built for what&apos;s next.
            </p>
            <div className="mt-12">
              <Link
                href="/apply"
                className="inline-block px-8 py-3 text-sm font-medium text-white bg-[#4285f4] hover:bg-[#3367d6] rounded-lg transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
