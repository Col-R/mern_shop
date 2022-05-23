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

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
    {/*Navbar for desktop*/}
    <Navbar />
    {/* SideDrawer for mobile*/}
    <SideDrawer show = {sideToggle}/>
    {/* Backdrop */}
    <Backdrop show = {sideToggle}/>
    <main>
      <Routes> {/* Apparently this used to be Switch but that changed in react-router-dom v6, https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
        <Route exact path = "/" component = {HomeScreen} />
        <Route exact path = "/product/:id" component = {ProductScreen}/>
        <Route exact path = "/cart" component = {CartScreen}/>
      </Routes>
    </main>
    
    </Router>
  );
}
// ex
export default App;
