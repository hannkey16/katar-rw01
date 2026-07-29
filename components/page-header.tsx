import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumb: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid text-primary-foreground/10" />
      <div className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-page relative py-12 sm:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-primary-foreground/60">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Beranda
              </Link>
            </li>
            {breadcrumb.map((item) => (
              <li key={item.label} className="flex items-center gap-1">
                <ChevronRight className="size-3.5" aria-hidden="true" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-5 flex flex-col gap-3">
          {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
          <h1 className="max-w-3xl text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl leading-relaxed text-pretty text-primary-foreground/75">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
