
import { useState } from 'react';
import './App.css'
import HeroBanner from './Components/HeroBanner';
import Items from './Components/Items';
import ItemsAdd from './Components/ItemsAdd';
import Navbar from './Components/Navbar';
import Recipes from './Components/Recipes';

function App() {
  
const [bookmarks,setBookMarks]=useState([])

const handleItemPrepare = item=>{
  const newBookmarks = [...bookmarks,item];
  setBookMarks(newBookmarks);
  // console.log(item);
}
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Recipes></Recipes>
      <div className="flex flex-col lg:flex-row">
        <Items handleItemPrepare={handleItemPrepare}></Items>
        <ItemsAdd bookmarks={bookmarks}></ItemsAdd>
      </div>
    </>
  );
}

export default App
