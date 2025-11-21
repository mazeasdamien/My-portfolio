export interface PortfolioItem {
  category: 'publication' | 'teaching' | 'employment' | 'degree' | 'certification' | 'portfolio' | 'tutorial' | 'tools';
  date: string;
  displayDate: string;
  title: string;
  subtitle?: string;
  description?: string;
  period?: string;
  url?: string;
  urls?: string[];
  youtubeId?: string;
  logo?: string;
  thumbnail?: string;
  hoverThumbnail?: string;
  icon?: string;
  authors?: string;
  mainProject?: boolean;
}

export type FilterType = 'all' | 'cv' | 'publication' | 'teaching' | 'tutorial' | 'portfolio';

export interface AppIconData {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  hoverImageUrl: string;
  iconLabel: string;
  link: string;
}
