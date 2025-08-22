import { NewHeroSection } from "@/components/new-hero-section"
import { CompanyBrief } from "@/components/company-brief"
import { AboutPreview } from "@/components/about-preview"
import { ProductsIntro } from "@/components/products-intro"
import { EventsMagazinesSlider } from "@/components/events-magazines-slider"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NewHeroSection />
      <CompanyBrief />
      <AboutPreview />
      <ProductsIntro />
      <EventsMagazinesSlider />
    </main>
  )
}
