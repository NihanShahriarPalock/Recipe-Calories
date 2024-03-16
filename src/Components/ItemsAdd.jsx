import PropTypes from 'prop-types'

const ItemsAdd = ({bookmarks}) => {
  return (
    <div className="px-4 lg:px-32 w-1/3">
      <h1 className="text-center text-2xl font-semibold text-[#282828] ">
        Want to Cook : {bookmarks.length}
      </h1>

      <div className="divider mt-4 mb-6"></div>

      {/* {selectItems.map((selectItem) => (
        <ItemAdd key={selectItems.id} selectItem={selectItems}></ItemAdd>
      ))} */}
    </div>
  );
};
ItemsAdd.propTypes = {
  bookmarks: PropTypes.array
};
export default ItemsAdd;