import Pagination from "../Pagination/Pagination"
import ProductSlider from "../ProductSlider/ProductSlider"

import "./Product.scss"

export default function Product() {
  return (
    <div className='Product container'>
      <div className="Product-header">
        <h1>All Product</h1>
        <p>
          The products we provide only for you as our service are selected from the best products with number 1 quality in the world
        </p>
      </div>
      <div className="Product-body">
        <ProductSlider />
        <Pagination />
      </div>
    </div>
  )
}
