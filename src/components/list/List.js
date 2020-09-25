import React from 'react';

const List = ({ name, price, quantity}) => (
  <div>
    <ul>
      <li>{name}- price:${price} quantity:{quantity}</li>
    </ul>
  </div>
);

export default List;