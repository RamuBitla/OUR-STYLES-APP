import React, { useState } from "react";
import product1 from "../../../assets/product1.jpg";
import { MdCurrencyRupee } from "react-icons/md";

import style from "../style.module.css";

import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < setAmount ? setAmount(amount + 1) : setAmount();
  };
  return (
    <div className={style.cartContainer}>
      <div className={style.shoppingCart}>
        <h2>Shopping Cart</h2>
        {/* <p>Price</p> */}
      </div>
      <div className={style.cartContent}>
        <div className={style.image}>
          <img src={product1} alt="T-Shirt" />
        </div>
        <div className={style.product}>
          <Link to="/tshirt-view">
            <h4>Fashion T-Shirt</h4>
          </Link>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
          <p>Colour: black</p>
          <p>Size: XL</p>
          {/* <p>Style Name: Fashio T-Shirt</p> */}
        </div>
        <div className={style.quantity}>
          <CiSquareMinus className={style.icon} />
          <div className={style.count}>1</div>
          <CiSquarePlus className={style.icon} />
        </div>
        <div className={style.price}>
          {/* <p className={style.offer}>40% Off</p>
          <p className={style.red}>Limited Time Deal</p> */}
          <h2 className={style.cartAmount}>
            <MdCurrencyRupee className={style.icon} />
            200.00
          </h2>
          {/* <p className={style.recentAmount}>
            M.R.P :
           
            <span>
               <MdCurrencyRupee className={style.icon1}/>
              490.00
            </span>
          </p> */}
        </div>
        <div className={style.cartButtons}>
          <button className={style.white_btn}>
            delete <AiOutlineDelete />
          </button>
          {/* <button className={style.white_btn}>
             edit
             <FaEdit />
           </button>
           <button className={style.white_btn}>
             save
             <FaRegSave />
           </button>
           <button className={style.white_btn}>
             share
             <CiShare2 />
           </button> */}
        </div>
      </div>
      <div className={style.subtotal}>
        <p>
          Subtotal (1item) :
          <span>
            <MdCurrencyRupee />
            200
          </span>
        </p>
      </div>
      <div className={style.continue}>
        <p><Link to="/tshirts">Continue Shopping</Link></p>
      </div>
    </div>
  );
};

export default Cart;
