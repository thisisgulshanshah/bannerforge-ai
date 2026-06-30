"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { howItWorksSteps } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-normal">How It Works</h2>
        <p className="mt-3 text-muted-foreground">Move from personal details to an AI-ready banner prompt in one focused flow.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {howItWorksSteps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass relative rounded-lg p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              {index + 1}
            </div>
            <p className="font-semibold">{step}</p>
            {index < howItWorksSteps.length - 1 ? (
              <ArrowRight className="absolute right-4 top-6 hidden h-4 w-4 text-muted-foreground md:block" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
