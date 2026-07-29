import Image from 'next/image'
import type { Pengurus } from '@/lib/data'

export function PengurusCard({ item }: { item: Pengurus }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
      <div className="relative aspect-4/5 overflow-hidden bg-secondary">
        {item.foto ? (
          <Image
            src={item.foto || '/placeholder.svg'}
            alt={`Foto ${item.nama}, ${item.jabatan}`}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-display text-3xl font-bold text-primary/30">
              {item.inisial}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-primary">{item.nama}</h3>
        <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {item.jabatan}
        </p>
      </div>
    </article>
  )
}
