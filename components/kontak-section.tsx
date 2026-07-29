import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { KontakForm } from '@/components/kontak-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '@/components/social-icons'
import { site } from '@/lib/site'

const sosial = [
  { label: 'WhatsApp', href: site.whatsappLink, Icon: WhatsappIcon },
  { label: 'Instagram', href: site.instagram, Icon: InstagramIcon },
  { label: 'YouTube', href: site.youtube, Icon: YoutubeIcon },
  { label: 'Facebook', href: site.facebook, Icon: FacebookIcon },
]

export function KontakSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="kontak" className="container-page py-14 sm:py-20">
      {withHeading && (
        <Reveal>
          <SectionHeading
            eyebrow="Kontak"
            title="Hubungi Karang Taruna RW 01"
            description="Sampaikan pertanyaan, usulan kegiatan, atau informasi apa pun kepada pengurus. Kami terbuka untuk seluruh warga RW 01."
          />
        </Reveal>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-primary">
              {site.fullName}
            </h3>
            <ul className="mt-5 flex flex-col gap-5 text-sm">
              <li className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-4.5" />
                </span>
                <div>
                  <p className="font-semibold text-primary">Alamat Sekretariat</p>
                  <p className="mt-0.5 leading-relaxed text-muted-foreground">
                    {site.address}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-4.5" />
                </span>
                <div>
                  <p className="font-semibold text-primary">WhatsApp</p>
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Mail className="size-4.5" />
                </span>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-0.5 block break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Clock className="size-4.5" />
                </span>
                <div>
                  <p className="font-semibold text-primary">Jam Sekretariat</p>
                  <ul className="mt-0.5 text-muted-foreground">
                    {site.jamOperasional.map((j) => (
                      <li key={j.hari}>
                        {j.hari}: {j.jam}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
              {sosial.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src={site.mapsEmbed}
              title="Peta lokasi Karang Taruna RW 01 Kelurahan Mekarjaya"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0 sm:h-72"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-display text-lg font-bold text-primary">
            Kirim Pesan
          </h3>
          <p className="mt-1 mb-6 text-sm leading-relaxed text-muted-foreground">
            Isi formulir berikut, pesan Anda akan langsung diteruskan ke
            WhatsApp pengurus.
          </p>
          <KontakForm />
        </Reveal>
      </div>
    </section>
  )
}
