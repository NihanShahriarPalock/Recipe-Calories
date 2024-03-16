import PropTypes from 'prop-types'
import ItemAdd from './ItemAdd';

const ItemsAdd = ({bookmarks}) => {
  return (
    <div className="w-full lg:w-2/5 border min-h-fit h-full border-blue-600">
      <h1 className="text-center text-2xl font-semibold text-[#282828] ">
        Want to Cook : {bookmarks.length}
      </h1>

      <div className="divider mt-4 mb-6"></div>
   
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className='flex justify-evenly'>
              
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
        

        {/* Currently Cooking */}
      <div>
        <h1 className='text-2xl font-semibold text-[]'>Currently Cooking</h1>
      </div>

     

      {bookmarks.map((bookmark) => (
        <ItemAdd key={bookmark.id} bookmark={bookmark}></ItemAdd>
      ))}
    </div>
  );
};
ItemsAdd.propTypes = {
  bookmarks: PropTypes.array
};
export default ItemsAdd;