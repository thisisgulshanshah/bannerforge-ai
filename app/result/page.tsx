import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PromptPreview } from "@/components/PromptPreview";

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.16),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(37,99,235,0.16),transparent_28%)]">
      <Navbar />
      <section className="container py-10">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">Your Premium Banner Prompt</h1>
          <p className="mt-3 text-muted-foreground">Copy, download, regenerate, or open your favorite AI assistant.</p>
        </div>
        <PromptPreview />
      </section>
      <Footer />
    </main>
  );
}
