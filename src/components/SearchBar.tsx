import React, { useState } from 'react';

interface Props {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Wpisz miasto..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Szukaj</button>
    </form>
  );
};

export default SearchBar;
