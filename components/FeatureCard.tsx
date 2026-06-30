"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

export function FeatureCard({ title, index }: { title: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Card className="glass h-full">
        <CardContent className="flex items-center gap-3 p-5">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
          <span className="font-medium">{title}</span>
        </CardContent>
      </Card>
    </motion.div>
  );
}
