"use client";

import Link from "next/link";
import { ArrowRight, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.22),transparent_30%),linear-gradient(135deg,rgba(37,99,235,0.18),rgba(124,58,237,0.14),rgba(20,184,166,0.16))]" />
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Badge className="mb-5 gap-2 bg-white/80 text-foreground shadow-sm dark:bg-white/10">
            <WandSparkles className="h-3.5 w-3.5 text-primary" />
            AI-ready banner prompt studio
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
            Create Premium LinkedIn Banner Prompts in Seconds
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Generate professional AI-ready LinkedIn banner prompts tailored to your career and personal brand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-glow">
              <Link href="/generator">
                Create Banner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass">
              <Link href="#features">View Features</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="glass relative min-h-72 overflow-hidden rounded-lg p-5"
        >
          <div className="aspect-[4/1] rounded-lg bg-[linear-gradient(120deg,#0f172a,#2563eb_45%,#14b8a6)] p-6 text-white shadow-glow">
            <div className="ml-auto max-w-[68%]">
              <p className="text-2xl font-semibold">Your Name</p>
              <p className="mt-2 text-sm text-white/85">AI Engineer | Personal Brand Banner</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Cinematic", "8K", "Safe Zone"].map((item) => (
              <div key={item} className="rounded-md border bg-background/70 p-3 text-center text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
