import {
  CalendarDays,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Sparkles,
  Store,
  Trophy,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const icons = {
  sosial: HeartHandshake,
  olahraga: Trophy,
  pendidikan: GraduationCap,
  ekonomi: Store,
  lingkungan: Leaf,
  kepemudaan: Sparkles,
  users: Users,
  calendar: CalendarDays,
  clipboard: ClipboardList,
  sparkles: Sparkles,
} as const

export type IconName = keyof typeof icons

export function CategoryIcon({
  name,
  className,
}: {
  name: IconName
  className?: string
}) {
  const Icon = icons[name]
  return <Icon className={cn('size-5', className)} aria-hidden="true" />
}
