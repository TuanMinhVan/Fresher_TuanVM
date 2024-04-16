import { useState } from 'react';

import { Row } from 'react-bootstrap';

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
}
/* This code defines a functional component called `SearchBar` in TypeScript with React. Here's a
breakdown of what the code is doing: */

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (onSearch) onSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    if (onSearch) onSearch("");
  };

  return (
    <Row className="mb-2 mt-2">
      <form onSubmit={handleSubmit} className="search-product">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button type="button" onClick={handleClearSearch}>
              <i className="fa fa-times"></i>
            </button>
          )}

          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </Row>
  );
};
export default SearchBar;
