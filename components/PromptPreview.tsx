"use client";

import { useEffect, useState } from "react";
import { Copy, Download, ExternalLink, ImageDown, Images, RefreshCw } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROMPT_STORAGE_KEY, STORAGE_KEY, defaultBannerFormData } from "@/lib/constants";
import { generateBannerPrompt } from "@/lib/generateBannerPrompt";
import type { BannerFormData } from "@/types/banner";

export function PromptPreview() {
  const [prompt, setPrompt] = useState("");
  const [formData, setFormData] = useState<BannerFormData | null>(null);

  useEffect(() => {
    const storedPrompt = window.localStorage.getItem(PROMPT_STORAGE_KEY);
    const storedForm = window.localStorage.getItem(STORAGE_KEY);

    if (storedForm) {
      setFormData(JSON.parse(storedForm) as BannerFormData);
    }

    if (storedPrompt) {
      setPrompt(storedPrompt);
      return;
    }

    if (storedForm) {
      const formData = JSON.parse(storedForm) as BannerFormData;
      const regeneratedPrompt = generateBannerPrompt(formData);
      window.localStorage.setItem(PROMPT_STORAGE_KEY, regeneratedPrompt);
      setPrompt(regeneratedPrompt);
      return;
    }

    const starterPrompt = generateBannerPrompt(defaultBannerFormData);
    setPrompt(starterPrompt);
  }, []);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard.");
  };

  const copyAndOpen = async (url: string, toolName: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success(`Prompt copied. ${toolName} is opening now.`);
    } catch {
      toast.error("Could not copy the prompt. Please use the Copy button.");
    }
  };

  const regeneratePrompt = () => {
    const storedForm = window.localStorage.getItem(STORAGE_KEY);
    const formData = storedForm ? (JSON.parse(storedForm) as BannerFormData) : defaultBannerFormData;
    const regeneratedPrompt = generateBannerPrompt(formData);
    window.localStorage.setItem(PROMPT_STORAGE_KEY, regeneratedPrompt);
    setPrompt(regeneratedPrompt);
    toast.success("Prompt regenerated from saved details.");
  };

  const downloadTxt = () => {
    const blob = new Blob([prompt], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "bannerforge-linkedin-banner-prompt.txt";
    anchor.click();
    URL.revokeObjectURL(url);
    toast.success("Prompt downloaded.");
  };

  const getUploadedImageBlob = async () => {
    if (!formData?.uploadedImageDataUrl) return null;
    const response = await fetch(formData.uploadedImageDataUrl);
    return response.blob();
  };

  const copyUploadedImage = async () => {
    try {
      const blob = await getUploadedImageBlob();
      if (!blob) {
        toast.error("No uploaded image found.");
        return;
      }
      await navigator.clipboard.write([new ClipboardItem({ [blob.type || "image/png"]: blob })]);
      toast.success("Image copied. Paste it into ChatGPT or Gemini after opening.");
    } catch {
      toast.error("This browser blocked image copying. Use Download Image instead.");
    }
  };

  const downloadUploadedImage = async () => {
    const blob = await getUploadedImageBlob();
    if (!blob || !formData) {
      toast.error("No uploaded image found.");
      return;
    }
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = formData.uploadedImageName || "bannerforge-reference-image.png";
    anchor.click();
    URL.revokeObjectURL(url);
    toast.success("Reference image downloaded.");
  };

  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle>Prompt Preview</CardTitle>
        <CardDescription>Use this with ChatGPT, Gemini, or any AI image workflow that accepts detailed image prompts.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {formData?.uploadedImageDataUrl ? (
          <div className="grid gap-4 rounded-lg border bg-background/70 p-4 md:grid-cols-[220px_1fr]">
            <div
              aria-label="Uploaded reference image preview"
              className="aspect-[4/3] rounded-md border bg-cover bg-center"
              style={{ backgroundImage: `url(${formData.uploadedImageDataUrl})` }}
            />
            <div className="flex flex-col justify-center gap-3">
              <div>
                <p className="font-semibold">Uploaded reference image</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formData.uploadedImageName} is saved locally in this browser. ChatGPT/Gemini need you to attach or paste it because external sites block silent file uploads.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="outline" onClick={copyUploadedImage}>
                  <Images className="mr-2 h-4 w-4" />
                  Copy Image
                </Button>
                <Button variant="outline" onClick={downloadUploadedImage}>
                  <ImageDown className="mr-2 h-4 w-4" />
                  Download Image
                </Button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="max-h-[560px] overflow-auto rounded-lg border bg-background/80 p-5">
          <pre className="whitespace-pre-wrap text-sm leading-7 text-foreground">{prompt}</pre>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <Button onClick={copyPrompt}>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
          <Button variant="outline" onClick={regeneratePrompt}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Regenerate
          </Button>
          <Button variant="outline" onClick={downloadTxt}>
            <Download className="mr-2 h-4 w-4" />
            Download TXT
          </Button>
          <Button variant="secondary" onClick={() => copyAndOpen("https://chatgpt.com/", "ChatGPT")}>
            <ExternalLink className="mr-2 h-4 w-4" />
              Copy + Open ChatGPT
          </Button>
          <Button variant="secondary" onClick={() => copyAndOpen("https://gemini.google.com/", "Gemini")}>
            <ExternalLink className="mr-2 h-4 w-4" />
              Copy + Open Gemini
          </Button>
        </div>
        <Button asChild variant="ghost" className="w-full">
          <Link href="/generator">Edit banner details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
