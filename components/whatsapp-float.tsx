import { WhatsappIcon } from '@/components/social-icons'
import { site } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg ring-4 ring-primary/10 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-5 text-accent" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
      <span className="sr-only sm:hidden">Chat WhatsApp Karang Taruna RW 01</span>
    </a>
  )
}
