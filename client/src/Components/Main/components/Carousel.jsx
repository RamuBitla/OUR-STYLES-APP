// Carousel.jsx
import React from 'react'
import style from '../style.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/img4.png";
// import img5 from "../../../assets/5.jpg";
// import img6 from "../../../assets/6.jpg";

const Carousel = () => {
  const  images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <div className={style.carousel_container}>
      <Slider style={{width:  "100%"}} {...settings} >
        {images.map((image , index)=>{
          return(
            <>
            <div className={style.carousel} key={index}>
              <img src={image} alt='Carousel-images' />
            </div>
            </>
          )
        })}
        {/* <div className={style.carousel_item}>
          <img src={require('../../../assets/1.jpg')} alt="" />
        </div>
        <div className={style.carousel_item}>
          <img src={require('../../../assets/2.jpg')} alt="" />
        </div>
        <div className={style.carousel_item}>
          <img src={require('../../../assets/3.jpg')} alt="" />
        </div>
        <div className={style.carousel_item}>
          <img src={require('../../../assets/4.jpg')} alt="" />
        </div>
        <div className={style.carousel_item}>
          <img src={require('../../../assets/5.jpg')} alt="" />
        </div>
        <div className={style.carousel_item}>
          <img src={require('../../../assets/6.jpg')} alt="" />
        </div> */}
      </Slider>
    </div>
  )
}

export default Carousel
