import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// components
import Application from './Application';

const PRODUCTS = [
  {
    id: 1,
    artist: "John Doe",
    name: "Faith, Hope, Love",
    price: "$20",
    image: [
      "https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/1018252332/views/1,width=300,height=300,backgroundColor=E8E8E8,version=1497260021/faith-hope-love-tshirt.jpg",
      "https://www.dhresource.com/0x0s/f2-albu-g5-M00-29-C5-rBVaJFj0jxCAfnzVAAHQLOcmBV0353.jpg/faith-hope-love-t-shirt-symbol-heart-cross.jpg"
    ]
  },
  {
    id: 2,
    artist: "John Doe",
    name: "Be Strong and Courageous",
    price: "$30",
    image: [
      "http://shoprisen.com/images/XL-be-strong-and-courageous-risen-christian-t-shirt.png"
    ]
  },
  {
    id: 3,
    artist: "John Doe",
    name: "God is Love",
    price: "$28",
    image: [
      "https://res.cloudinary.com/teepublic/image/private/s--1PNM9_NY--/t_Preview/b_rgb:191919,c_limit,f_auto,h_313,q_90,w_313/v1504128619/production/designs/1861629_1"
    ]
  },
  {
    id: 4,
    artist: "Jane Doe",
    name: "Be Still",
    price: "$26",
    image: [
      "https://i.pinimg.com/originals/bd/06/eb/bd06ebfd49e6a9724fb2ba32ff460957.jpg"
    ]
  },
  {
    id: 5,
    artist: "John Doe",
    name: "Power In Jesus Name",
    price: "$28",
    image: [
      "https://img1.etsystatic.com/115/0/10365179/il_fullxfull.1067782669_bbo5.jpg"
    ]
  }
];

ReactDOM.render(
  <Application products={PRODUCTS} />,
  document.getElementById('app')
);