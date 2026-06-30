import { BannerForm } from "@/components/BannerForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function GeneratorPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(16,185,129,0.14),transparent_30%)]">
      <Navbar />
      <section className="container py-10">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">Create Your LinkedIn Banner Prompt</h1>
          <p className="mt-3 text-muted-foreground">Choose your career angle, visual style, color direction, and background approach.</p>
        </div>
        <BannerForm />
      </section>
      <Footer />
    </main>
  );
}
