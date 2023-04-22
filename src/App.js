import './App.css';
import Navbar from './component/Navbar';
import Categories from './component/Categories';
import Products from './component/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='row p-3'>
          <Categories/>
          <Products/>
        </div>
    </div>
  );
}

export default App;
