import { cn } from '@/lib/utils'
import { sixtyfour } from '@/lib/fonts'

export default function Header({ children }: { children: React.ReactNode | string }) {
  return (
    <div className={cn(sixtyfour.className, 'antialiased bg-red-500 text-black flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl')}>
      {children}
    </div>
  )
}