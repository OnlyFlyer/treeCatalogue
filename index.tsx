import React from 'react';
import { render } from 'react-dom';
import FilterableProductTable from './filterableProductTable';
import { Product } from './types';
import './style.scss';

const App = () => {
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

const PRODUCTS: Product[] = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

render(<App />, document.getElementById('root'));

