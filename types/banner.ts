export type CareerField =
  | "Student"
  | "Software Development"
  | "AI/ML"
  | "Data Science"
  | "Cybersecurity"
  | "Finance"
  | "Marketing"
  | "Design"
  | "Business"
  | "Sales"
  | "Human Resources"
  | "Legal"
  | "Real Estate"
  | "Consulting"
  | "Operations"
  | "Product"
  | "Content Creation"
  | "Architecture"
  | "Government"
  | "Nonprofit"
  | "Healthcare"
  | "Education"
  | "Other";

export type BannerStyle =
  | "Corporate"
  | "Luxury"
  | "Nature"
  | "Futuristic"
  | "Technology"
  | "Minimalist"
  | "Dark"
  | "Light"
  | "Editorial"
  | "Founder"
  | "Neon"
  | "Academic";

export type ColorTheme = "Blue" | "Green" | "Purple" | "Black" | "White" | "Custom";

export type BackgroundType = "Generate AI Background" | "Upload Personal Image";

export interface BannerFormData {
  fullName: string;
  role: string;
  organization: string;
  email: string;
  careerField: CareerField;
  subfield: string;
  customSubfield: string;
  bannerStyle: BannerStyle;
  colorTheme: ColorTheme;
  customColor: string;
  backgroundType: BackgroundType;
  uploadedImageName: string;
  uploadedImageDataUrl: string;
  additionalNotes: string;
  selectedTemplateId: string;
}

export interface BannerTemplate {
  id: string;
  title: string;
  audience: string;
  careerField: CareerField;
  subfield: string;
  role: string;
  bannerStyle: BannerStyle;
  colorTheme: ColorTheme;
  customColor?: string;
  backgroundType: BackgroundType;
  notes: string;
  accent: string;
}
