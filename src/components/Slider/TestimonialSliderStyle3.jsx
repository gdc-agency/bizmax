import Slider from 'react-slick';
import TestimonialStyle2 from '../Testimonial/TestimonialStyle2';
import { useState } from 'react';

const testimonialImageNav = [
  'images/testimonial_thumb_1.png',
  'images/testimonial_thumb_2.png',
  'images/testimonial_thumb_3.png',
];

export default function TestimonialSliderStyle3({ data }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      className="cs_slider_prev filter cs_height_45 cs_width_45 bg-white rounded-circle d-flex align-items-center justify-content-center bg-accent-hover cs_transition_4"
      {...props}
    >
      <svg
        width={20}
        height={8}
        viewBox="0 0 20 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.461063 4.4077H19.538C19.7649 4.4077 19.9482 4.22437 19.9482 3.99745C19.9482 3.77052 19.7649 3.58719 19.538 3.58719H1.45209L3.94183 1.09745C4.10209 0.937189 4.10209 0.676933 3.94183 0.516677C3.78158 0.35642 3.52132 0.35642 3.36106 0.516677L0.170038 3.7077C0.0520878 3.82565 0.0174732 4.00129 0.0815754 4.15514C0.145678 4.3077 0.295677 4.4077 0.461063 4.4077Z"
          fill="black"
        />
        <path
          d="M3.65549 7.60253C3.76062 7.60253 3.86575 7.56278 3.94524 7.48202C4.10549 7.32176 4.10549 7.0615 3.94524 6.90125L0.750365 3.70637C0.590108 3.54612 0.329853 3.54612 0.169597 3.70637C0.00934029 3.86663 0.00934029 4.12689 0.169597 4.28714L3.36447 7.48202C3.44524 7.56278 3.55036 7.60253 3.65549 7.60253Z"
          fill="black"
        />
      </svg>
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      className="cs_slider_next filter cs_height_45 cs_width_45 bg-white rounded-circle d-flex align-items-center justify-content-center bg-accent-hover cs_transition_4"
      {...props}
    >
      <svg
        width={20}
        height={8}
        viewBox="0 0 20 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5389 4.4077H0.462014C0.235091 4.4077 0.0517578 4.22437 0.0517578 3.99745C0.0517578 3.77052 0.235091 3.58719 0.462014 3.58719H18.5479L16.0582 1.09745C15.8979 0.937189 15.8979 0.676933 16.0582 0.516677C16.2184 0.35642 16.4787 0.35642 16.6389 0.516677L19.83 3.7077C19.9479 3.82565 19.9825 4.00129 19.9184 4.15514C19.8543 4.3077 19.7043 4.4077 19.5389 4.4077Z"
          fill="#18191D"
        />
        <path
          d="M16.3445 7.60253C16.2394 7.60253 16.1342 7.56278 16.0548 7.48202C15.8945 7.32176 15.8945 7.0615 16.0548 6.90125L19.2496 3.70637C19.4099 3.54612 19.6701 3.54612 19.8304 3.70637C19.9907 3.86663 19.9907 4.12689 19.8304 4.28714L16.6355 7.48202C16.5548 7.56278 16.4496 7.60253 16.3445 7.60253Z"
          fill="#18191D"
        />
      </svg>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  const settingsNavSlider = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  return (
    <div className="container">
      <div className="position-relative">
        <Slider
          asNavFor={nav1}
          ref={slider2 => setNav2(slider2)}
          {...settings}
          className="cs_testimonial_thumb"
        >
          {data.map((item, index) => (
            <TestimonialStyle2 {...item} key={index} />
          ))}
        </Slider>
        <div className="cs_testimonial_nav-active">
          <Slider
            asNavFor={nav2}
            ref={slider1 => setNav1(slider1)}
            prevArrow={<SlickArrowLeft />}
            nextArrow={<SlickArrowRight />}
            {...settingsNavSlider}
            className="cs_testimonial_nav cs_gap_24"
          >
            {testimonialImageNav.map((item, index) => (
              <div className="cs_testimonial_nav-item" key={index}>
                <img
                  src={item}
                  alt="Thumb"
                  className="cs_height_80 cs_width_80 rounded-circle"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
