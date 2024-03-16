import { useState } from "react";
import "./App.css";
import HeroBanner from "./Components/HeroBanner";
import Items from "./Components/Items";
import ItemsAdd from "./Components/ItemsAdd";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  
  const handleItemPrepare = (newItem) => {
    const isExist = bookmarks.find(
      (item) => item.recipe_id === newItem.recipe_id
    );
    if (!isExist) {
      setBookMarks([...bookmarks, newItem]);
    } else {
      toast.error("Already added this item");
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Recipes></Recipes>
      <div className="flex flex-col lg:flex-row">
        <Items handleItemPrepare={handleItemPrepare}></Items>
        <ItemsAdd bookmarks={bookmarks}></ItemsAdd>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
