import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import type { Berita } from '@/lib/data'

export function BeritaCard({ item }: { item: Berita }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
      <Link
        href={`/berita/${item.slug}`}
        className="relative block aspect-16/10 overflow-hidden"
      >
        <Image
          src={item.gambar || '/placeholder.svg'}
          alt={item.judul}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[0.7rem] font-semibold text-primary-foreground">
          {item.kategori}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5 text-accent" />
          {item.tanggal}
        </span>

        <h3 className="text-lg leading-snug font-bold text-primary text-pretty">
          <Link href={`/berita/${item.slug}`} className="hover:underline">
            {item.judul}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>

        <Link
          href={`/berita/${item.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
        >
          Baca Selengkapnya
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
