import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { KegiatanCard } from '@/components/kegiatan-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { kegiatan } from '@/lib/data'

export function KegiatanSection() {
  return (
    <section className="bg-secondary/60 py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Kegiatan Terbaru"
            title="Agenda & kegiatan pemuda RW 01"
            description="Dokumentasi dan jadwal kegiatan yang dilaksanakan bersama warga RW 01 Kelurahan Mekarjaya."
          />
          <ActionLink
            href="/kegiatan"
            variant="outline"
            className="shrink-0 self-start sm:self-auto"
          >
            Lihat Semua
            <ArrowRight className="size-4" />
          </ActionLink>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kegiatan.slice(0, 3).map((item, i) => (
            <Reveal as="li" key={item.slug} delay={i * 110} className="h-full">
              <KegiatanCard item={item} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
