import PropTypes from 'prop-types';

const ItemAdd = ({
  bookmark,
  handleAddToCart,
  handlePrepareTime,
  handleCalories,
}) => {
  const { recipe_name, preparing_time, calories } = bookmark;
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="flex justify-evenly items-center ">
              
              <th className="justify-end">{recipe_name}</th>
              <th>{preparing_time} minutes</th>
              <th>{calories} calories</th>
              <th>
                <button
                  onClick={() => {
                    handleAddToCart(bookmark);
                    handlePrepareTime(preparing_time);
                    handleCalories(calories);
                  }}
                  className="add-btn bg-[#0BE58A] rounded-full font-medium text-[#150B2B] p-3"
                >
                  Preparing
                </button>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};
ItemAdd.propTypes = {
  bookmark: PropTypes.object,
  index: PropTypes.string,
  handleAddToCart: PropTypes.func,
  handlePrepareTime: PropTypes.func,
  handleCalories:PropTypes.func
};
export default ItemAdd;



