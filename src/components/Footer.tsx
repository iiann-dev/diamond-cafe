import { useNavigate } from 'react-router-dom';
import { NAV_ITEMS, SOCIALS, ORDER_URL, LOGOS, SITE } from '../data';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-[rgba(45,43,58,0.06)] bg-white">
      <div className="max-w-container-max mx-auto px-gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <img
              src={LOGOS.wide}
              alt="Diamond Wide Logo"
              className="h-8 w-auto object-contain mb-4"
              loading="lazy"
              decoding="async"
            />
            <p className="text-[#8B7E81] text-sm leading-relaxed max-w-xs">
              A family-run cafe in Noe Valley since 2010. Fresh coffee, homemade food, and warm smiles every day.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-label-caps text-[#F2766A] uppercase text-xs tracking-widest mb-4">Navigation</h4>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => navigate(item.tab === 'home' ? '/' : `/${item.tab}`)}
                  className="block text-[#8B7E81] text-sm hover:text-[#F2766A] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label-caps text-[#F2766A] uppercase text-xs tracking-widest mb-4">Contact</h4>
            <div className="space-y-2 text-[#8B7E81] text-sm">
              <p>{SITE.address}</p>
              <p>{SITE.phone}</p>
              <a href={`mailto:${SITE.email}`} className="block text-[#F2766A] hover:underline">{SITE.email}</a>
            </div>
          </div>

          {/* Social + Order */}
          <div>
            <h4 className="font-label-caps text-[#F2766A] uppercase text-xs tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F2766A]/10 flex items-center justify-center text-[#F2766A] hover:bg-[#F2766A] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F2766A]/10 flex items-center justify-center text-[#F2766A] hover:bg-[#F2766A] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F2766A] hover:bg-[#E05A4E] text-white px-5 py-2.5 rounded-lg font-label-caps text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Order Online
            </a>
          </div>
        </div>
        <div className="border-t border-[rgba(45,43,58,0.06)] mt-10 pt-8 text-center text-[#A39396] text-xs font-label-caps uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Diamond Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
