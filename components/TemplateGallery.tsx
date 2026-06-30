"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { bannerTemplates } from "@/lib/constants";

export function TemplateGallery() {
  return (
    <section className="container py-16">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-3 gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            Ready-made templates
          </Badge>
          <h2 className="text-3xl font-bold tracking-normal">Start with a banner that already sells your value</h2>
          <p className="mt-3 text-muted-foreground">
            Pick from high-converting professional directions built for recruiters, clients, investors, and collaborators.
          </p>
        </div>
        <Button asChild>
          <Link href="/generator">
            Use Templates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bannerTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.42, delay: index * 0.025 }}
          >
            <Card className="glass h-full overflow-hidden">
              <div className={`h-24 bg-gradient-to-br ${template.accent} p-4 text-white`}>
                <div className="h-full rounded-md border border-white/25 bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold">{template.title}</p>
                  <p className="mt-1 text-xs text-white/80">{template.role}</p>
                </div>
              </div>
              <CardContent className="space-y-3 p-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{template.careerField}</Badge>
                  <Badge variant="outline">{template.bannerStyle}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{template.audience}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
