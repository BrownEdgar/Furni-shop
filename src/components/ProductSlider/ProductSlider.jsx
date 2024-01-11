import { useSelector } from "react-redux"
import { Fragment } from "react"

import { allProducts } from "../../features/product/productSlice"
import Card from "../Card/Card"
import "./ProductSlider.scss"

export default function ProductSlider() {
  const products = useSelector(allProducts)
  return (
    <div className="ProductSlider">
      <div className="ProductSlider-track">
        {
          products.map(product => (
            <Fragment key={product.id}>
              <Card product={product} />
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}
