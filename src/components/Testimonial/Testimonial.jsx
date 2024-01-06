import { useRef, useState } from "react"
import { useSelector } from "react-redux"

import { selectAllComments } from "../../features/Comments/commentsSlice"
import ArrowIcon from "../../icons/ArrowIcon"

import "./Testimonial.scss"

export default function Testimonial() {
  const [offset, setOffset] = useState(1)
  const nextBtn = useRef(null)
  const prevBtn = useRef(null)

  const comments = useSelector(selectAllComments)

  offset === 1
    ? prevBtn?.current?.classList.remove("active")
    : prevBtn?.current?.classList.add("active")

  offset === comments.length
    ? nextBtn?.current?.classList.remove("active")
    : nextBtn?.current?.classList.add("active")

  const prevSlide = () => {
    if (offset === 1) return;
    setOffset(offset - 1)
  }

  const nextSlide = () => {
    if (offset === comments.length) return;
    setOffset(offset + 1)
  }

  return (
    <div className='Testimonial container'>
      <div className='Testimonial-leftSide'>
        <h1>What people are saying about us</h1>
        <div
          className="Testimonial-leftSide__slider"
          style={{
            "--slider-width": `${comments.length * 100}%`,
            "--slider-offset": offset,
            "--slider-count": comments.length
          }}>
          {
            comments.map(comment => (
              <div className="Testimonial-leftSide__slider__track" key={comment.id}>
                <div className='Testimonial-leftSide__slider__track_userBox'>
                  <div className='Testimonial-leftSide__slider__track_userBox_imgBox'>
                    <img src={`./images/${comment.image}`} alt="user image" />
                  </div>
                  <div className='Testimonial-leftSide__slider__track_userBox_userInfo'>
                    <h2>{comment.username}</h2>
                    <p>{comment.job}</p>
                  </div>
                </div>
                <p className="Testimonial-leftSide__slider__track_desc">
                  <q>{comment.description}</q>
                </p>
              </div>
            ))
          }
        </div>
        <div className="Testimonial-leftSide_arrowButtons">
          <button
            className="Testimonial-leftSide_arrowButtons_btnPrev"
            onClick={prevSlide}
            ref={prevBtn}>
            <ArrowIcon type="left" color="#23262F" />
          </button>
          <button
            className={`Testimonial-leftSide_arrowButtons_btnNext${comments.length ? " active" : ""}`}
            onClick={nextSlide}
            ref={nextBtn}>
            <ArrowIcon type="right" color="#23262F" />
          </button>
        </div>
      </div>
      <div className='Testimonial-rightSide'>
        <img src="./images/7e45630bf89f9157ff262817a8c5adcb.jpg" alt="furniture image" />
      </div>
    </div >
  )
}
