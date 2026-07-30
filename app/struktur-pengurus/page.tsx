'use client'

import { useEffect, useState } from 'react'
import { pengurusInti, pengurusBidang } from '@/lib/data'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { SectionHeading } from '@/components/section-heading'
import { PengurusCard } from '@/components/pengurus-card'

export default function StrukturPengurusPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <PageHeader
        title="Struktur Pengurus"
        description="Susunan lengkap pengurus Karang Taruna RW 01 periode 2026, meliputi pengurus inti dan koordinator bidang kerja."
        breadcrumb={[{ label: 'Struktur Pengurus' }]}
      />

      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Pengurus Inti Periode 2026"
            subtitle="Kepemimpinan dan manajemen organisasi"
            alignment="center"
          />

          {/* Pengurus Inti Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pengurusInti.map((item, idx) => (
              <div
                key={item.nama}
                className="animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <PengurusCard item={item} />
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Peran Pengurus Inti
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Ketua</strong> - Memimpin organisasi dan mewakili
                  Karang Taruna dalam kegiatan resmi
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Wakil Ketua</strong> - Membantu ketua dalam
                  koordinasi dan menjalankan tugas jika ketua berhalangan
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Sekretaris</strong> - Mengelola administrasi,
                  dokumentasi, dan korespondensi organisasi
                </span>
              </li>
              <li className="flex gap-3">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Bendahara</strong> - Mengelola keuangan dan
                  pelaporan pertanggungjawaban
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Koordinator Bidang Section */}
      <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Koordinator Bidang Kerja"
            subtitle="Pemimpin pelaksana di setiap bidang kegiatan"
            alignment="center"
          />

          {/* Bidang Grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pengurusBidang.map((item, idx) => (
              <div
                key={item.nama}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">
                    {item.inisial}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.nama}</h3>
                    <p className="text-sm text-primary font-semibold mt-1">
                      {item.jabatan}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">{item.bidang}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bidang Description */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bidang Olahraga
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Menyelenggarakan kegiatan olahraga dan rekreasi bagi pemuda dan
                warga RW 01, termasuk turnamen futsal, senam sehat, dan
                olahraga tradisional.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bidang Sosial
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Melaksanakan program bakti sosial, santunan, dan berbagai
                kegiatan sosial kemanusiaan untuk masyarakat yang membutuhkan.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bidang Lingkungan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mengkoordinasi kegiatan kebersihan, penghijauan, dan
                pelestarian lingkungan RW 01 melalui program kerja bakti
                rutin.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bidang Pendidikan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Menyelenggarakan program pelatihan, workshop, dan pendidikan
                informal untuk meningkatkan keterampilan pemuda RW 01.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bidang Kepemudaan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mengembangkan potensi kepemudaan, membangun karakter, dan
                memperkuat jiwa gotong royong di kalangan generasi muda.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bidang Publikasi
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mengelola informasi, dokumentasi, dan publikasi kegiatan
                Karang Taruna melalui berbagai media komunikasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bersama untuk RW 01
            </h2>
            <p className="text-primary-foreground/90 leading-relaxed mb-6">
              Struktur organisasi Karang Taruna RW 01 dirancang untuk memastikan
              setiap program berjalan dengan efektif dan terkoordinasi. Dengan
              dukungan seluruh anggota dan warga, kami berkomitmen untuk terus
              berkontribusi bagi kemajuan lingkungan RW 01.
            </p>
            <p className="text-primary-foreground/90 leading-relaxed">
              Bergabunglah dengan kami dalam mewujudkan RW 01 yang lebih baik,
              lebih berkembang, dan lebih bersatu.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
