import { Megaphone } from 'lucide-react'
import { pengumuman, type Pengumuman } from '@/lib/data'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const badgeStyle: Record<Pengumuman['badge'], string> = {
  PENTING: 'bg-accent text-accent-foreground',
  INFORMASI: 'bg-primary/10 text-primary',
  INFO: 'bg-secondary text-muted-foreground',
}

export function PengumumanPanel({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        'rounded-2xl border border-border bg-card p-6 shadow-sm',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Megaphone className="size-5" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-primary">Pengumuman</h2>
          <p className="text-xs text-muted-foreground">
            Informasi terbaru untuk warga RW 01
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-col divide-y divide-border">
        {pengumuman.map((item) => (
          <li key={item.judul} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-[0.65rem] font-bold tracking-wide',
                  badgeStyle[item.badge],
                )}
              >
                {item.badge}
              </span>
              <span className="text-xs text-muted-foreground">
                {item.tanggal}
              </span>
            </div>
            <h3 className="mt-2 text-sm font-bold text-primary text-pretty">
              {item.judul}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.isi}
            </p>
          </li>
        ))}
      </ul>

      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex h-11 items-center justify-center rounded-xl border border-border text-sm font-semibold text-primary transition-colors hover:border-primary/30 hover:bg-secondary"
      >
        Tanya Pengurus
      </a>
    </aside>
  )
}
