import type { MenuItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', tab: 'home' },
  { label: 'Menu', tab: 'menu' },
  { label: 'Our Story', tab: 'story' },
  { label: 'Gallery', tab: 'gallery' },
  { label: 'Events', tab: 'events' },
  { label: 'Contact', tab: 'contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'm1', name: 'Big Mike Blend', price: 3.75, description: 'Our signature house-roasted coffee blend — bold, smooth, and full of character.', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop', popular: true },
  { id: 'm2', name: 'Cappuccino', price: 4.50, description: 'Espresso with steamed milk foam, finished with a delicate latte art.', category: 'coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop' },
  { id: 'm3', name: 'Iced Matcha Latte', price: 5.25, description: 'Creamy matcha green tea over ice with your choice of milk.', category: 'coffee', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop', popular: true },
  { id: 'm4', name: 'Iced Latte', price: 4.25, description: 'Chilled espresso poured over milk and ice — refreshing any time.', category: 'coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
  { id: 'm5', name: 'Berry French Toast', price: 7.50, description: 'Thick-cut brioche, berry compote, whipped cream, and maple drizzle.', category: 'food', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop', popular: true },
  { id: 'm6', name: 'Breakfast Sandwich', price: 6.75, description: 'Egg, cheddar, and choice of bacon or sausage on a toasted brioche bun.', category: 'food', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop' },
  { id: 'm7', name: 'Avocado Toast', price: 7.25, description: 'Smashed avocado, chili flake, lime, cherry tomato on sourdough.', category: 'food', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop' },
  { id: 'm8', name: 'Choco Chip Cookie', price: 2.75, description: 'Warm, chewy, loaded with dark chocolate chunks — a daily favorite.', category: 'pastry', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop' },
  { id: 'm9', name: 'Croissant', price: 3.50, description: 'Buttery, flaky, golden-baked — plain or with ham & cheese.', category: 'pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038029a?w=400&h=400&fit=crop' },
  { id: 'm10', name: 'Banana Bread', price: 3.25, description: 'Moist, house-baked banana loaf with walnuts and a honey glaze.', category: 'pastry', image: 'https://images.unsplash.com/photo-1569760541092-b24e1c0d9def?w=400&h=400&fit=crop' },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop&q=80',
  interior: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=750&fit=crop&q=80',
  story: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=750&fit=crop&q=80',
  polaroid: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=600&fit=crop&q=80',
  community: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=700&fit=crop&q=80',
  gallery1: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop&q=80',
  gallery2: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&q=80',
  gallery3: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop&q=80',
  gallery4: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop&q=80',
  gallery5: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop&q=80',
  gallery6: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop&q=80',
  avatars: [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  ],
};

export const SITE = {
  name: 'Diamond Cafe',
  tagline: 'Brewing good moments every single day.',
  description: 'Diamond Cafe is a small, family-owned cafe located in the Noe Valley neighborhood and serving the surrounding area. We are dedicated to providing our customers with a warm and welcoming atmosphere where they can enjoy delicious food and beverages.',
  hours: '7AM — 3PM',
  days: 'Open Daily',
  address: '751 Diamond St, San Francisco, CA 94114',
  neighborhood: 'Noe Valley, SF',
  email: 'diamondcafelunches@gmail.com',
  phone: '(415) 555-0123',
  heroTitle: 'Sip. Smile.',
  heroScript: 'Stay a While',
  heroTag: 'GOOD COFFEE, HAPPY PEOPLE',
  heroDesc: 'Your cozy neighborhood cafe serving great coffee, yummy bites, and good vibes every day in the heart of Noe Valley.',
  rating: 1500,
};

export const HOURS: { day: string; hours: string }[] = [
  { day: 'Monday — Friday', hours: '7AM — 3PM' },
  { day: 'Saturday', hours: '7AM — 3PM' },
  { day: 'Sunday', hours: '7AM — 3PM' },
];
