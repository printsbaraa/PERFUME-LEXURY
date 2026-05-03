import React, { useState } from 'react';
import { perfumes as initialPerfumes } from '../perfumeData';
import { Search, SlidersHorizontal, Star } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Combined Filtering and Sorting
  const getFilteredAndSortedPerfumes = () => {
    // 1. Filter
    let result = initialPerfumes.filter(perfume => {
      const searchLower = searchTerm.toLowerCase();
      return (
        perfume.name.toLowerCase().includes(searchLower) ||
        perfume.brand.toLowerCase().includes(searchLower)
      );
    });

    // 2. Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  };

  const displayedPerfumes = getFilteredAndSortedPerfumes();

  return (
    <div className="home-page">
      <div className="controls-container">
        <div className="search-bar">
          <Search size={20} color="#888" />
          <input 
            type="text" 
            placeholder="Search by name or brand..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="sort-dropdown">
          <SlidersHorizontal size={20} color="#D4AF37" />
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="perfume-grid">
        {displayedPerfumes.length > 0 ? (
          displayedPerfumes.map(perfume => (
            <div key={perfume.id} className="perfume-card">
              <div className="perfume-image-container">
                <img src={perfume.imageURL} alt={perfume.name} className="perfume-image" />
              </div>
              <div className="perfume-details">
                <span className="perfume-brand">{perfume.brand}</span>
                <h3 className="perfume-name">{perfume.name}</h3>
                <span className="perfume-family">{perfume.scentFamily}</span>
                
                <div className="perfume-footer">
                  <span className="perfume-price">${perfume.price.toFixed(2)}</span>
                  <div className="perfume-rating">
                    <span>{perfume.rating}</span>
                    <Star size={16} fill="#D4AF37" color="#D4AF37" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '3rem', color: '#888' }}>
            <h2>No perfumes found.</h2>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
