import { CtaBanner } from '@/components/cta-banner'
import { BeritaSection } from '@/components/home/berita-section'
import { GaleriSection } from '@/components/home/galeri-section'
import { HeroSection } from '@/components/home/hero-section'
import { KegiatanSection } from '@/components/home/kegiatan-section'
import { ProgramSection } from '@/components/home/program-section'
import { StatsSection } from '@/components/home/stats-section'
import { TentangSection } from '@/components/home/tentang-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TentangSection />
      <ProgramSection />
      <KegiatanSection />
      <BeritaSection />
      <GaleriSection />
      <CtaBanner />
    </>
  )
}
