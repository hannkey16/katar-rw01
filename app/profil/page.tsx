import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle2, Quote } from 'lucide-react'
import { CategoryIcon } from '@/components/category-icon'
import { CtaBanner } from '@/components/cta-banner'
import { PageHeader } from '@/components/page-header'
import { PengurusCard } from '@/components/pengurus-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { nilaiOrganisasi, pengurusBidang, pengurusInti } from '@/lib/data'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Profil Organisasi',
  description:
    'Profil Karang Taruna RW 01 Kelurahan Mekarjaya: sejarah singkat, visi misi, nilai organisasi, dan susunan pengurus.',
}

const misi = [
  'Menyelenggarakan kegiatan sosial dan kemanusiaan bagi warga yang membutuhkan.',
  'Mengembangkan minat, bakat, dan keterampilan pemuda RW 01.',
  'Menjaga kebersihan dan kelestarian lingkungan melalui gotong royong.',
  'Mendukung penuh setiap agenda warga dan pengurus RW 01.',
  'Membangun kekompakan antar pemuda dari seluruh RT di lingkungan RW 01.',
]

const sejarah = [
  {
    tahun: '2018',
    judul: 'Pembentukan Awal',
    isi: 'Sekelompok pemuda RW 01 mulai mengoordinasi kegiatan HUT RI dan kerja bakti secara mandiri.',
  },
  {
    tahun: '2020',
    judul: 'Pengukuhan Kepengurusan',
    isi: 'Karang Taruna RW 01 resmi dikukuhkan oleh pengurus RW dengan susunan pengurus dan bidang kerja.',
  },
  {
    tahun: '2023',
    judul: 'Program Rutin Berjalan',
    isi: 'Kegiatan santunan, senam sehat, dan kerja bakti bulanan menjadi agenda tetap organisasi.',
  },
  {
    tahun: '2026',
    judul: 'Digitalisasi Informasi',
    isi: 'Informasi kegiatan dan pengumuman warga mulai dipublikasikan melalui kanal digital resmi.',
  },
]

export default function ProfilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Profil"
        title="Profil Karang Taruna RW 01 Kelurahan Mekarjaya"
        description="Mengenal lebih dekat organisasi kepemudaan tingkat RW yang menjadi wadah generasi muda RW 01 untuk berkarya bersama warga."
        breadcrumb={[{ label: 'Profil' }]}
      />

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Sekilas Organisasi"
              title="Wadah pemuda RW 01 sejak 2018"
              description="Karang Taruna RW 01 Kelurahan Mekarjaya lahir dari inisiatif pemuda setempat yang ingin menghidupkan kembali kegiatan lingkungan. Dari kepanitiaan HUT RI, organisasi ini berkembang menjadi wadah resmi dengan enam bidang kerja."
            />
            <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
              Saat ini Karang Taruna RW 01 beranggotakan lebih dari 85 pemuda
              dari seluruh RT di lingkungan RW 01, bekerja sama dengan pengurus
              RW dan tokoh masyarakat dalam setiap kegiatan warga.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-secondary/60 p-6">
              <Quote className="size-7 text-accent" aria-hidden="true" />
              <blockquote className="mt-3 leading-relaxed text-pretty text-primary">
                Karang Taruna bukan hanya tentang acara, tetapi tentang
                menumbuhkan rasa memiliki pemuda terhadap lingkungannya
                sendiri.
              </blockquote>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">
                Rizky Ananda Putra — Ketua Karang Taruna RW 01
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/tentang.png"
                alt="Anggota Karang Taruna RW 01 bersiap menyelenggarakan kegiatan warga"
                fill
                priority
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-14 sm:py-20">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h2 className="font-display text-xl font-bold text-primary">
              Visi
            </h2>
            <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
              Menjadi organisasi kepemudaan RW 01 yang mandiri, kreatif, dan
              peduli, serta mampu menjadi penggerak utama kegiatan positif di
              lingkungan Kelurahan Mekarjaya.
            </p>
            <p className="mt-6 font-display text-sm font-semibold tracking-wide text-accent-foreground uppercase">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <h2 className="font-display text-xl font-bold text-primary">
              Misi
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {misi.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Nilai & Fokus"
            title="Nilai yang kami pegang"
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nilaiOrganisasi.map((item, i) => (
            <Reveal as="li" key={item.judul} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <CategoryIcon name={item.icon} className="size-5.5" />
                </span>
                <h3 className="text-base font-bold text-primary">
                  {item.judul}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.deskripsi}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Perjalanan"
              title="Sejarah singkat organisasi"
              tone="dark"
            />
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sejarah.map((item, i) => (
              <Reveal as="li" key={item.tahun} delay={i * 100}>
                <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <span className="font-display text-sm font-bold text-accent">
                    {item.tahun}
                  </span>
                  <h3 className="mt-2 text-base font-bold">{item.judul}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {item.isi}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Struktur Organisasi"
            title="Pengurus inti periode 2026"
            description="Pengurus inti bertanggung jawab atas koordinasi program, administrasi, dan pengelolaan keuangan organisasi."
          />
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {pengurusInti.map((item, i) => (
            <Reveal as="li" key={item.nama} delay={i * 90}>
              <PengurusCard item={item} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14">
          <SectionHeading
            eyebrow="Koordinator Bidang"
            title="Tim pelaksana bidang kerja"
            description="Setiap bidang dipimpin koordinator yang menyusun dan menjalankan program bersama anggota."
          />
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pengurusBidang.map((item, i) => (
            <Reveal as="li" key={item.nama} delay={i * 60}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary font-display text-sm font-bold text-primary">
                  {item.inisial}
                </span>
                <div>
                  <p className="text-sm font-bold text-primary">{item.nama}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.jabatan}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </>
  )
}
