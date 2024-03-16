import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="px-4 lg:px-32 w-2/3 grid grid-cols-2">
      {items.map((item) => (
        <Item key={item.recipe_id} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
