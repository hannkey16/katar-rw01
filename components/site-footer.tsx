import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '@/components/social-icons'
import { navItems, site } from '@/lib/site'

const sosial = [
  { label: 'WhatsApp', href: site.whatsappLink, Icon: WhatsappIcon },
  { label: 'Instagram', href: site.instagram, Icon: InstagramIcon },
  { label: 'YouTube', href: site.youtube, Icon: YoutubeIcon },
  { label: 'Facebook', href: site.facebook, Icon: FacebookIcon },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid text-primary-foreground/10" />
      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {site.fullName} — wadah generasi muda untuk berkarya, peduli
              sosial, dan membangun lingkungan yang lebih baik.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {sosial.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Menu footer">
            <h2 className="font-display text-sm font-bold tracking-wide uppercase">
              Menu Website
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 text-sm md:grid-cols-1">
              {[...navItems, { label: 'Struktur Pengurus', href: '/struktur-pengurus' }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold tracking-wide uppercase">
              Kontak
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4.5 shrink-0 text-accent" />
                <span className="leading-relaxed">{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4.5 shrink-0 text-accent" />
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {site.whatsappNumber}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4.5 shrink-0 text-accent" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {site.fullName}. Seluruh hak cipta dilindungi.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
