import React from 'react'
import style from "../style.module.css";

const Aboutus = () => {
  return (
    <div className={style.about_container}>
        <h2>ABOUT US</h2>
        <div className={style.about_sub_container}>
        <div className={style.text}>
            <p> “Our Style”, the Custom Design T-Shirt Generator is a web application that
allows users to create personalized T-shirt designs effortlessly. The proposed system offers
a user-friendly interface with a wide range of design tools and customization options. Users
can choose from a variety of T-shirt styles, colours, and sizes as the base for their designs. In
addition to these features, text, images, and graphics, or the customer’s own designs can be
uploaded to create unique and personalized T-shirts. The Proposed work can provide realtime previews of the design, allowing users to view their T-Shirts before placing an order.
Once satisfied with the design, users can place an order directly through the Proposal System.</p>
        </div>
        <div className={style.image}>
            <img src={require("../../../assets/aboutus.jpg")} alt="" />
        </div>
        </div>

    </div>
  )
}

export default Aboutus