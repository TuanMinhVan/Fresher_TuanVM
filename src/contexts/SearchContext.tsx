import React, { createContext, useState } from 'react';

import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';
import { fetchProducts, searchProducts } from '../redux/thunks/productThunks';

interface SearchContextProps {
  searchTerm: string;
  handleSearchChange: (newSearchTerm: string) => void;
}

const SearchContext = createContext<SearchContextProps>({
  searchTerm: '',
  handleSearchChange: () => {},
});

export default SearchContext;
/**
 * The SearchProvider component in TypeScript React manages search functionality by updating the search
 * term and dispatching actions based on the length of the search term.
 * @param  - The code you provided is a React functional component called `SearchProvider`. It uses the
 * `useDispatch` hook from Redux to get the dispatch function and the `useState` hook to manage the
 * `searchTerm` state.
 * @returns The SearchProvider component is being returned, which is a functional component that
 * provides a search term and a function to handle search term changes to its children components
 * through the SearchContext.Provider.
 */

export const SearchProvider: React.FC<any> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length > 0) {
      dispatch(searchProducts(newSearchTerm));
    } else {
      dispatch(fetchProducts());
    }
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearchChange }}>
      {children}
    </SearchContext.Provider>
  );
};
