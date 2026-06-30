"use client";

import { ChangeEvent, DragEvent, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { ImagePlus, Loader2, Sparkles, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TemplatePicker, applyTemplateToForm } from "@/components/TemplatePicker";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  backgroundTypes,
  bannerStyles,
  careerFields,
  colorThemes,
  defaultBannerFormData,
  PROMPT_STORAGE_KEY,
  STORAGE_KEY,
  subfieldsByCareer
} from "@/lib/constants";
import { generateBannerPrompt } from "@/lib/generateBannerPrompt";
import { cn } from "@/lib/utils";
import type { BackgroundType, BannerFormData, BannerStyle, CareerField, ColorTheme } from "@/types/banner";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export function BannerForm() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData, isHydrated] = useLocalStorage<BannerFormData>(STORAGE_KEY, defaultBannerFormData);

  const subfields = useMemo(() => subfieldsByCareer[formData.careerField], [formData.careerField]);

  const updateForm = <K extends keyof BannerFormData>(key: K, value: BannerFormData[K]) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const handleCareerChange = (value: CareerField) => {
    const nextSubfield = subfieldsByCareer[value][0];
    setFormData((current) => ({
      ...current,
      careerField: value,
      subfield: nextSubfield,
      customSubfield: value === "Other" ? current.customSubfield : ""
    }));
  };

  const persistFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((current) => ({
        ...current,
        uploadedImageName: file.name,
        uploadedImageDataUrl: typeof reader.result === "string" ? reader.result : ""
      }));
      toast.success("Image attached to your banner brief.");
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) persistFile(file);
  };

  const handleDrop = (event: DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) persistFile(file);
  };

  const handleSubmit = () => {
    if (!formData.fullName.trim() || !formData.role.trim()) {
      toast.error("Full name and role are required.");
      return;
    }

    if (formData.careerField === "Other" && !formData.customSubfield.trim()) {
      toast.error("Please enter your custom specialization.");
      return;
    }

    const prompt = generateBannerPrompt(formData);
    window.localStorage.setItem(PROMPT_STORAGE_KEY, prompt);
    toast.success("Premium prompt generated.");
    router.push("/result");
  };

  if (!isHydrated) {
    return (
      <Card className="glass">
        <CardContent className="flex min-h-96 items-center justify-center p-8">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="glass">
        <CardHeader>
          <CardTitle>Banner Generator</CardTitle>
          <CardDescription>Fill the details once. BannerForge AI keeps your form saved locally in this browser.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="space-y-4">
            <TemplatePicker
              selectedTemplateId={formData.selectedTemplateId || ""}
              onApply={(template) => {
                setFormData((current) => applyTemplateToForm(current, template));
                toast.success(`${template.title} template applied.`);
              }}
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name">
                <Input value={formData.fullName} onChange={(event) => updateForm("fullName", event.target.value)} placeholder="Alex Morgan" />
              </Field>
              <Field label="Role">
                <Input value={formData.role} onChange={(event) => updateForm("role", event.target.value)} placeholder="AI Product Engineer" />
              </Field>
              <Field label="College/Company">
                <Input value={formData.organization} onChange={(event) => updateForm("organization", event.target.value)} placeholder="Stanford University" />
              </Field>
              <Field label="Email">
                <Input value={formData.email} onChange={(event) => updateForm("email", event.target.value)} placeholder="alex@example.com" type="email" />
              </Field>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Career Field</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Field">
                <Select value={formData.careerField} onValueChange={(value) => handleCareerChange(value as CareerField)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {careerFields.map((field) => (
                      <SelectItem key={field} value={field}>
                        {field}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              {formData.careerField === "Other" ? (
                <Field label="Custom Input">
                  <Input
                    value={formData.customSubfield}
                    onChange={(event) => updateForm("customSubfield", event.target.value)}
                    placeholder="Your specialization"
                  />
                </Field>
              ) : (
                <Field label="Subfield">
                  <Select value={formData.subfield} onValueChange={(value) => updateForm("subfield", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {subfields.map((subfield) => (
                        <SelectItem key={subfield} value={subfield}>
                          {subfield}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Banner Style</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {bannerStyles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => updateForm("bannerStyle", style as BannerStyle)}
                  className={cn(
                    "rounded-lg border bg-background/70 p-4 text-left text-sm font-semibold transition hover:border-primary",
                    formData.bannerStyle === style && "border-primary bg-primary/10 text-primary"
                  )}
                >
                  {style}
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Color Theme</h2>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {colorThemes.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => updateForm("colorTheme", theme as ColorTheme)}
                  className={cn(
                    "rounded-lg border bg-background/70 p-3 text-sm font-semibold transition hover:border-primary",
                    formData.colorTheme === theme && "border-primary bg-primary/10 text-primary"
                  )}
                >
                  {theme}
                </button>
              ))}
            </div>
            {formData.colorTheme === "Custom" ? (
              <div className="flex items-center gap-3">
                <Input
                  aria-label="Custom color"
                  type="color"
                  value={formData.customColor}
                  onChange={(event) => updateForm("customColor", event.target.value)}
                  className="h-12 w-20 p-1"
                />
                <span className="text-sm font-medium">{formData.customColor}</span>
              </div>
            ) : null}
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Background</h2>
            <RadioGroup
              value={formData.backgroundType}
              onValueChange={(value) => updateForm("backgroundType", value as BackgroundType)}
              className="grid gap-3 sm:grid-cols-2"
            >
              {backgroundTypes.map((type) => (
                <Label key={type} className="flex cursor-pointer items-center gap-3 rounded-lg border bg-background/70 p-4">
                  <RadioGroupItem value={type} />
                  {type}
                </Label>
              ))}
            </RadioGroup>
            {formData.backgroundType === "Upload Personal Image" ? (
              <div>
                <input ref={inputRef} className="hidden" type="file" accept="image/*" onChange={handleFileChange} />
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleDrop}
                  className="flex min-h-40 w-full flex-col items-center justify-center rounded-lg border border-dashed border-primary/50 bg-background/70 p-6 text-center transition hover:bg-primary/5"
                >
                  {formData.uploadedImageDataUrl ? (
                    <ImagePlus className="mb-3 h-7 w-7 text-primary" />
                  ) : (
                    <UploadCloud className="mb-3 h-7 w-7 text-primary" />
                  )}
                  <span className="font-semibold">{formData.uploadedImageName || "Drop an image or click to upload"}</span>
                  <span className="mt-1 text-sm text-muted-foreground">PNG, JPG, or WebP inspiration image</span>
                </button>
              </div>
            ) : null}
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Additional Notes</h2>
            <Textarea
              value={formData.additionalNotes}
              onChange={(event) => updateForm("additionalNotes", event.target.value)}
              placeholder="Mention preferred symbols, achievements, mood, or text placement."
            />
          </section>

          <Button size="lg" className="w-full shadow-glow" onClick={handleSubmit}>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Prompt
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
