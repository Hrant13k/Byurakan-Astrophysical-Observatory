import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ResearchHighlights from "@/components/home/ResearchHighlights";
import LatestNews from "@/components/home/LatestNews";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ResearchHighlights />
      <LatestNews />
      <UpcomingEvents />
      <CTASection />
    </>
  );
}
