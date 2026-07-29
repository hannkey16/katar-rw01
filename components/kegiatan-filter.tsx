'use client'

import { useState } from 'react'
import type { Kegiatan } from '@/lib/data'
import { KegiatanCard } from './kegiatan-card'

const KATEGORI_LIST = [
  'Semua',
  'Olahraga',
  'Sosial',
  'Lingkungan',
  'Pendidikan',
  'Kepemudaan',
]

export function KegiatanFilter({ items }: { items: Kegiatan[] }) {
  const [selectedKategori, setSelectedKategori] = useState('Semua')

  const filteredItems =
    selectedKategori === 'Semua'
      ? items
      : items.filter((item) => item.kategori === selectedKategori)

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {KATEGORI_LIST.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setSelectedKategori(kategori)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedKategori === kategori
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'border border-border bg-background text-foreground hover:border-primary/50'
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {/* Kegiatan Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((kegiatan) => (
            <KegiatanCard key={kegiatan.slug} item={kegiatan} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-muted/50 py-12 text-center">
          <p className="text-muted-foreground">
            Tidak ada kegiatan untuk kategori "{selectedKategori}" saat ini.
          </p>
        </div>
      )}
    </div>
  )
}
