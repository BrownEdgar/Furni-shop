import ArrowIcon from "../../icons/ArrowIcon"
import "./Pagination.scss"

export default function Pagination() {
  return (
    <div className="Pagination">
      <button className="Pagination-prev">
        <ArrowIcon type="left" color="rgba(35, 38, 47, 0.2)" />
      </button>
      <div className="Pagination-btns">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button className="Pagination-next">
        <ArrowIcon type="right" color="#23262F" />
      </button>
    </div>
  )
}
