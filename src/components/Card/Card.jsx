/* eslint-disable react/prop-types */
import "./Card.scss"

export default function Card({ product }) {
  return (
    <div className="Card">
      <div className="Card-imgBox">
        <img src={`./images/${product.image}`} alt={product.name} />
        <button className="Card-imgBox_btn"></button>
      </div>
      <h2 className="Card-productName">{product.name}</h2>
      <div className="Card-priceBox">
        <span className="Card-priceBox_price">{`$${product.price.toFixed(2)}`}</span>
        <span className="Card-priceBox_old">{`$${product.old_price.toFixed(2)}`}</span>
      </div>
    </div>
  )
}
