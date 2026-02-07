import Link from "next/link";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#for-founders", label: "For Founders" },
  { href: "/#for-partners", label: "For Partners" },
];

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#dadce0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-[22px] font-normal text-[#202124] tracking-tight">
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
              href="/#partner"
              className="px-4 py-2 text-sm font-medium text-[#5f6368] hover:text-[#202124] transition-colors"
            >
              Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
