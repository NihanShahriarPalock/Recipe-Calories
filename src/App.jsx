
import './App.css'
import HeroBanner from './Components/HeroBanner';
import Items from './Components/Items';
import ItemsAdd from './Components/ItemsAdd';
import Navbar from './Components/Navbar';
import Recipes from './Components/Recipes';

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Recipes></Recipes>
      <div className='flex flex-col lg:flex-row'>
        <Items></Items>
        <ItemsAdd></ItemsAdd>     
      </div>
      
    </>
  );
}

export default App
