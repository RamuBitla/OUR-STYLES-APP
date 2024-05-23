import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";


import style from "../style.module.css";
import Logout from "../../Auth/Logout";

import cart from "../../../assets/shopping-cart.png";



const SinglePage = ({ proDetail }) => {
  return (
    <Fragment className={style.view_container}>
      <div className={style.nav_container}>
        <div className={style.navbar}>
          <div className="nav_logo">
            <Link to="/">
              <h1>OUR STYLES</h1>
            </Link>
          </div>
          <ul>
            <Link to="/tshirts">
              <li>T-shirt View</li>
            </Link>
          </ul>
          <div className={style.nav_logout}>
            <Logout />
            <img src={cart} alt="" />
            <div className={style.nav_cart_count}>6</div>
          </div>
        </div>
      </div>
      {proDetail.map((item) => {
        return (
          <div className={style.view_tshirt} id={style.prodetails}>
            <div className={style.singleProImage}>
              <img src={item.img} id="mainImg" alt="" />
              <button className={style.green_btn}>Edit Your Design</button>
            </div>
            <div className={style.singleProDetails}>
              <h4>{item.title}</h4>
              <h5>{item.brand}</h5>
              <span>{item.description}</span>
              <div className={style.price}>
                <div className={style.dicountPrice}>
                <h2><MdCurrencyRupee className={style.icon}/>{item.price}</h2>
          <p className={style.recentAmount}>
            M.R.P :
            <span>
               <MdCurrencyRupee className={style.icon1}/>
              490.00
            </span>
          </p>
                </div>
        
                <div className={style.sub_div}>
                  <select className={style.dropdown}>
                    <option>select size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>Medium</option>
                    <option>Small</option>
                  </select>
                
                </div>
              </div>
              <div className={style.viewButtons}>
                <Link to="/cart-page">
                  <button className={style.green_btn}>Add To Cart</button>
                </Link>
                <button className={style.green_btn}>Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default SinglePage;
