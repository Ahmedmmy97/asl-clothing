import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="item">
    <img className="image" alt={id} src={imageUrl} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`${price} TL`}</span>
    </div>
  </div>
);

export default CollectionItem;
