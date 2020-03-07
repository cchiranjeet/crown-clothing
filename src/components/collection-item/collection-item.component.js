import React from "react";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import CustonButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item" key={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustonButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustonButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
