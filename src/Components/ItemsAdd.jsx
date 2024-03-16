import PropTypes from 'prop-types'
import ItemAdd from './ItemAdd';
import CurrentlyCookings from './CurrentlyCookings';
import { useState } from 'react';



const ItemsAdd = ({bookmarks}) => {

  const[carts,setCarts]=useState([]);

  const handleAddToCart = blog =>{
    console.log(blog);
    const newCarts = [...carts,blog]
    setCarts(newCarts)
    // console.log(carts);
  }

  
  // const [cart,setCart]=useState([]);
  // const handleCart =(p)=>{
  
  //   setCart([p]);
  // }
  // console.log(cart);

  return (
    <div className="w-full lg:w-2/5 border min-h-fit h-full border-blue-600">
      <h1 className="text-center text-2xl font-semibold text-[#282828] ">
        Want to Cook : {bookmarks.length}
      </h1>

      <div className="divider mt-4 mb-6"></div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="flex justify-evenly">
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {bookmarks.map((bookmark) => (
        <ItemAdd
          key={bookmark.id}
          handleAddToCart={handleAddToCart}
          bookmark={bookmark}
        ></ItemAdd>
      ))}

      <CurrentlyCookings carts={carts}></CurrentlyCookings>
    </div>
  );
};
ItemsAdd.propTypes = {
  bookmarks: PropTypes.array
};
export default ItemsAdd;