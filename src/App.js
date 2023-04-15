import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import PostFurniture from './Components/PostFurniture';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Error404Page from './Components/Error404Page';



function App() {
  return (
    <div className="App">
   
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
     <Route path="/postfurniture"  element={<PostFurniture/>}/>
        <Route path='/productDetails' element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='*' element={<Error404Page/>}/>
    


        </Route>
      </Routes>
    </Router>
   
     
    </div>
  );
}

export default App;
