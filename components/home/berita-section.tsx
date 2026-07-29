import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { BeritaCard } from '@/components/berita-card'
import { PengumumanPanel } from '@/components/pengumuman-panel'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { berita } from '@/lib/data'

export function BeritaSection() {
  return (
    <section className="bg-secondary/60 py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Berita & Pengumuman"
            title="Kabar terbaru dari RW 01"
            description="Ikuti perkembangan kegiatan dan informasi penting bagi warga RW 01 Kelurahan Mekarjaya."
          />
          <ActionLink
            href="/berita"
            variant="outline"
            className="shrink-0 self-start sm:self-auto"
          >
            Semua Berita
            <ArrowRight className="size-4" />
          </ActionLink>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {berita.slice(0, 2).map((item, i) => (
              <Reveal as="li" key={item.slug} delay={i * 110} className="h-full">
                <BeritaCard item={item} />
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <PengumumanPanel className="h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
