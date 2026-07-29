import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { CategoryIcon } from '@/components/category-icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { nilaiOrganisasi } from '@/lib/data'

export function ProgramSection() {
  return (
    <section className="container-page py-14 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Bidang Kegiatan"
          title="Enam bidang yang kami jalankan"
          description="Setiap bidang dikoordinasi oleh pengurus dan dilaksanakan bersama anggota serta warga RW 01."
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nilaiOrganisasi.map((item, i) => (
          <Reveal as="li" key={item.judul} delay={i * 80} className="h-full">
            <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <CategoryIcon name={item.icon} className="size-5.5" />
              </span>
              <h3 className="text-base font-bold text-primary">{item.judul}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.deskripsi}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex justify-center">
        <ActionLink href="/program-kerja" variant="outline">
          Lihat Program Kerja
          <ArrowRight className="size-4" />
        </ActionLink>
      </Reveal>
    </section>
  )
}
