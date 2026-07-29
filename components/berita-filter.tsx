'use client'

import { useState } from 'react'
import type { Berita } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { BeritaCard } from '@/components/berita-card'

const KATEGORI = ['Semua', 'Sosial', 'Kegiatan', 'Pendidikan', 'Lingkungan', 'Ekonomi', 'Olahraga']

export function BeritaFilter({ allBerita }: { allBerita: Berita[] }) {
  const [selectedKategori, setSelectedKategori] = useState('Semua')

  const filteredBerita =
    selectedKategori === 'Semua'
      ? allBerita
      : allBerita.filter((b) => b.kategori === selectedKategori)

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Daftar Berita"
          subtitle="Pilih kategori untuk memfilter berita"
          alignment="center"
        />

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 md:mb-16 animate-fade-in">
          {KATEGORI && KATEGORI.length > 0 && KATEGORI.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setSelectedKategori(kategori)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                selectedKategori === kategori
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        {/* Berita Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
          {filteredBerita && filteredBerita.length > 0 && filteredBerita.map((item) => (
            <div key={item.slug} className="transition-transform duration-300 hover:-translate-y-2">
              <BeritaCard item={item} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(!filteredBerita || filteredBerita.length === 0) && (
          <div className="text-center py-12 md:py-16">
            <p className="text-gray-500 text-lg md:text-xl">
              Tidak ada berita pada kategori ini
            </p>
          </div>
        )}

        {/* Info Box */}
        {allBerita && allBerita.length > 0 && (
          <div className="mt-16 md:mt-20 p-6 md:p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl animate-fade-in">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Total Berita
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Kami memiliki {allBerita.length} berita yang dapat diakses. Ikuti media sosial kami
              untuk mendapatkan informasi terbaru tentang kegiatan Karang Taruna RW 01.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
