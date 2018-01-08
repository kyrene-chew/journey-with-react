import React from 'react';
import PropTypes from 'prop-types';

export default class SearchProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedArtist: this.props.selectedArtist
    };
  }

  render() {
    const selectedArtist = this.state.selectedArtist;

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Select Artist</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01" onChange={this.props.onArtistChange}>
          <option value="*">Show All</option>

          <option value="Jane Doe">Jane Doe</option>

          <option value="John Doe">John Doe</option>
        </select>
      </div>
    );
  }
}

SearchProduct.propTypes = {
  onArtistChange: PropTypes.func.isRequired,
  selectedArtist: PropTypes.string
};