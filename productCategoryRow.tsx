import React, { Component } from 'react';
import { ProductCategoryRowProps } from './types';

export default class ProductCategoryRow extends Component<ProductCategoryRowProps, {}>  {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    );
  }
}