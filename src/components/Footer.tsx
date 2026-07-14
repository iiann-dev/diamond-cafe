import { useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../data';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display-lg text-headline-md text-primary mb-4">Diamond</h3>
            <p className="text-muted-stone text-sm leading-relaxed max-w-xs">
              A family-run cafe in Noe Valley since 2010. Fresh coffee, homemade food, and warm smiles every day.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-primary uppercase mb-4">Navigation</h4>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => navigate(item.tab === 'home' ? '/' : `/${item.tab}`)}
                  className="block text-muted-stone text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-primary uppercase mb-4">Contact</h4>
            <div className="space-y-2 text-muted-stone text-sm">
              <p>751 Diamond Street</p>
              <p>San Francisco, CA 94114</p>
              <p className="text-primary">(415) 655-3674</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border-subtle/50 mt-8 pt-8 text-center text-muted-stone text-xs font-label-caps uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Diamond Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
