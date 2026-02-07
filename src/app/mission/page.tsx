import Link from "next/link";
import { Nav } from "../components/Nav";

export const metadata = {
  title: "Mission | Influenxers",
  description:
    "Help humanity-first founders build brands that matter—so good ideas get the traction they deserve.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <Nav />
      <main className="pt-14">
        <section className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-normal text-[#202124]">
              Our mission
            </h1>
            <p className="mt-8 text-xl text-[#5f6368] leading-relaxed">
              Help humanity-first founders build brands that matter—so good ideas
              get the traction they deserve.
            </p>
            <div className="mt-16">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#4285f4] hover:underline"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
