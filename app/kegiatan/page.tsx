import type { Metadata } from 'next'
import { CtaBanner } from '@/components/cta-banner'
import { KegiatanFilter } from '@/components/kegiatan-filter'
import { PageHeader } from '@/components/page-header'
import { kegiatan } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Kegiatan',
  description:
    'Daftar kegiatan dan agenda Karang Taruna RW 01 Kelurahan Mekarjaya, dari olahraga, bakti sosial, hingga kerja bakti lingkungan.',
}

export default function KegiatanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kegiatan"
        title="Kegiatan & agenda Karang Taruna RW 01"
        description="Semua kegiatan yang telah dan akan dilaksanakan bersama warga RW 01. Gunakan filter untuk melihat kegiatan sesuai bidangnya."
        breadcrumb={[{ label: 'Kegiatan' }]}
      />

      <section className="container-page py-14 sm:py-20">
        <KegiatanFilter items={kegiatan} />
      </section>

      <CtaBanner />
    </>
  )
}
