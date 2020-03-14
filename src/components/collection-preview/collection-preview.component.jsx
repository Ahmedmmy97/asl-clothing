import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((itm, idx) => idx < 4)
        .map(({id,...other}) => (
          <CollectionItem key={id} {...other} />

        ))}
    </div>
  </div>
);

export default CollectionPreview;
