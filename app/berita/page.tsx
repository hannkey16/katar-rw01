'use client'

import { useEffect, useState } from 'react'
import { berita } from '@/lib/data'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { BeritaFilter } from '@/components/berita-filter'

export default function BeritaPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <PageHeader
        title="Berita"
        description="Ikuti perkembangan kegiatan dan program terbaru melalui berita-berita dari Karang Taruna RW 01."
        breadcrumb={[{ label: 'Berita' }]}
      />

      <BeritaFilter allBerita={berita} />

      <CtaBanner />
    </>
  )
}
