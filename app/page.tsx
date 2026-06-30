import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { TemplateGallery } from "@/components/TemplateGallery";
import { featureItems } from "@/lib/constants";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="features" className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-normal">Features</h2>
          <p className="mt-3 text-muted-foreground">Everything needed to craft polished prompts for professional AI image tools.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature, index) => (
            <FeatureCard key={feature} title={feature} index={index} />
          ))}
        </div>
      </section>
      <TemplateGallery />
      <HowItWorks />
      <Footer />
    </main>
  );
}
