import type { MenuItem, GalleryImage, DayHours } from './types';

export type TabType = 'home' | 'menu' | 'gallery' | 'about' | 'contact';

export const NAV_ITEMS: { label: string; tab: TabType }[] = [
  { label: 'Home', tab: 'home' },
  { label: 'Menu', tab: 'menu' },
  { label: 'Gallery', tab: 'gallery' },
  { label: 'About', tab: 'about' },
  { label: 'Contact', tab: 'contact' },
];

export const MENU_CATEGORIES = [
  'crepes', 'breakfast', 'bagels', 'sandwiches', 'scramblers', 'eggs', 'salads',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  { id: 'cr1', name: 'Basic Crepe', description: 'Cheddar cheese, grilled onions.', category: 'crepes', popular: true },
  { id: 'cr2', name: 'Salsa Crepe', description: 'Cheddar cheese, onions, black olives, tomatoes, avocado. Topped with salsa + sour cream.', category: 'crepes' },
  { id: 'cr3', name: 'Florentine Crepe', description: 'Cheddar cheese, onions, spinach, cottage cheese.', category: 'crepes' },
  { id: 'cr4', name: 'Marinara Crepe', description: 'Cheddar cheese, onions, spinach, mushrooms, cottage cheese. Topped with marinara.', category: 'crepes' },
  { id: 'cr5', name: 'Denver Crepe', description: 'Cheddar cheese, onions, eggs, ham, bell peppers.', category: 'crepes' },
  { id: 'cr6', name: 'Chicken Pesto Crepe', description: 'Cheddar cheese, onions, chicken breast, pesto, mushrooms.', category: 'crepes', popular: true },
  { id: 'cr7', name: 'Hawaiian Crepe', description: 'Cheddar cheese, onions, ham, pineapple, sweet & sour sauce.', category: 'crepes' },
  { id: 'cr8', name: 'Nutella Chocolate Crepe', description: 'Rich Nutella, warm chocolate sauce.', category: 'crepes', popular: true },
  { id: 'cr9', name: 'Strawberry Nutella Banana', description: 'Nutella, fresh strawberries, bananas, cinnamon, brown sugar.', category: 'crepes', popular: true },
  { id: 'cr10', name: 'Fruity Nutella', description: 'Strawberries, bananas, Nutella.', category: 'crepes' },
  { id: 'br1', name: 'Crunch Granola', description: 'Low-fat yogurt or milk. Add fruit for extra.', category: 'breakfast' },
  { id: 'br2', name: 'Oatmeal', description: 'Low-fat yogurt or milk. Add fruit for extra.', category: 'breakfast' },
  { id: 'br3', name: 'Croissant Sandwich', description: '2 scrambled eggs, ham, cheddar, onions. Served with house potatoes, fruit or salad.', category: 'breakfast', popular: true },
  { id: 'br4', name: 'Huevos Rancheros', description: '2 over-easy eggs, corn tortilla w/ cheese, black beans, rice, ranchero sauce, sour cream.', category: 'breakfast' },
  { id: 'br5', name: 'Breakfast Burrito', description: '2 scrambled eggs, green onions, bacon, cheddar, sour cream, black beans. Topped w/ ranchero.', category: 'breakfast', popular: true },
  { id: 'bg1', name: 'Bagel #1', description: 'Cream cheese.', category: 'bagels' },
  { id: 'bg2', name: 'Bagel #2', description: 'Cream cheese, lox, tomatoes, red onions.', category: 'bagels' },
  { id: 'bg3', name: 'Bagel #3', description: 'Cream cheese, lox, tomatoes, red onions, capers.', category: 'bagels', popular: true },
  { id: 'bg4', name: 'Bagel #4', description: 'Cream cheese, tomatoes, red onions.', category: 'bagels' },
  { id: 'bg5', name: 'Bagel #5', description: 'Hummus, tomatoes, cucumbers, red onions, capers.', category: 'bagels' },
  { id: 'bg6', name: 'Bagel #6', description: 'Scrambled egg, cheese, bacon or ham.', category: 'bagels' },
  { id: 'sw1', name: 'Turkey Sandwich', description: 'Turkey, Swiss, mayo, mustard, lettuce, tomatoes on whole wheat or sourdough.', category: 'sandwiches', popular: true },
  { id: 'sw2', name: 'Tuna Salad Sandwich', description: 'Homemade tuna salad, mayo, mustard, lettuce, tomatoes on whole wheat or sourdough.', category: 'sandwiches' },
  { id: 'sw3', name: 'Ham Sandwich', description: 'Ham, Swiss, mayo, mustard, lettuce, tomatoes on whole wheat or sourdough.', category: 'sandwiches' },
  { id: 'sw4', name: 'Grilled Chicken Breast', description: 'Chicken, mozzarella, pesto, lettuce, tomatoes on focaccia.', category: 'sandwiches' },
  { id: 'sc1', name: 'Smoked Salmon Scrambler', description: 'Scrambled eggs, green onions, cream cheese, tomatoes, lox.', category: 'scramblers', popular: true },
  { id: 'sc2', name: 'Denver Scrambler', description: 'Scrambled eggs, ham, onions, bell peppers, cheese.', category: 'scramblers' },
  { id: 'sc3', name: 'Veggie Scramble', description: 'Scrambled eggs, spinach, mushrooms, cheese.', category: 'scramblers' },
  { id: 'eg1', name: 'Morning Bird', description: '2 eggs any style, toast, choice of potatoes/fruit/salad. Add bacon/ham/sausage extra.', category: 'eggs' },
  { id: 'eg2', name: 'Triple Diamond', description: '2 eggs any style, 2 pancakes, bacon.', category: 'eggs', popular: true },
  { id: 'sa1', name: 'Garden Salad', description: 'Mixed greens, cucumbers, tomatoes, carrots. Sun-dried tomato vinaigrette. Small or large.', category: 'salads' },
  { id: 'sa2', name: 'Caesar Salad', description: 'Romaine, croutons, parmesan, Caesar dressing. Small or large. Add chicken/tuna extra.', category: 'salads', popular: true },
  { id: 'sa3', name: 'Oriental Chicken Salad', description: 'Romaine, carrots, peanuts, green beans, red cabbage, grilled chicken, Oriental dressing.', category: 'salads' },
  { id: 'sa4', name: 'Mexican Salad', description: 'Romaine, black beans, corn, tomatoes, red onions, shredded cheese, tortilla strips. Cilantro-lime.', category: 'salads' },
  { id: 'sa5', name: 'Greek Salad', description: 'Romaine, cucumbers, tomatoes, kalamata olives, feta, red onions, oregano. Lemon-olive oil.', category: 'salads' },
];

// ─── LOCAL ASSETS & LOGOS ───
export const LOGOS = {
  square: '/images/logo.png',
  wide: '/images/logo-wide.png',
} as const;

export const SOCIALS = {
  facebook: 'https://www.facebook.com/diamondand24/',
  instagram: 'https://www.instagram.com/diamond_cafe_on_noe/',
} as const;

export const ORDER_URL = 'https://www.toasttab.com/diamondcafe';

export const IMAGES = {
  hero: '/images/dc/IMG_1521.webp',
  interior: '/images/dc/IMG_1523.webp',
  food: '/images/dc/IMG_1607.webp',
  team: '/images/dc/IMG_1589.webp',
  coffee: '/images/dc/IMG_1545.webp',
  gallery: [
    { src: '/images/dc/IMG_1545.webp', thumb: '/images/dc/IMG_1545.webp', alt: 'Fresh pour-over coffee' },
    { src: '/images/dc/IMG_1489.webp', thumb: '/images/dc/IMG_1489.webp', alt: 'Sunny morning patio seating', span: 'tall' as const },
    { src: '/images/dc/IMG_1578.webp', thumb: '/images/dc/IMG_1578.webp', alt: 'Freshly baked morning goods', span: 'wide' as const },
    { src: '/images/dc/IMG_1589.webp', thumb: '/images/dc/IMG_1589.webp', alt: 'Kitchen and prep counter' },
    { src: '/images/dc/IMG_1607.webp', thumb: '/images/dc/IMG_1607.webp', alt: 'Hearty brunch plate', span: 'big' as const },
    { src: '/images/dc/IMG_1521.webp', thumb: '/images/dc/IMG_1521.webp', alt: 'Warm neighborhood cafe interior' },
    { src: '/images/dc/IMG_1523.webp', thumb: '/images/dc/IMG_1523.webp', alt: 'Cozy corner tables' },
  ] as GalleryImage[],
};

export const SITE = {
  name: 'Diamond Cafe',
  tagline: 'Noe Valley morning staple since 2014',
  description: "Independent neighborhood spot serving fresh espresso, scratch-made crepes, and warm breakfast plates on Diamond Street. We open early every morning with good coffee, friendly counter service, and a relaxed room to sit down or grab something to go.",
  hours: '7:00 am — 3:00 pm',
  days: 'Open Daily',
  address: '751 Diamond Street, San Francisco, CA 94114',
  neighborhood: 'Noe Valley, San Francisco',
  email: 'diamondcafelunches@gmail.com',
  phone: '(415) 655-3674',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5!2d-122.434!3d37.759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f7f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s751+Diamond+St%2C+San+Francisco%2C+CA+94114!5e0!3m2!1sen!2sus!4v1',
  founded: 2014,
};

export const HOURS: DayHours[] = [
  { day: 'Monday — Friday', hours: '7:00 am — 3:00 pm' },
  { day: 'Saturday', hours: '7:00 am — 3:00 pm' },
  { day: 'Sunday', hours: '7:00 am — 3:00 pm' },
];

export const FEATURES = [
  {
    title: 'House-Roasted Coffee',
    desc: 'Our Big Mike Blend is roasted in small batches for bold, smooth flavor in every cup.',
    icon: 'coffee',
  },
  {
    title: 'Made Fresh Daily',
    desc: 'Everything from our pastry case is scratch-made each morning. Always fresh, always good.',
    icon: 'pastry',
  },
  {
    title: 'Family-Run Since 2014',
    desc: 'We treat every customer like part of the Diamond family.',
    icon: 'heart',
  },
  {
    title: 'Noe Valley Soul',
    desc: 'Proud to be your neighborhood living room for over a decade.',
    icon: 'map',
  },
];
