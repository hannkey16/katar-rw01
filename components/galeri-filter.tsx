'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Galeri } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function GaleriFilter({
  allGaleri,
  kategori,
}: {
  allGaleri: Galeri[]
  kategori: string[]
}) {
  const [selectedKategori, setSelectedKategori] = useState('Semua')
  const [selectedImage, setSelectedImage] = useState<Galeri | null>(null)

  const filteredGaleri =
    selectedKategori === 'Semua'
      ? allGaleri
      : allGaleri.filter((item) => item.kategori === selectedKategori)

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Dokumentasi Kegiatan"
          subtitle="Filter foto berdasarkan kategori"
          alignment="center"
        />

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 md:mb-16 animate-fade-in">
          {kategori &&
            kategori.length > 0 &&
            kategori.map((kat) => (
              <button
                key={kat}
                onClick={() => setSelectedKategori(kat || 'Semua')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                  selectedKategori === kat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {kat}
              </button>
            ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
          {filteredGaleri.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.judul}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <div>
                  <h3 className="text-white font-bold text-sm md:text-base line-clamp-2 mb-1">
                    {item.judul}
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">{item.kategori}</p>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGaleri.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <p className="text-gray-500 text-lg md:text-xl">
              Tidak ada foto pada kategori ini
            </p>
          </div>
        )}
      </div>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] animate-scale-in"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.judul}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>

            <div className="mt-4 bg-white rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {selectedImage.judul}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Kategori: <span className="font-semibold">{selectedImage.kategori}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
