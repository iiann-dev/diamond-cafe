import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../data';

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="nav-glass fixed top-0 inset-x-0 z-50 h-[64px] flex items-center">
      <div className="container-diamond flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full blob bg-gradient-to-br from-amethyst-500 to-coral-400 flex items-center justify-center">
            <span className="text-white text-xs font-bold">◆</span>
          </div>
          <span className="font-display text-white text-lg tracking-tight">Diamond</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="#"
          className="btn-primary text-xs px-5 py-2.5"
          onClick={(e) => { e.preventDefault(); window.open('https://order.diamondcafesf.com', '_blank'); }}
        >
          Order Online
          <span className="text-xs opacity-70">↗</span>
        </a>
      </div>
    </nav>
  );
}
