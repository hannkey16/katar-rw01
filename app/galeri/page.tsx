'use client'

import { useEffect, useState } from 'react'
import { galeri, galeriKategori } from '@/lib/data'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { GaleriFilter } from '@/components/galeri-filter'

export default function GaleriPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <PageHeader
        title="Galeri"
        description="Lihat koleksi foto kegiatan sosial, olahraga, dan acara bersama masyarakat RW 01."
        breadcrumb={[{ label: 'Galeri' }]}
      />

      <GaleriFilter allGaleri={galeri} kategori={galeriKategori} />

      <CtaBanner />
    </>
  )
}
