import React, { ChangeEvent } from 'react';
import { SearchBarProps } from './types';

const SearchBar = (props: Readonly<SearchBarProps>) => {
  const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onInStockChange(e.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;