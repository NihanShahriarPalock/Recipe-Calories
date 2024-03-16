import PropTypes from 'prop-types';

const ItemAdd = ({bookmark}) => {
    const { recipe_name, preparing_time, calories } = bookmark;
    return (
      <>
        <div className="overflow-x-auto">
          <table className="table table-zebra text-[#282828B2]">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>{recipe_name}</td>
                <td>{preparing_time} minutes</td>
                <td>{calories} calories</td>
                <td>
                  <button className="bg-[#0BE58A] rounded-full font-medium text-[#150B2B] p-3">
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
};
ItemAdd.propTypes={
    bookmark:PropTypes.object
}
export default ItemAdd;