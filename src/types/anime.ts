export interface AnimeItem {
  id: number;
  title: string;
  imageUrl: string;
  year: number;
  quality: 'HD' | 'SD' | 'CAM';
  genre: string;
  rating: '12+' | '16+' | '18+';
  language: 'Japanese' | 'Korean' | 'English';
  popularity: number;
  summary: string;
  episodes: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface ActiveFilters {
  quality: string;
  genre: string;
  rating: string;
  year: string;
  language: string;
  orderBy: string;
}
