import { useState, useMemo } from 'react';
import { Perfume, FilterState } from '../types/perfume';

export const usePerfumeFilters = (perfumes: Perfume[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    fragranceFamily: '',
    brand: '',
    priceRange: [0, 500],
    gender: '',
    occasion: '',
    season: '',
    concentration: ''
  });

  const filteredPerfumes = useMemo(() => {
    return perfumes.filter((perfume) => {
      // Search query filter
      if (filters.searchQuery) {
        const searchTerm = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          perfume.name.toLowerCase().includes(searchTerm) ||
          perfume.brand.toLowerCase().includes(searchTerm) ||
          perfume.description.toLowerCase().includes(searchTerm) ||
          perfume.top_notes.some(note => note.toLowerCase().includes(searchTerm)) ||
          perfume.middle_notes.some(note => note.toLowerCase().includes(searchTerm)) ||
          perfume.base_notes.some(note => note.toLowerCase().includes(searchTerm)) ||
          perfume.fragrance_family.toLowerCase().includes(searchTerm);
        
        if (!matchesSearch) return false;
      }

      // Price range filter
      if (perfume.price < filters.priceRange[0] || perfume.price > filters.priceRange[1]) {
        return false;
      }

      // Fragrance family filter
      if (filters.fragranceFamily && perfume.fragrance_family !== filters.fragranceFamily) {
        return false;
      }

      // Brand filter
      if (filters.brand && perfume.brand !== filters.brand) {
        return false;
      }

      // Gender filter
      if (filters.gender && perfume.gender !== filters.gender) {
        return false;
      }

      // Concentration filter
      if (filters.concentration && perfume.concentration !== filters.concentration) {
        return false;
      }

      // Occasion filter
      if (filters.occasion && !perfume.occasion.includes(filters.occasion)) {
        return false;
      }

      // Season filter
      if (filters.season && !perfume.season.includes(filters.season)) {
        return false;
      }

      return true;
    });
  }, [perfumes, filters]);

  return {
    filters,
    setFilters,
    filteredPerfumes
  };
};