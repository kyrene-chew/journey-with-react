import React from 'react';
import PropTypes from 'prop-types';

import SearchProduct from './SearchProduct';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded" >
        <a className="navbar-brand" href="#">
          Speakout
        </a>
        <SearchProduct
          onArtistChange={this.props.onArtistChange}
          key="search-product" />
      </nav>
    );
  }
}

Navigation.propTypes = {
  onArtistChange: PropTypes.func.isRequired
};