import React from 'react';
import { Perfume } from '../types/perfume';
import { PerfumeCard } from './PerfumeCard';
import { Package } from 'lucide-react';

interface PerfumeGridProps {
  perfumes: Perfume[];
  isLoading?: boolean;
}

export const PerfumeGrid: React.FC<PerfumeGridProps> = ({ perfumes, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded mb-4 w-2/3"></div>
              <div className="h-3 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-10 bg-gray-300 rounded mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (perfumes.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
        <Package className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No perfumes found</h3>
        <p className="text-gray-500 max-w-md">
          Try adjusting your filters or search terms to find the perfect fragrance for you.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {perfumes.map((perfume) => (
        <PerfumeCard key={perfume.id} perfume={perfume} />
      ))}
    </div>
  );
};