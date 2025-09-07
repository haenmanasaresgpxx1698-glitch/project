export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  fragrance_family: string;
  top_notes: string[];
  middle_notes: string[];
  base_notes: string[];
  description: string;
  rating: number;
  reviews: number;
  gender: 'male' | 'female' | 'unisex';
  concentration: 'EDT' | 'EDP' | 'Parfum' | 'EDC';
  size: string;
  longevity: number;
  sillage: number;
  occasion: string[];
  season: string[];
}

export interface FilterState {
  searchQuery: string;
  fragranceFamily: string;
  brand: string;
  priceRange: [number, number];
  gender: string;
  occasion: string;
  season: string;
  concentration: string;
}