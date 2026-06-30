import { Sparkles } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="container py-10">
      <Separator className="mb-6" />
      <div className="flex flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          BannerForge AI
        </div>
        <p>Built for fast, polished LinkedIn banner prompt creation.</p>
      </div>
    </footer>
  );
}
