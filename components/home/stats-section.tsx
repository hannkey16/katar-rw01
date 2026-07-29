import { CategoryIcon } from '@/components/category-icon'
import { Reveal } from '@/components/reveal'
import { statistik } from '@/lib/data'

export function StatsSection() {
  return (
    <section className="container-page py-12 sm:py-14">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {statistik.map((item, i) => (
          <Reveal as="li" key={item.label} delay={i * 90}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <CategoryIcon name={item.icon} />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
