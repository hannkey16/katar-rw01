import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const poin = [
  'Wadah pengembangan potensi dan kreativitas pemuda RW 01',
  'Mitra aktif pengurus RW dalam setiap kegiatan warga',
  'Terbuka bagi seluruh pemuda usia 15–40 tahun di RW 01',
]

export function TentangSection() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <Reveal className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src="/images/tentang.png"
              alt="Anggota Karang Taruna RW 01 menyiapkan kegiatan lingkungan bersama"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 hidden w-56 rounded-2xl border border-border bg-card p-5 shadow-lg sm:block lg:-right-6">
            <p className="font-display text-3xl font-extrabold text-primary">
              85+
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              anggota aktif dari seluruh RT di lingkungan RW 01
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Tentang Kami"
            title="Pemuda RW 01 yang aktif, kreatif, dan peduli"
            description="Karang Taruna RW 01 Kelurahan Mekarjaya adalah organisasi kepemudaan tingkat RW yang menjadi wadah generasi muda untuk berkarya, bergotong royong, dan mendukung setiap agenda warga."
          />

          <ul className="mt-7 flex flex-col gap-3">
            {poin.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/60 p-5">
              <h3 className="text-sm font-bold tracking-wide text-primary uppercase">
                Visi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Menjadi wadah pemuda RW 01 yang mandiri, kreatif, dan peduli
                terhadap lingkungan serta masyarakat.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/60 p-5">
              <h3 className="text-sm font-bold tracking-wide text-primary uppercase">
                Misi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Menyelenggarakan kegiatan sosial, olahraga, pendidikan, dan
                lingkungan secara berkelanjutan bersama warga.
              </p>
            </div>
          </div>

          <ActionLink href="/profil" variant="link" size="none" className="mt-6">
            Selengkapnya tentang profil organisasi
            <ArrowRight className="size-4" />
          </ActionLink>
        </Reveal>
      </div>
    </section>
  )
}
