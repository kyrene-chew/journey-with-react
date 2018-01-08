import React from 'react';
import PropTypes from 'prop-types';

import Artist from './Artist';

export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: props.artist
    };
  }

  render() {
    return (
      <Artist artist={this.state.artist} products={this.props.products} />
    );
  }
}

Application.defaultProps = {
  artist: 'John Doe'
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