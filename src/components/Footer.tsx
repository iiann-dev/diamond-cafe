import { useNavigate } from 'react-router-dom';
import { NAV_ITEMS, SOCIALS, ORDER_URL, LOGOS, SITE } from '../data';
import { useSiteData } from '../context/SiteDataContext';
import { urlFor } from '../lib/sanity';

export default function Footer() {
  const navigate = useNavigate();
  const { siteInfo } = useSiteData();

  const wideLogo = siteInfo?.logos?.wide ? urlFor(siteInfo.logos.wide).width(400).url() : LOGOS.wide;
  const orderUrl = siteInfo?.orderUrl || ORDER_URL;
  const address = siteInfo?.address || SITE.address;
  const phone = siteInfo?.phone || SITE.phone;
  const email = siteInfo?.email || SITE.email;
  const name = siteInfo?.name || SITE.name;

  const socials = siteInfo?.socials?.length
    ? siteInfo.socials
    : [
        { platform: 'facebook', url: SOCIALS.facebook },
        { platform: 'instagram', url: SOCIALS.instagram },
      ];

  const socialIcon = (platform: string) => {
    if (platform === 'facebook') {
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
    }
    if (platform === 'instagram') {
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
    }
    if (platform === 'x') {
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
    }
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /></svg>;
  };

  return (
    <footer className="border-t border-border-light bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <img
              src={wideLogo}
              alt={`${name} logo`}
              className="h-8 w-auto object-contain mb-4"
              loading="lazy"
              decoding="async"
            />
            <p className="text-muted-charcoal text-body leading-relaxed max-w-xs">
              {siteInfo?.description || 'A family-run cafe in Noe Valley since 2014. Fresh coffee, homemade food, and warm smiles every day.'}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-label text-caption text-diamond-blue mb-4">Navigation</h4>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => navigate(item.tab === 'home' ? '/' : `/${item.tab}`)}
                  className="block text-muted-charcoal text-body hover:text-diamond-blue transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-caption text-diamond-blue mb-4">Contact</h4>
            <div className="space-y-2 text-muted-charcoal text-body">
              <p>{address}</p>
              <p>{phone}</p>
              <a href={`mailto:${email}`} className="block text-diamond-blue hover:underline">{email}</a>
            </div>
          </div>

          {/* Social + Order */}
          <div>
            <h4 className="font-label text-caption text-diamond-blue mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map((s: { platform: string; url: string }) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-diamond-blue/10 flex items-center justify-center text-diamond-blue hover:bg-diamond-blue hover:text-white transition-all duration-300"
                  aria-label={s.platform}
                >
                  {socialIcon(s.platform)}
                </a>
              ))}
            </div>
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Online
            </a>
          </div>
        </div>
        <div className="border-t border-border-light mt-10 pt-8 text-center text-faint-charcoal text-caption font-label">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
