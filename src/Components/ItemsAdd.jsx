import PropTypes from 'prop-types'
import ItemAdd from './ItemAdd';

const ItemsAdd = ({bookmarks}) => {
  return (
    <div className="w-full lg:w-2/5 border border-blue-600">
      <h1 className="text-center text-2xl font-semibold text-[#282828] ">
        Want to Cook : {bookmarks.length}
      </h1>

      <div className="divider mt-4 mb-6"></div>

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