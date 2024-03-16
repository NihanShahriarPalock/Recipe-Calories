import PropTypes from 'prop-types';

const ItemAdd = ({bookmark}) => {
    const { recipe_name, preparing_time, calories } = bookmark;
    return (
      <>
        {/* <div className="flex justify-evenly">
          <p>{recipe_name}</p>
          <p>{preparing_time} minutes</p>
          <p>{calories} calories</p>

          <button className="bg-[#0BE58A] rounded-full font-medium text-[#150B2B] p-3">
            Preparing
          </button>
        </div> */}

        {/* Start */}
        {/* Start */}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                
                <th>{recipe_name}</th>
                <th>{preparing_time} minutes</th>
                <th>{calories} calories</th>
                <th>
                  <button className="bg-[#0BE58A] rounded-full font-medium text-[#150B2B] p-3">
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
ItemAdd.propTypes={
    bookmark:PropTypes.object
}
export default ItemAdd;



