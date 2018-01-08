import React from 'react';
import PropTypes from 'prop-types';



export default class Product extends React.Component {
  render() {
    let artist;
    if (this.props.artist) {
      artist = ` by ${this.props.artist}`;
    }

    const buyNow = `${document.location.origin}/buynow?id=${this.props.id}`;

    return (
      <div className="card text-center col-lg-4" style={{ width: 18 + 'rem' }}>
        <a href={this.props.url}>
          <img className="card-img-top" alt={this.props.name} src={this.props.image} />
        </a>
        <div className="card-body">
          <p className="card-title">
            <a href={this.props.url}>{this.props.name}</a>
            {artist}
          </p>
        </div>
        <div className="card-footer">
          <p className="card-text">{this.props.price}</p>
          <a href={buyNow} className="btn btn-primary">Buy Now</a>
        </div>
      </div>
    );
  }
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  artist: PropTypes.string
};