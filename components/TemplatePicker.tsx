"use client";

import { BadgeCheck, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { bannerTemplates } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { BannerFormData, BannerTemplate } from "@/types/banner";

interface TemplatePickerProps {
  selectedTemplateId: string;
  onApply: (template: BannerTemplate) => void;
}

export function TemplatePicker({ selectedTemplateId, onApply }: TemplatePickerProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-lg font-semibold">Quick Templates</h2>
          <p className="text-sm text-muted-foreground">Choose a proven direction and the form fills itself.</p>
        </div>
        <Badge variant="secondary" className="w-fit gap-2">
          <WandSparkles className="h-3.5 w-3.5" />
          Fastest path
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {bannerTemplates.map((template, index) => (
          <motion.button
            key={template.id}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.015 }}
            onClick={() => onApply(template)}
            className={cn(
              "group overflow-hidden rounded-lg border bg-background/70 text-left transition hover:-translate-y-0.5 hover:border-primary hover:shadow-glow",
              selectedTemplateId === template.id && "border-primary ring-2 ring-primary/25"
            )}
          >
            <div className={`h-20 bg-gradient-to-br ${template.accent} p-3 text-white`}>
              <div className="flex h-full items-start justify-between rounded-md border border-white/25 bg-white/10 p-2 backdrop-blur-sm">
                <div>
                  <p className="text-sm font-semibold leading-tight">{template.title}</p>
                  <p className="mt-1 text-xs text-white/80">{template.role}</p>
                </div>
                {selectedTemplateId === template.id ? <BadgeCheck className="h-4 w-4 shrink-0" /> : null}
              </div>
            </div>
            <div className="space-y-2 p-3">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">{template.careerField}</Badge>
                <Badge variant="outline">{template.colorTheme}</Badge>
              </div>
              <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">{template.audience}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export function applyTemplateToForm(current: BannerFormData, template: BannerTemplate): BannerFormData {
  return {
    ...current,
    selectedTemplateId: template.id,
    role: current.role || template.role,
    careerField: template.careerField,
    subfield: template.subfield,
    customSubfield: "",
    bannerStyle: template.bannerStyle,
    colorTheme: template.colorTheme,
    customColor: template.customColor || current.customColor,
    backgroundType: template.backgroundType,
    additionalNotes: template.notes
  };
}
