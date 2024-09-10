import React from 'react';
import './Searchbar.css';

const SearchBar = ({ onPriceChange, onMinPriceChange, onLocationChange, priceFilter, minPriceFilter, locationFilter }) => {
    return (
        <div className="search-bar-container">
            <input
                type="number"
                placeholder="Max Price"
                value={priceFilter}
                onChange={(e) => onPriceChange(e.target.value)}
                className="search-input"
            />
            <input
                type="number"
                placeholder="Min Price"
                value={minPriceFilter}
                onChange={(e) => onMinPriceChange(e.target.value)}
                className="search-input"
            />
            <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => onLocationChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
