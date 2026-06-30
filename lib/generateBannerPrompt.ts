import type { BannerFormData } from "@/types/banner";

const colorPalettes: Record<string, string> = {
  Blue: "deep navy, electric blue, soft cyan highlights, and crisp white contrast",
  Green: "emerald green, forest accents, mint highlights, and clean neutral contrast",
  Purple: "royal purple, indigo depth, lavender glow, and polished light accents",
  Black: "matte black, graphite, silver highlights, and refined high-contrast lighting",
  White: "warm white, pearl gray, subtle platinum, and airy premium negative space"
};

const styleLanguage: Record<string, string> = {
  Corporate: "executive, trustworthy, structured, boardroom-ready",
  Luxury: "premium, elegant, polished, editorial, high-end personal brand",
  Nature: "organic, calming, fresh, growth-oriented, natural light",
  Futuristic: "visionary, neon-lit, advanced, dimensional, high-tech",
  Technology: "modern, precise, grid-based, data-driven, digital",
  Minimalist: "clean, spacious, restrained, typography-led, refined",
  Dark: "dramatic, sleek, high-contrast, cinematic, premium",
  Light: "bright, open, fresh, soft, optimistic, professional",
  Editorial: "magazine-grade, art-directed, tasteful, modern, portfolio-ready",
  Founder: "visionary, bold, credible, investor-ready, product-led",
  Neon: "high-energy, luminous, advanced, dramatic, memorable",
  Academic: "intelligent, calm, research-led, credible, refined"
};

export function generateBannerPrompt(data: BannerFormData): string {
  const subfield = data.careerField === "Other" ? data.customSubfield || "custom professional niche" : data.subfield;
  const palette =
    data.colorTheme === "Custom"
      ? `custom color palette led by ${data.customColor}, balanced with accessible contrast and premium neutrals`
      : colorPalettes[data.colorTheme];
  const background =
    data.backgroundType === "Upload Personal Image"
      ? `Use the uploaded personal image named "${data.uploadedImageName || "provided image"}" as the required visual reference. The user will attach this image separately in the AI tool. Preserve the person's identity and professional feel if it is a portrait; integrate it subtly into the LinkedIn banner without warping faces, changing identity, or placing important facial detail inside the profile-picture safe zone.`
      : `Generate an original AI background that visually represents ${data.careerField} and ${subfield} with depth, professional symbolism, and tasteful atmospheric detail.`;

  return `Create a premium LinkedIn banner image prompt for a professional personal brand.

Canvas and output:
- Exact LinkedIn banner size: 1584 x 396 px.
- Strict aspect ratio: 4:1 ultra-wide horizontal LinkedIn cover banner.
- The final image must be landscape only, very wide and short, never square, never portrait, never poster-shaped.
- If the image tool supports aspect ratio parameters, use: --ar 4:1.
- Compose for a long LinkedIn header crop, not a social post, profile picture, flyer, thumbnail, or website hero.
- Produce an 8K-quality, ultra-detailed, cinematic banner suitable for a polished LinkedIn profile.
- Keep all essential text and brand elements inside safe margins for desktop and mobile cropping.
- Reserve a clean LinkedIn profile picture safe zone on the lower-left area, approximately the left 25% of the banner and lower 55% vertically, with no important text, face, logo, or key visual detail in that zone.

Identity:
- Full name: ${data.fullName || "Professional Name"}.
- Role/headline: ${data.role || "Professional Role"}.
- College/company: ${data.organization || "College or Company"}.
- Email, if used subtly: ${data.email || "not provided"}.
- Career field: ${data.careerField}.
- Subfield or specialization: ${subfield}.

Creative direction:
- Style: ${data.bannerStyle} (${styleLanguage[data.bannerStyle]}).
- Color palette: ${palette}.
- Background description: ${background}
- If a personal image is attached in the AI tool, treat that image as the primary reference and build the banner around it. If no image is attached, continue with a fully generated premium background.
- Typography: premium sans-serif typography, strong hierarchy, crisp kerning, modern LinkedIn-safe readability, name as the main text, role as secondary text, optional organization as tertiary microcopy.
- Layout: asymmetrical 4:1 LinkedIn banner layout with text weighted toward the center-right or right side, balanced negative space across the long horizontal canvas, layered depth, elegant visual rhythm, and no clutter.
- Professional branding: communicate credibility, ambition, expertise, and approachability; make the banner feel like a high-value personal brand asset for LinkedIn.
- Visual motifs: include refined abstract shapes, subtle industry-relevant details, soft light trails, premium gradients, and clean depth-of-field effects only where they support the career story.
- Quality: cinematic lighting, sharp details, realistic depth, refined contrast, smooth gradients, no pixelation, no watermarks, no mockup frames, no UI screenshots, no misspelled text.
- Negative constraints: do not generate a 1:1 square, 3:4 portrait, 16:9 video frame, vertical poster, Instagram post, resume header, business card, or any non-LinkedIn-banner crop. The output must remain 1584 x 396 px or exactly 4:1.

Additional notes:
${data.additionalNotes || "Keep the design polished, professional, modern, and ready for use as a LinkedIn banner."}`;
}
