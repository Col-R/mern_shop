import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = 'navbar'>
        {/*logo */}
        <div className = "navbar__logo">
            <h2>MERN shopping cart</h2>
        </div>
        {/*links */}
        <ul className = "navbar__links">
            <li>
                <Link to ="/cart" className="cart__link">
                    {/* Icon */}
                    {/* Importing fontawesome icon from cdnjs.com into public/index.html*/}
                    <i className = "fas fa-shopping-cart"></i>
                    <span>
                    Cart
                    <span className = "cartlogo__badge">0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to ="/shop">
                    Shop
                </Link>
            </li>
        </ul>
        {/*hamburger menu*/}
        <div className = "hamburger__menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        </nav>
    )
}

export default Navbar;