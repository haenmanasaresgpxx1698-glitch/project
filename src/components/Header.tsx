import React from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="bg-white shadow-lg border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PerfumeFinder
            </h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search perfumes, brands, or notes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-purple-50 transition-colors duration-200">
              <Heart className="h-6 w-6 text-gray-600 hover:text-purple-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-purple-50 transition-colors duration-200">
              <ShoppingBag className="h-6 w-6 text-gray-600 hover:text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};