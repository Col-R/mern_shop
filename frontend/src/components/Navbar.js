import './Navbar.css';


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
                <Link to ="/cart">

                </Link>
            </li>
        </ul>
        {/*hamburger menu*/}
        </nav>
    )
}

export default Navbar;