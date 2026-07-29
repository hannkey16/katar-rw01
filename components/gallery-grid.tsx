'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Galeri } from '@/lib/data'
import { cn } from '@/lib/utils'

export function GalleryGrid({
  items,
  kategori,
}: {
  items: Galeri[]
  kategori?: string[]
}) {
  const [filter, setFilter] = useState('Semua')
  const [active, setActive] = useState<number | null>(null)

  const shown = useMemo(
    () =>
      filter === 'Semua' ? items : items.filter((i) => i.kategori === filter),
    [filter, items],
  )

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: number) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + shown.length) % shown.length,
      ),
    [shown.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  return (
    <div>
      {kategori && kategori.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {kategori.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setFilter(k)
                setActive(null)
              }}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                filter === k
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-primary',
              )}
            >
              {k}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {shown.map((item, index) => (
          <li
            key={item.src + item.judul}
            className={cn(
              index % 5 === 0 && 'sm:col-span-2 sm:row-span-2',
            )}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                'group relative block w-full overflow-hidden rounded-2xl border border-border bg-secondary outline-none focus-visible:ring-3 focus-visible:ring-primary/40',
                index % 5 === 0 ? 'aspect-square' : 'aspect-4/3',
              )}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.judul}
                fill
                sizes="(min-width: 1024px) 420px, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[0.7rem] font-semibold text-accent uppercase">
                  {item.kategori}
                </span>
                <span className="block text-sm font-semibold text-primary-foreground">
                  {item.judul}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null && shown[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[active].judul}
          className="fixed inset-0 z-60 flex items-center justify-center bg-primary/95 p-4 duration-300 animate-in fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Tutup galeri"
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-2 inline-flex size-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-primary-foreground/5">
              <Image
                src={shown[active].src || '/placeholder.svg'}
                alt={shown[active].judul}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-primary-foreground">
              <span className="font-semibold">{shown[active].judul}</span>
              <span className="ml-2 text-primary-foreground/60">
                {shown[active].kategori}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Foto berikutnya"
            className="absolute right-2 inline-flex size-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}
