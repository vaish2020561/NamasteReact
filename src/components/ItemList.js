import { CDN_URL } from "../Utils/contants";
import {addItem} from "../Utils/cartSlice";
import { useDispatch} from "react-redux";

const ItemList = ({ items }) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action 
    dispatch(addItem(item));

  };
  console.log(items);
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="items" key={item.card.info.id}>
          <div className="items-content">
            <div className="items-details">
              <div className="items-info">
                <span className="item-name">{item.card.info.name}</span>
                <span className="item-price">
                  - ₹ {item.card.info.price/100}
                </span>
                <div className="item-decription">
                  <p>{item.card.info.description}</p>
                </div>
              </div>

              <div className="items-image">
                <img src={CDN_URL + item.card.info.imageId} />
                <button className="add-button" onClick={() => handleAddItem(item)}>Add +</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
