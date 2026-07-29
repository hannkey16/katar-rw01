'use client'

import { useState } from 'react'
import type { ProgramKategori } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { CategoryIcon } from '@/components/category-icon'

export function ProgramFilter({ allProgram }: { allProgram: ProgramKategori[] }) {
  const [selectedKategori, setSelectedKategori] = useState<string | null>(null)

  const filteredProgram =
    selectedKategori === null
      ? allProgram
      : allProgram.filter((p) => p.slug === selectedKategori)

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Bidang Program"
          subtitle="Pilih bidang untuk melihat detail program"
          alignment="center"
        />

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 md:mb-16 animate-fade-in">
          <button
            onClick={() => setSelectedKategori(null)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
              selectedKategori === null
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Semua
          </button>
          {allProgram.map((program) => (
            <button
              key={program.slug}
              onClick={() => setSelectedKategori(program.slug)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                selectedKategori === program.slug
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {program.nama}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
          {filteredProgram.map((program) => (
            <div
              key={program.slug}
              className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CategoryIcon
                    name={program.icon}
                    className="w-7 h-7 md:w-8 md:h-8 text-primary"
                  />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {program.jumlah}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {program.nama}
              </h3>

              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                {program.deskripsi}
              </p>

              <div className="space-y-3">
                <p className="text-xs md:text-sm font-semibold text-gray-700">
                  Program Unggulan:
                </p>
                <ul className="space-y-2">
                  {program.program.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base text-gray-600"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProgram.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <p className="text-gray-500 text-lg md:text-xl">
              Tidak ada program pada kategori ini
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
