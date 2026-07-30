'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'
import { kegiatan } from '@/lib/data'
import { CtaBanner } from '@/components/cta-banner'

export default function KegiatanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [mounted, setMounted] = useState(false)
  const [slug, setSlug] = useState<string>('')
  
  useEffect(() => {
    params.then((p) => {
      setSlug(p.slug)
      setMounted(true)
    })
  }, [params])
  
  const kegiatanData = kegiatan.find((k) => k.slug === slug)

  if (!mounted) return null

  if (!kegiatanData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kegiatan Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">
            Kegiatan yang Anda cari tidak tersedia.
          </p>
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Kegiatan
          </Link>
        </div>
      </div>
    )
  }

  const statusColor = {
    'Selesai': 'bg-green-100 text-green-800',
    'Berlangsung': 'bg-blue-100 text-blue-800',
    'Akan Datang': 'bg-yellow-100 text-yellow-800',
  }

  const categoryColor = {
    'Olahraga': 'bg-red-100 text-red-800',
    'Sosial': 'bg-purple-100 text-purple-800',
    'Lingkungan': 'bg-green-100 text-green-800',
    'Pendidikan': 'bg-blue-100 text-blue-800',
    'Kepemudaan': 'bg-pink-100 text-pink-800',
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
          <Image
            src={kegiatanData.gambar}
            alt={kegiatanData.nama}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali</span>
            </Link>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    categoryColor[kegiatanData.kategori as keyof typeof categoryColor] ||
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {kegiatanData.kategori}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    statusColor[kegiatanData.status as keyof typeof statusColor] ||
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {kegiatanData.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{kegiatanData.nama}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tanggal & Waktu</p>
                  <p className="font-semibold text-gray-900">{kegiatanData.tanggal}</p>
                  <p className="text-sm text-gray-600">{kegiatanData.waktu}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Lokasi</p>
                  <p className="font-semibold text-gray-900">{kegiatanData.lokasi}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Peserta</p>
                  <p className="font-semibold text-gray-900">{kegiatanData.peserta}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Penanggung Jawab</p>
                  <p className="font-semibold text-gray-900">
                    {kegiatanData.penanggungJawab}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Deskripsi Kegiatan</h2>
            <div className="space-y-4">
              {kegiatanData.isi.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kegiatan"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Daftar Kegiatan
            </Link>
            <a
              href="https://wa.me/62812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <span>Hubungi Kami via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
