import React from "react";
// import { useAuthContext } from "../../Hooks/useAuthContext";
// import { useLogout } from "../../Hooks/useLogout";
import { Link } from "react-router-dom";


import style from "./style.module.css";
import Products from "../Pages/products";
import Footer from "../Main/components/Footer";
import Logout from "../Auth/Logout";

import cart from "../../assets/shopping-cart.png";
import hero from "../../assets/hero.jpg";

import { IoCartOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

const TshirtView = () => {
  // const {user} = useAuthContext();
  // const { logout } = useLogout();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   logout();
  //   navigate("/"); // Navigate to the main page
  // };

  return (
    <>
      <div className={style.nav_container}>
        <div className={style.navbar}>
          <div className="nav_logo">
            <Link to="/">
              <h1>OUR STYLES</h1>
            </Link>
          </div>
          <div className={style.nav_logout}>
            {/* {user && (
              <div className={style.logout}>
                <span>{user.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )} */}
            <Logout/>
            <img src={cart} alt="" />
            <div className={style.nav_cart_count}>6</div>
          </div>
        </div>
      </div>
      <div className={style.hero_section}>
        <img src={hero} alt="" />
        <div className={style.layer}></div>
        <h2>T-Shirts for Every Occasion!</h2>
        <p>
          From casual to formal, we have got you covered with our wide range of
          t-shirts.
        </p>
      </div>

      <section id={style.product1} className="section-p1">
        <div className={style.pro_container}>
          {Products().map((item, index) => (
            <div className={style.product} key={index}>
              <img src={item.img} alt="product" />
              <div className={style.item}>
                <span>{item.brand}</span>
                <h5>Cartoon Astronaut T-Shirt</h5>
                <p>{item.title}</p>
                <div className="stars">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
                <h4>
                  <MdCurrencyRupee />
                  {item.price}
                </h4>
              </div>
              <Link>
                <IoCartOutline className={style.icon} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TshirtView;
