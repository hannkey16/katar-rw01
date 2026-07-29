import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const actionLinkVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all outline-none focus-visible:ring-3 focus-visible:ring-primary/40 disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md',
        accent:
          'bg-accent text-accent-foreground shadow-sm hover:brightness-105 hover:shadow-md',
        outline:
          'border border-border bg-background text-primary hover:border-primary/30 hover:bg-secondary',
        ghostDark:
          'border border-primary-foreground/25 text-primary-foreground hover:border-accent hover:text-accent',
        link: 'text-primary underline-offset-4 hover:text-primary/80 hover:underline',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4 text-[0.8rem]',
        lg: 'h-12 px-6 text-[0.95rem]',
        none: '',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

type Props = React.ComponentProps<typeof Link> &
  VariantProps<typeof actionLinkVariants>

export function ActionLink({ className, variant, size, ...props }: Props) {
  return (
    <Link
      className={cn(actionLinkVariants({ variant, size, className }))}
      {...props}
    />
  )
}
