import React from 'react';
import PropTypes from 'prop-types';

import ProductList from './ProductList';

export default class Artist extends React.Component {
  render() {
    let title;
    if (this.props.selectedArtist === '*') {
      title = 'Designs by all artists';
    } else {
      title = `Designs by ${this.props.selectedArtist}`;
    }

    return (
      <div className="product-container container-fluid text-center">
        <h1>{title}</h1>

        <div className="row justify-content-center">
          <ProductList selectedArtist={this.props.selectedArtist} products={this.props.products} />
        </div>
      </div>
    );
  }
}

Artist.propTypes = {
  selectedArtist: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};