import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-[0_0_10px_rgba(0,0,0,0.1)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold text-gray-900">
          yeseun2005<span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-gray-500 transition hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-gray-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-3 border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}