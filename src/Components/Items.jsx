import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

const Items = ({handleItemPrepare}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="px-4 lg:px-32 w-2/3 grid grid-cols-2">
      {items.map((item) => (
        <Item
          key={item.recipe_id}
          item={item}
          handleItemPrepare={handleItemPrepare}
        ></Item>
      ))}
    </div>
  );
};
Items.propTypes = {
  
  handleItemPrepare: PropTypes.func,
};
export default Items;
