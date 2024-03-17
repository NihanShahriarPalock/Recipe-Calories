
import PropTypes from "prop-types"
const SingleCook = ({ cart }) => {
  const { recipe_name, preparing_time, calories } = cart;
  return (
    <div>
      <div className="mt-6 overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="flex justify-evenly">
              <th>{recipe_name}</th>
              <th>{preparing_time}</th>
              <th>{calories}</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
SingleCook.propTypes={
    cart:PropTypes.object,
    handleTime:PropTypes.func
}
export default SingleCook;