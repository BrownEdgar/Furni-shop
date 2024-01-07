import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NewInStore.scss';

export default function NewInStore() {
  const sliderSettings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const sliderData = [
    { imageUrl: 'c1a6b8bfe25ce205553cb2aad2c02d09.jpeg', text: 'Chair' },
    { imageUrl: '785cbfe347938fe2bb9eeeac65a16ec9.jpeg', text: 'Bed' },
    { imageUrl: '3f528df9d9cf231525760b4998339282.jpeg', text: 'Cupboard' },
    { imageUrl: 'ea252f233a27934eb0e7e60e9b2b3740.jpeg', text: 'Lighting' },
  ];

  return (
    <div className="slider-container">
      <div className="header-container">
        <h2>New In <br />Store Now</h2>
        <p>Get the latest items immediately <br />with promo prices</p>
        <div className="check-all">
          <span>Check All</span>
          <img src="Arrow8.svg" alt="Arrow" />
        </div>
      </div>
      <div className='slider'>
        <Slider {...sliderSettings}>
          {sliderData.map(({ imageUrl, text }, index) => (
            <div key={index} className="slick-slide">
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
              <div className="slide-text">{text}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}