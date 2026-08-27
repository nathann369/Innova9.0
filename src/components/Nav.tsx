
import { useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

const MenuIcon = lazy(() => import('lucide-react').then((mod) => ({ default: mod.MenuIcon })));
const XIcon = lazy(() => import('lucide-react').then((mod) => ({ default: mod.XIcon })));

const BASE_URL = import.meta.env.BASE_URL;

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: { pathname: '/', hash: '#services' } },
  { label: 'About', to: { pathname: '/', hash: '#about' } },
  { label: 'Projects', to: { pathname: '/', hash: '#projects' } },
  { label: 'Pricing', to: { pathname: '/', hash: '#pricing' } },
  { label: 'Contact', to: { pathname: '/', hash: '#contact' } },
  { label: 'Courses', to: '/courses' },
  { label: 'Store', to: { pathname: '/', hash: '#novomall' } },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full bg-white transition-shadow ${
      scrolled ? 'border-b border-[#dddddd]' : 'border-b border-transparent'}`
      }>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        
        <Link
          to="/"
          className="text-sm font-bold uppercase tracking-[0.2em] text-black">
          
           [INNOVA-9]
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="text-sm font-medium text-[#555555] transition-colors hover:text-black"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`${BASE_URL}#contact`}
          className="hidden border border-black bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black md:inline-block">
          
          Start a Project
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-black md:hidden">
          
          <Suspense fallback={<span className="inline-block h-6 w-6" />}>
            {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </Suspense>
        </button>
      </nav>

      {open &&
      <div className="border-t border-[#dddddd] bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[#eeeeee] py-4 text-base font-medium text-black"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                onClick={() => setOpen(false)}
                className="mt-4 block bg-black px-5 py-3 text-center text-base font-semibold text-white"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      }
    </header>);

}
