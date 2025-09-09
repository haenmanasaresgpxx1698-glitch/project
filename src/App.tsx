import React from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { PerfumeGrid } from './components/PerfumeGrid';
import { usePerfumeFilters } from './hooks/usePerfumeFilters';
import { perfumes } from './data/perfumes';
import { Sparkles, Award, Shield, Truck } from 'lucide-react';

function App() {
  const { filters, setFilters, filteredPerfumes } = usePerfumeFilters(perfumes);

  const updateSearchQuery = (query: string) => {
    setFilters({ ...filters, searchQuery: query });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header searchQuery={filters.searchQuery} onSearchChange={updateSearchQuery} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome To MyWebsite
              <span className="block bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                PerfumePeony
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Explore our curated collection of luxury perfumes and find the scent that defines you
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Award className="h-8 w-8 text-yellow-300" />
                <span className="text-lg font-medium">Premium Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-yellow-300" />
                <span className="text-lg font-medium">Authentic Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-8 w-8 text-yellow-300" />
                <span className="text-lg font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-8 w-8 text-yellow-300" />
                <span className="text-lg font-medium">Expert Curation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <Filters filters={filters} onFilterChange={setFilters} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {filteredPerfumes.length === perfumes.length 
                  ? 'All Perfumes' 
                  : `${filteredPerfumes.length} Results`}
              </h2>
              <div className="text-sm text-gray-300">
                {filteredPerfumes.length} of {perfumes.length} perfumes
              </div>
            </div>
            
            <PerfumeGrid perfumes={filteredPerfumes} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                PerfumePeony
              </h3>
              <p className="text-gray-300">
                Your trusted destination for authentic luxury fragrances.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Niche Brands</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 <span className="text-pink-400">PerfumePeony</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;