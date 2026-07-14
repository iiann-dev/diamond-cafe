export type TabType = 'home' | 'menu' | 'story' | 'gallery' | 'events' | 'contact';

export interface NavItem {
  label: string;
  tab: TabType;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'food' | 'pastry';
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
}
