import React from 'react';
import PropTypes from 'prop-types';

import Artist from './Artist';
import SearchProduct from './SearchProduct';

export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedArtist: props.artist
    };
  }

  onArtistChange = (e) => {
    // do not re-render if no change to state
    if (this.state.artist !== e.target.value) {
      this.setState({
        selectedArtist: e.target.value
      });
    }
  }

  render() {
    return [
      <SearchProduct
        onArtistChange={this.onArtistChange}
        selectedArtist={this.state.selectedArtist}
        key="search-product" />,

      <Artist
        selectedArtist={this.state.selectedArtist}
        products={this.props.products}
        key="artist" />
    ];
  }
}

Application.defaultProps = {
  artist: '*'
};

Application.propTypes = {
  artist: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artist: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};