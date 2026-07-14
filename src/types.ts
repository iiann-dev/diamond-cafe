export type TabType = 'home' | 'menu' | 'story' | 'gallery' | 'contact';

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

export interface DayHours {
  day: string;
  hours: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: boolean;
}
