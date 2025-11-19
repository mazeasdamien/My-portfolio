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
  icon?: string;
  authors?: string;
  mainProject?: boolean;
}

export type FilterType = 'all' | 'cv' | 'publication' | 'teaching' | 'tutorial' | 'portfolio';
