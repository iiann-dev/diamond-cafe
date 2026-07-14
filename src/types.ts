export type TabType = 'home' | 'menu' | 'gallery' | 'about' | 'contact';

export interface NavItem {
  label: string;
  path: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  popular?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'big';
}

export interface DayHours {
  day: string;
  hours: string;
}
