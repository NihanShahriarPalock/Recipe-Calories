
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Cooking from "./Cooking";
import SingleCook from "./SingleCook"


const CurrentlyCookings = ({carts}) => {
    

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])



    // console.log(carts);
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
          <tbody></tbody>
        </table>
      </div>

      {/* <div className="mt-6 overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="flex justify-evenly">
              <th>name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div> */}

      {/* {blogs.map((blog) => (
        <SingleCook key={blog.recipe_id} blog={blog}></SingleCook>
      ))} */}

      {carts.map((cart) => (
        <SingleCook key={cart.recipe_id} cart={cart}></SingleCook>
      ))}
    </div>
  );
};
CurrentlyCookings.propTypes = {
  bookmarks: PropTypes.array,
  
};
export default CurrentlyCookings;