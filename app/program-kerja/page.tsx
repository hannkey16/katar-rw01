'use client'

import { useEffect, useState } from 'react'
import { programKategori } from '@/lib/data'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { ProgramFilter } from '@/components/program-filter'

export default function ProgramKerjaPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <PageHeader
        title="Program Kerja"
        description="Karang Taruna RW 01 menjalankan program kerja terstruktur dalam enam bidang untuk mendukung pengembangan masyarakat."
        breadcrumb={[{ label: 'Program Kerja' }]}
      />

      <ProgramFilter allProgram={programKategori} />

      <CtaBanner />
    </>
  )
}
