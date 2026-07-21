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

  // Scroll handle karne ke liye
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open hone par background scroll disable/enable karna
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#05070a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#05070a]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-white transition hover:opacity-90"
          onClick={() => setMenuOpen(false)}
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
                  className="text-[15px] font-medium text-slate-300 transition duration-200 hover:text-[#00f2fe]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#8a3ffc] px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-purple-500/20 transition hover:scale-105 lg:block"
        >
          Get Started
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-20 h-[calc(100vh-80px)] border-t border-white/10 bg-[#05070a] px-6 py-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-slate-200 hover:bg-white/5 hover:text-[#00f2fe] transition"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Get Started Button */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#8a3ffc] py-3.5 text-center text-base font-semibold text-black shadow-md transition active:scale-95"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}