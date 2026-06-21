import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import Button from '@/components/ui/Button'

const navItems: [string, string][] = [
  ['About', '#mission'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div className={`mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 transition-all duration-500 sm:px-8 ${scrolled ? 'mx-4 mt-3 nav-pill sm:mx-8' : ''}`}>
        <Link
          to="/"
          className="flex min-h-[44px] shrink-0 items-center gap-2.5 text-[18px] font-bold tracking-[-0.01em] text-white/90"
          aria-label="JTAM Group, home"
        >
          <Logo size={24} spin />
          JTAM Group
        </Link>

        <nav className="hidden items-center gap-7 whitespace-nowrap lg:flex" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="flex min-h-[44px] items-center text-sm font-medium text-white/50 transition-colors hover:text-white/90"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="mailto:hello@jtamb.com">Get in touch</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span className={`absolute left-0 block h-0.5 w-6 rounded bg-white transition-all duration-200 ${open ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded bg-white transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 block h-0.5 w-6 rounded bg-white transition-all duration-200 ${open ? 'top-[7px] -rotate-45' : 'top-3.5'}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-4 top-20 rounded-2xl glass border border-white/[0.08] transition-all duration-200 lg:hidden ${open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'}`}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-[16px] font-semibold text-white/90"
            >
              {label}
            </a>
          ))}
          <Button href="mailto:hello@jtamb.com" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Get in touch
          </Button>
        </nav>
      </div>
    </header>
  )
}
