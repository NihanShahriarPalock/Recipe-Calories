
import PropTypes from "prop-types";



const CurrentlyCookings = () => {
  return (
    <div>
      <h2 className="mt-8 mb-4 text-center text-2xl font-semibold text-[#282828]">
        Currently Cooking{" "}
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

     
    </div>
  );
};
CurrentlyCookings.propTypes = {
  bookmarks: PropTypes.array,
};
export default CurrentlyCookings;