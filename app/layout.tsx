import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "BannerForge AI",
  description: "Create premium LinkedIn banner prompts tailored to your career and personal brand."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
