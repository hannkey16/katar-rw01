import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  variant = 'light',
  className,
}: {
  /** light = untuk background putih, dark = untuk background navy */
  variant?: 'light' | 'dark'
  className?: string
}) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-3 rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-accent/60',
        className,
      )}
    >
      <span className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary ring-1 ring-primary/20">
        <Image
          src="/images/logo-kt.png"
          alt="Logo Karang Taruna RW 01 Kelurahan Mekarjaya"
          width={64}
          height={64}
          className="size-11 object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-display text-[0.95rem] font-bold tracking-tight',
            variant === 'dark' ? 'text-primary-foreground' : 'text-primary',
          )}
        >
          Karang Taruna RW 01
        </span>
        <span
          className={cn(
            'text-[0.7rem] font-medium tracking-wide uppercase',
            variant === 'dark' ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          Kelurahan Mekarjaya
        </span>
      </span>
    </Link>
  )
}
