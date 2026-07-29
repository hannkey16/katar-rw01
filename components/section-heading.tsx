import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  tone = 'light',
  className,
}: {
  children: React.ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        tone === 'light'
          ? 'bg-secondary text-primary'
          : 'bg-primary-foreground/10 text-accent',
        className,
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          tone === 'light' ? 'bg-accent' : 'bg-accent',
        )}
      />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          'text-2xl font-bold text-balance sm:text-3xl lg:text-[2.1rem]',
          tone === 'light' ? 'text-primary' : 'text-primary-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl leading-relaxed text-pretty',
            tone === 'light'
              ? 'text-muted-foreground'
              : 'text-primary-foreground/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
