import PropTypes from 'prop-types'
import ItemAdd from './ItemAdd';
import CurrentlyCookings from './CurrentlyCookings';
import { useState } from 'react';


const ItemsAdd = ({bookmarks}) => {

  const[carts,setCarts]=useState([]);
  const handleAddToCart = blog =>{
    const newCarts = [...carts,blog]
    setCarts(newCarts)
  }

  // Prepare Time State 
  const [prepareTime, setPrepareTime] = useState(0);
  const handlePrepareTime = time =>{
    setPrepareTime(prepareTime+time)
   
  }

const [calories, setCalories] = useState(0);
const handleCalories = calory =>{
  setCalories(calories+calory)
}



  return (
    <div className="w-full lg:w-2/5 border min-h-fit h-full rounded-2xl  py-6">
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
          handlePrepareTime={handlePrepareTime}
          handleCalories={handleCalories}
        ></ItemAdd>
      ))}

      <CurrentlyCookings
        prepareTime={prepareTime}
        calories={calories}
        carts={carts}
      ></CurrentlyCookings>
    </div>
  );
};
ItemsAdd.propTypes = {
  bookmarks: PropTypes.array
};
export default ItemsAdd;