export type TabType = 'home' | 'menu' | 'gallery' | 'about' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  popular?: boolean;
}

export interface GalleryImage {
  src: string;
  thumb: string;
  alt: string;
  span?: 'wide' | 'tall' | 'big';
}

export interface DayHours {
  day: string;
  hours: string;
}
