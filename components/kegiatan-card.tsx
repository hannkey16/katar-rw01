import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import type { Kegiatan } from '@/lib/data'
import { cn } from '@/lib/utils'

const statusStyle: Record<Kegiatan['status'], string> = {
  Selesai: 'bg-secondary text-muted-foreground',
  Berlangsung: 'bg-primary/10 text-primary',
  'Akan Datang': 'bg-accent text-accent-foreground',
}

export function KegiatanCard({ item }: { item: Kegiatan }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
      <Link
        href={`/kegiatan/${item.slug}`}
        className="relative block aspect-16/10 overflow-hidden"
      >
        <Image
          src={item.gambar || '/placeholder.svg'}
          alt={item.nama}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3 left-3 rounded-full bg-background/95 px-2.5 py-1 text-[0.7rem] font-semibold text-primary">
          {item.kategori}
        </span>
        <span
          className={cn(
            'absolute top-3 right-3 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold',
            statusStyle[item.status],
          )}
        >
          {item.status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-accent" />
            {item.tanggal}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-accent" />
            {item.lokasi}
          </span>
        </div>

        <h3 className="text-lg leading-snug font-bold text-primary text-pretty">
          <Link href={`/kegiatan/${item.slug}`} className="hover:underline">
            {item.nama}
          </Link>
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.ringkas}
        </p>

        <Link
          href={`/kegiatan/${item.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
        >
          Lihat Detail
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
