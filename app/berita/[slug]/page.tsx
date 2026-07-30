'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { berita } from '@/lib/data'
import { CtaBanner } from '@/components/cta-banner'

export default function BeritaDetailPage({
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

  const beritaData = berita.find((b) => b.slug === slug)

  if (!mounted) return null

  if (!beritaData) {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Berita yang Anda cari tidak tersedia.</p>
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>
        </div>
        <CtaBanner />
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-gray-900">
        {beritaData.gambar && (
          <Image
            src={beritaData.gambar}
            alt={beritaData.judul}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                {beritaData.kategori}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {beritaData.judul}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{beritaData.tanggal}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{beritaData.penulis}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>

          {/* Excerpt */}
          <div className="mb-12 p-6 md:p-8 bg-primary/5 border border-primary/10 rounded-2xl">
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              {beritaData.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {beritaData.isi.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Share Section */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Bagikan Berita Ini</h3>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Baca berita: ${beritaData.judul} di ${typeof window !== 'undefined' ? window.location.origin : ''}/berita/${slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Berita Terkait</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {berita
                .filter((b) => b.slug !== slug && b.kategori === beritaData.kategori)
                .slice(0, 2)
                .map((relatedBerita) => (
                  <Link
                    key={relatedBerita.slug}
                    href={`/berita/${relatedBerita.slug}`}
                    className="group p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all"
                  >
                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {relatedBerita.judul}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBerita.excerpt}
                    </p>
                    <p className="text-xs text-gray-500 mt-3">{relatedBerita.tanggal}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
