import React from 'react';

const List = ({listItem, name, price, quantity}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { listItem.map( listItem => <li key={listItem.id}>{listItem.neme, listItem.price, listItem.quantity}</li>) }
    </ul>
  </div>
);

export default List;