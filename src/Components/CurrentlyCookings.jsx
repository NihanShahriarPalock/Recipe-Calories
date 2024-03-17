
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SingleCook from "./SingleCook"

const CurrentlyCookings = ({ carts, prepareTime, calories }) => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2 className="mt-8 mb-4 text-center text-2xl font-semibold text-[#282828]">
        Currently Cooking : {carts.length}
      </h2>
      <hr />

      <div className="mt-6 overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="flex justify-evenly">
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
        </table>
      </div>

      {carts.map((cart) => (
        <SingleCook key={cart.recipe_id} cart={cart}></SingleCook>
      ))}

      <div className="mt-6 overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="flex justify-evenly">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>Total Time = {prepareTime} minutes</td>
              <td>Total Calories = {calories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
CurrentlyCookings.propTypes = {
  bookmarks: PropTypes.array,
  
};
export default CurrentlyCookings;