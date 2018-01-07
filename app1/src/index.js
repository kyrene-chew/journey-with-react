import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';

function Product(props) {
  let artist = '';
  if (props.artist) {
    artist = ` by ${props.artist}`;
  }

  return (
    <div className="card text-center col-lg-4" style={{ width: 18 + 'rem' }}>
      <img className="card-img-top" alt={props.name} src={props.image} />
      <div className="card-body">
        <p className="card-title">{props.name}{artist}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">{props.price}</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  artist: PropTypes.string
};

function ProductList(props) {
  // gets all designs by artist
  const productsArr = [
    {
      key: "d0001",
      artist: "John Doe",
      name: "Faith, Hope, Love",
      price: "$20",
      image: "https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/1018252332/views/1,width=300,height=300,backgroundColor=E8E8E8,version=1497260021/faith-hope-love-tshirt.jpg"
    },
    {
      key: "d0002",
      artist: "John Doe",
      name: "Be Strong and Courageous",
      price: "$30",
      image: "http://shoprisen.com/images/XL-be-strong-and-courageous-risen-christian-t-shirt.png"
    },
    {
      key: "d0003",
      artist: "John Doe",
      name: "God is Love",
      price: "$28",
      image: "https://res.cloudinary.com/teepublic/image/private/s--1PNM9_NY--/t_Preview/b_rgb:191919,c_limit,f_auto,h_313,q_90,w_313/v1504128619/production/designs/1861629_1"
    },
    {
      key: "d0004",
      artist: "Jane Doe",
      name: "Be Still",
      price: "$26",
      image: "https://i.pinimg.com/originals/bd/06/eb/bd06ebfd49e6a9724fb2ba32ff460957.jpg"
    },
    {
      key: "d0005",
      artist: "John Doe",
      name: "Power In Jesus Name",
      price: "$28",
      image: "https://img1.etsystatic.com/115/0/10365179/il_fullxfull.1067782669_bbo5.jpg"
    }
  ];

  const productList = productsArr.map(product => {
    if (product.artist === props.artist) {
      return (
        <Product
          key={product.key}
          name={product.name}
          price={product.price}
          image={product.image} />
      );
    }
  });

  return (productList);
}

ProductList.propTypes = {
  artist: PropTypes.string.isRequired
};

function Artist(props) {
  return (
    <div className="product-container">
      <h1>Designs by artist {props.artist}</h1>

      <div className="row ">
        <ProductList artist={props.artist} />
      </div>
    </div>
  );
}

Artist.propTypes = {
  artist: PropTypes.string.isRequired
};

function Application(props) {
  return (
    <Artist artist="John Doe" />
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('app')
);