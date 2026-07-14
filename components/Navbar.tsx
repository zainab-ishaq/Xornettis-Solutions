"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#why-choose-us" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white/60 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-slate-900"
        >
          Xornettis
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[15px] font-medium text-slate-600 transition duration-200 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:block"
        >
          Get Started
        </a>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-slate-700"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-4 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}