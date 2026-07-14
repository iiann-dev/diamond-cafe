import type { MenuItem, GalleryImage, DayHours } from './types';

export const NAV_ITEMS = [
  { label: 'Home', tab: 'home' },
  { label: 'Menu', tab: 'menu' },
  { label: 'Our Story', tab: 'story' },
  { label: 'Gallery', tab: 'gallery' },
  { label: 'Contact', tab: 'contact' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // ─── Coffee ───
  { id: 'c1', name: 'Big Mike Blend', price: 3.75, description: 'Our signature house-roasted coffee blend — bold, smooth, and full of character. A Diamond Cafe original.', category: 'coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop&q=80', popular: true },
  { id: 'c2', name: 'Cappuccino', price: 4.50, description: 'Espresso with steamed milk foam, finished with delicate latte art. A classic done right.', category: 'coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&q=80' },
  { id: 'c3', name: 'Iced Matcha Latte', price: 5.25, description: 'Creamy matcha green tea over ice with your choice of milk. Refreshingly vibrant.', category: 'coffee', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop&q=80', popular: true },
  { id: 'c4', name: 'Iced Latte', price: 4.25, description: 'Chilled espresso poured over milk and ice — the perfect pick-me-up any time of day.', category: 'coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&q=80' },
  { id: 'c5', name: 'Cold Brew', price: 4.75, description: 'Slow-steeped for 20 hours — silky, strong, and never bitter. Our summer staple.', category: 'coffee', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop&q=80' },
  { id: 'c6', name: 'Flat White', price: 4.50, description: 'Double ristretto poured over micro-foam. Velvety, bold, and beautifully balanced.', category: 'coffee', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=400&fit=crop&q=80' },
  // ─── Food ───
  { id: 'f1', name: 'Berry French Toast', price: 7.50, description: 'Thick-cut brioche, berry compote, whipped cream, and a maple drizzle. Brunch perfection.', category: 'food', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop&q=80', popular: true },
  { id: 'f2', name: 'Breakfast Sandwich', price: 6.75, description: 'Egg, cheddar, and your choice of bacon or sausage on a toasted brioche bun.', category: 'food', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop&q=80' },
  { id: 'f3', name: 'Avocado Toast', price: 7.25, description: 'Smashed avocado, chili flake, lime, cherry tomato on artisan sourdough.', category: 'food', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop&q=80' },
  { id: 'f4', name: 'Turkey & Havarti Panini', price: 8.50, description: 'Oven-roasted turkey, havarti, arugula, sun-dried tomato pesto on pressed ciabatta.', category: 'food', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop&q=80' },
  { id: 'f5', name: 'Garden Salad', price: 6.25, description: 'Mixed greens, cherry tomato, cucumber, red onion, with house vinaigrette.', category: 'food', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&q=80' },
  // ─── Pastry ───
  { id: 'p1', name: 'Choco Chip Cookie', price: 2.75, description: 'Warm, chewy, loaded with dark chocolate chunks — a daily favorite since day one.', category: 'pastry', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&q=80', popular: true },
  { id: 'p2', name: 'Butter Croissant', price: 3.50, description: 'Golden, flaky, French-style — plain or with ham & melted gruyère.', category: 'pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038029a?w=400&h=400&fit=crop&q=80' },
  { id: 'p3', name: 'Banana Bread', price: 3.25, description: 'House-baked, moist, walnut-studded with a honey glaze. Tastes like Sunday morning.', category: 'pastry', image: 'https://images.unsplash.com/photo-1569760541092-b24e1c0d9def?w=400&h=400&fit=crop&q=80' },
  { id: 'p4', name: 'Blueberry Muffin', price: 3.50, description: 'Fresh-baked with wild blueberries and a crunchy streusel top.', category: 'pastry', image: 'https://images.unsplash.com/photo-1559304822-4f8dd0300e9f?w=400&h=400&fit=crop&q=80' },
  { id: 'p5', name: 'Cinnamon Roll', price: 4.25, description: 'Soft, swirled, cream-cheese iced. The smell alone is worth the visit.', category: 'pastry', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop&q=80', popular: true },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=1500&fit=crop&q=80',
  interior: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=1000&fit=crop&q=80',
  storyWide: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop&q=80',
  latteArt: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=700&fit=crop&q=80',
  community: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=1000&fit=crop&q=80',
  team: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop&q=80',
  coffeePour: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=700&fit=crop&q=80',
  beans: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=700&fit=crop&q=80',
  gallery: [
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop&q=80', alt: 'Coffee pour over bar' },
    { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&q=80', alt: 'Cozy cafe corner' },
    { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop&q=80', alt: 'Coffee beans and brew' },
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop&q=80', alt: 'Cafe interior with warm light' },
    { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop&q=80', alt: 'Latte art heart' },
    { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop&q=80', alt: 'Happy customers' },
    { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop&q=80', alt: 'Iced coffee on counter' },
    { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=600&fit=crop&q=80', alt: 'Pour over coffee' },
  ] as GalleryImage[],
  avatars: [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
  ],
};

export const SITE = {
  name: 'Diamond Cafe',
  tagline: 'your neighborhood coffee + happiness spot',
  description: 'Diamond Cafe is a small, family-owned cafe located in the Noe Valley neighborhood of San Francisco and serving the surrounding area. We are dedicated to providing our customers with a warm and welcoming atmosphere where they can enjoy delicious food and beverages.',
  fullStory: 'Diamond Cafe has been a beloved fixture of Noe Valley since 2010. What started as a dream between two siblings — a barista and a baker — has grown into the neighborhood gathering spot it is today. Every morning at 6 AM, the lights flicker on, the espresso machine hums to life, and the aroma of freshly roasted Big Mike Blend fills the block. We take pride in sourcing our beans from small, ethical farms and baking everything from scratch each morning. But what truly makes Diamond Cafe sparkle is our community — the regulars who wave from the door, the writers who claim "their corner table," the families who stop in after school drop-off. We are more than a cafe. We are a living room for Noe Valley.',
  hours: '7:00 am — 3:00 pm',
  days: 'Open Daily',
  address: '751 Diamond St, San Francisco, CA 94114',
  neighborhood: 'Noe Valley, San Francisco',
  email: 'diamondcafelunches@gmail.com',
  phone: '(415) 555-0183',
  heroTitle: 'Good Coffee,',
  heroTitleAlt: 'Happy People.',
  heroTag: 'Noe Valley since 2010',
  heroDesc: 'Your cozy neighborhood cafe serving great coffee, homemade pastries, and warm smiles every day.',
  founded: 2010,
};

export const HOURS: DayHours[] = [
  { day: 'Monday — Friday', hours: '7:00 am — 3:00 pm' },
  { day: 'Saturday', hours: '7:00 am — 3:00 pm' },
  { day: 'Sunday', hours: '7:00 am — 3:00 pm' },
];

export const TESTIMONIALS = [
  {
    name: 'Maya R.',
    text: 'The Big Mike Blend is my reason to get out of bed. A true neighborhood treasure.',
    image: IMAGES.avatars[0],
  },
  {
    name: 'James K.',
    text: 'Best avocado toast in the city. The vibe is unmatched — feels like a warm hug.',
    image: IMAGES.avatars[1],
  },
  {
    name: 'Sarah L.',
    text: 'We come here every Saturday morning. The staff remembers your name AND your order.',
    image: IMAGES.avatars[2],
  },
];

export const FEATURES = [
  {
    title: 'House-Roasted Beans',
    desc: 'Our Big Mike Blend is roasted in small batches for peak flavor.',
    icon: 'coffee',
  },
  {
    title: 'Baked Fresh Daily',
    desc: 'Everything from our pastry case is made from scratch each morning.',
    icon: 'cookie',
  },
  {
    title: 'Family-Run',
    desc: 'We treat every customer like part of the Diamond family.',
    icon: 'heart',
  },
  {
    title: 'Noe Valley Soul',
    desc: 'Proud to be your neighborhood spot since 2010.',
    icon: 'star',
  },
];
