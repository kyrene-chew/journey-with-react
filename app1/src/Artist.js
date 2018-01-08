import React from 'react';
import PropTypes from 'prop-types';

import ProductList from './ProductList';

export default class Artist extends React.Component {
  render() {
    return (
      <div className="product-container">
        <h1>Designs by artist {this.props.artist}</h1>

        <div className="row ">
          <ProductList artist={this.props.artist} products={this.props.products} />
        </div>
      </div>
    );
  }
}

Artist.propTypes = {
  artist: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};