import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

export default class ProductList extends React.Component {
  getProductListByArtist(artist) {
    let productList = [];

    // show all design
    if (artist === '*') {
      productList = this.props.products.map(product => {
        const url = encodeURIComponent(`${document.location.origin}/${this.props.selectedArtist}/${product.name}`);
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            url={url} />
        );
      });
    } else { // gets all designs by artist
      productList = this.props.products.map(product => {
        if (product.artist === this.props.selectedArtist) {
          const url = encodeURIComponent(`${document.location.origin}/${this.props.selectedArtist}/${product.name}`);

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
    }

    return productList;
  }

  render() {
    // get product list
    const productList = this.getProductListByArtist(this.props.selectedArtist);
    return (productList);
  }
}

ProductList.propTypes = {
  selectedArtist: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired
};