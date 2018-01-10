import React from 'react';
import PropTypes from 'prop-types';

import SearchProduct from './SearchProduct';

export default class Navigation extends React.Component {
  render() {
    return [
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand">
          Speakout
        </a>

        <i className="fas fa-shopping-cart"></i>
      </nav>,

      <SearchProduct
        onArtistChange={this.props.onArtistChange}
        key="search-product" />
    ];
  }
}

Navigation.propTypes = {
  onArtistChange: PropTypes.func.isRequired
};