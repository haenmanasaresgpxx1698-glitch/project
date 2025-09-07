import React, { useState } from 'react';
import { Perfume } from '../types/perfume';
import { Star, Heart, ShoppingCart, Clock, Zap } from 'lucide-react';

interface PerfumeCardProps {
  perfume: Perfume;
}

export const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {Array(fullStars).fill(null).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
        )}
        {Array(emptyStars).fill(null).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-w-4 aspect-h-3 bg-gray-200">
          <img
            src={perfume.image}
            alt={perfume.name}
            className={`w-full h-48 object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
        >
          <Heart
            className={`h-5 w-5 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
        <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {perfume.concentration}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{perfume.name}</h3>
            <p className="text-sm text-gray-600 font-medium">{perfume.brand}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">${perfume.price}</div>
            <div className="text-sm text-gray-500">{perfume.size}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          {renderStars(perfume.rating)}
          <span className="text-sm text-gray-600">({perfume.reviews})</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{perfume.longevity}h longevity</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4" />
              <span>{perfume.sillage}/10 sillage</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Family:</span> {perfume.fragrance_family}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm">
            <div className="mb-1">
              <span className="font-medium text-gray-700">Top:</span>{' '}
              <span className="text-gray-600">{perfume.top_notes.join(', ')}</span>
            </div>
            <div className="mb-1">
              <span className="font-medium text-gray-700">Heart:</span>{' '}
              <span className="text-gray-600">{perfume.middle_notes.join(', ')}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Base:</span>{' '}
              <span className="text-gray-600">{perfume.base_notes.join(', ')}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {perfume.description}
        </p>

        <div className="flex gap-2 mb-4">
          {perfume.occasion.slice(0, 2).map((occasion) => (
            <span
              key={occasion}
              className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full"
            >
              {occasion}
            </span>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium flex items-center justify-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};