import React from 'react';
import PropTypes from 'prop-types';

export default class SearchProduct extends React.Component {
  render() {
    return (
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Select Artist</label>
        </div>
        <select className="form-control custom-select" id="inputGroupSelect01" onChange={this.props.onArtistChange}>
          <option value="*">Show All</option>

          <option value="Jane Doe">Jane Doe</option>

          <option value="John Doe">John Doe</option>
        </select>
      </div>
    );
  }
}

SearchProduct.propTypes = {
  onArtistChange: PropTypes.func.isRequired
};