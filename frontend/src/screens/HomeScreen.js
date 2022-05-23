import './HomeScreen.css'

// components
import Product from '../components/Product.js'

const HomeScreen = () => {
  return <div className = "homescreen">
    <h2 className = "homescreen__title">Latest Products</h2>
    <div className = "homescreen__products">
      <Product />
    </div>
  </div>
}

export default HomeScreen