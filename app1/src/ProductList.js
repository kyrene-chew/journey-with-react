import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

export default class ProductList extends React.Component {
  render() {
    // gets all designs by artist
    const productList = this.props.products.map(product => {
      if (product.artist === this.props.artist) {

        const url = encodeURIComponent(`${document.location.origin}/${this.props.artist}/${product.name}`);

        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            url={url} />
        );
      } else {
        return null;
      }

    });

    return (productList);
  }
}

ProductList.propTypes = {
  artist: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired
};