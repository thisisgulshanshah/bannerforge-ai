"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="truncate text-base sm:text-lg">BannerForge AI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/#features" className="transition hover:text-foreground">
            Features
          </Link>
          <Link href="/generator" className="transition hover:text-foreground">
            Generator
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/generator">Create Banner</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
