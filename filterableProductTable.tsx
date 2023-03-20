import React, { Component } from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';
import { FilterableProductTableProps, FilterableProductTableState } from './types';

export default class FilterableProductTable extends Component<FilterableProductTableProps, FilterableProductTableState> {
  constructor(props: Readonly<FilterableProductTableProps>) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleFilterTextChange = (filterText: string) => {
    this.setState({
      filterText: filterText
    });
  };

  handleInStockChange = (inStockOnly: boolean) => {
    this.setState({
      inStockOnly: inStockOnly
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
