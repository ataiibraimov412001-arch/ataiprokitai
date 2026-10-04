"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О нас" },
  { href: "#why", label: "Преимущества" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export function Logo() {
  return (
    <a href="#hero" className="flex items-baseline gap-0 text-lg font-bold tracking-tight">
      <span className="text-foreground">ATAI</span>
      <span className="text-accent">pro</span>
      <span className="text-foreground">KITAI</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            Оставить заявку
          </a>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground md:hidden"
            aria-label="Открыть меню"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg border border-border p-2"
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-5 py-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-2xl font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-accent px-6 py-3 text-center font-medium text-white"
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
