import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

// components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
// import Product from './components/Product'

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      {/*Navbar for desktop*/}
      <Navbar click = {() => setSideToggle(true)}/>
      {/* SideDrawer for mobile*/}
      <SideDrawer show = {sideToggle} click = {() => setSideToggle(false)}/>
      {/* Backdrop */}
      <Backdrop show = {sideToggle} click = {() => setSideToggle(false)}/>
        <main>
          <Routes> {/* Apparently this used to be Switch but that changed in react-router-dom v6, https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
            <Route path = "/" element = {<HomeScreen/>}/>
            <Route path = "/product/:id" element = {<ProductScreen/>}/>
            <Route path = "/cart" element = {<CartScreen/>}/>
          </Routes>
        </main>
    
    </Router>
  );
}
// ex
export default App;
