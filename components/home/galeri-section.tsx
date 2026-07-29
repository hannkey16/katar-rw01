import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { galeri } from '@/lib/data'

export function GaleriSection() {
  const items = galeri.slice(0, 6)

  return (
    <section className="container-page py-14 sm:py-20">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Galeri"
          title="Momen kebersamaan warga RW 01"
          description="Dokumentasi kegiatan pemuda dan warga, dari olahraga hingga kerja bakti lingkungan."
        />
        <ActionLink
          href="/galeri"
          variant="outline"
          className="shrink-0 self-start sm:self-auto"
        >
          Buka Galeri
          <ArrowRight className="size-4" />
        </ActionLink>
      </Reveal>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item.src} delay={i * 70}>
            <Link
              href="/galeri"
              className="group relative block aspect-4/3 overflow-hidden rounded-2xl border border-border bg-secondary"
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.judul}
                fill
                sizes="(min-width: 1024px) 340px, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[0.7rem] font-semibold text-accent uppercase">
                  {item.kategori}
                </span>
                <span className="block text-sm font-semibold text-primary-foreground">
                  {item.judul}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
