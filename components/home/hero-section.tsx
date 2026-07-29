import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { Eyebrow } from '@/components/section-heading'
import { site } from '@/lib/site'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-secondary blur-3xl" />
      <div className="container-page relative grid gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="duration-700 animate-in fade-in slide-in-from-bottom-6">
          <Eyebrow>Organisasi Kepemudaan RW 01</Eyebrow>

          <h1 className="mt-5 text-3xl leading-[1.1] font-extrabold text-primary text-balance sm:text-4xl lg:text-[3.25rem]">
            Karang Taruna RW 01
            <span className="mt-1 block text-primary/70">
              Kelurahan Mekarjaya
            </span>
          </h1>

          <p className="mt-4 font-display text-base font-semibold text-accent-foreground sm:text-lg">
            <span className="border-b-3 border-accent pb-0.5">
              {site.tagline}
            </span>
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-pretty text-muted-foreground">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/kegiatan" size="lg">
              Lihat Kegiatan
              <ArrowRight className="size-4.5" />
            </ActionLink>
            <ActionLink href="/profil" variant="outline" size="lg">
              Tentang Kami
            </ActionLink>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-accent" />
            Kelurahan Mekarjaya, Kecamatan Sukmajaya, Kota Depok
          </div>
        </div>

        <div className="relative delay-150 duration-700 animate-in fade-in slide-in-from-bottom-8">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-xl sm:aspect-16/11">
            <Image
              src="/images/hero-pemuda.png"
              alt="Kebersamaan anggota Karang Taruna RW 01 Kelurahan Mekarjaya"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/95 p-4 backdrop-blur sm:inset-x-6 sm:bottom-6">
              <p className="text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                Agenda Terdekat
              </p>
              <p className="mt-1 text-sm font-bold text-primary text-pretty">
                Turnamen Futsal HUT RI ke-81 · 10 Agustus 2026
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Lapangan Serbaguna RW 01 · Pendaftaran dibuka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
