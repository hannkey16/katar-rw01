import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WhatsappIcon } from '@/components/social-icons'
import { site } from '@/lib/site'

export function CtaBanner() {
  return (
    <section className="container-page py-14 sm:py-20">
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid text-primary-foreground/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-balance sm:text-3xl">
              Punya Ide? Ingin Ikut Berkontribusi?
            </h2>
            <p className="mt-3 leading-relaxed text-pretty text-primary-foreground/75">
              Bersama membangun kegiatan positif untuk pemuda RW 01. Sampaikan
              ide, usulan kegiatan, atau daftar menjadi anggota Karang Taruna
              RW 01 Kelurahan Mekarjaya.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-6 text-[0.95rem] font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              <WhatsappIcon className="size-5" />
              Hubungi Kami
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-primary-foreground/25 px-6 text-[0.95rem] font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Ikuti Instagram
              <ArrowUpRight className="size-4.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
