import React from 'react';
import { FilterState } from '../types/perfume';
import { fragranceFamilies, brands, concentrations, occasions, seasons } from '../data/perfumes';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="h-5 w-5 text-purple-600" />
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="500"
              value={filters.priceRange[0]}
              onChange={(e) => updateFilter('priceRange', [Number(e.target.value), filters.priceRange[1]])}
              className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="500"
              value={filters.priceRange[1]}
              onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], Number(e.target.value)])}
              className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Fragrance Family */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Fragrance Family</label>
          <select
            value={filters.fragranceFamily}
            onChange={(e) => updateFilter('fragranceFamily', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Families</option>
            {fragranceFamilies.map((family) => (
              <option key={family} value={family}>{family}</option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Brand</label>
          <select
            value={filters.brand}
            onChange={(e) => updateFilter('brand', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Gender</label>
          <div className="space-y-2">
            {['male', 'female', 'unisex'].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={filters.gender === gender}
                  onChange={(e) => updateFilter('gender', e.target.value)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">{gender}</span>
              </label>
            ))}
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value=""
                checked={filters.gender === ''}
                onChange={(e) => updateFilter('gender', e.target.value)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">All</span>
            </label>
          </div>
        </div>

        {/* Concentration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Concentration</label>
          <select
            value={filters.concentration}
            onChange={(e) => updateFilter('concentration', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Concentrations</option>
            {concentrations.map((concentration) => (
              <option key={concentration} value={concentration}>{concentration}</option>
            ))}
          </select>
        </div>

        {/* Occasion */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Occasion</label>
          <select
            value={filters.occasion}
            onChange={(e) => updateFilter('occasion', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Occasions</option>
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>{occasion}</option>
            ))}
          </select>
        </div>

        {/* Season */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Season</label>
          <select
            value={filters.season}
            onChange={(e) => updateFilter('season', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Seasons</option>
            {seasons.map((season) => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={() => onFilterChange({
          searchQuery: '',
          fragranceFamily: '',
          brand: '',
          priceRange: [0, 500],
          gender: '',
          occasion: '',
          season: '',
          concentration: ''
        })}
        className="w-full mt-6 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );
};