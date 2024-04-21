import React from "react";
import style from "../style.module.css";

import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className={style.footer}>
<div className={style.footer_container}>
<div className={style.footer_logo}>
        <h2>OUR STYLE</h2>
      </div>
      <div className={style.footer_details}>
        <h4>ADDRESS</h4>
        <p>Place: Maisammaguda</p>
        <p>City: Hyderabad</p>
        <p>State: Telangana</p>
        <p>Country: India</p>
        <p>Enquire: 905XXXXXXX</p>
      </div>
      <div className={style.footer_media}>
        <CiInstagram className={style.icon}/>
        <CiTwitter className={style.icon}/>
        <CiLinkedin className={style.icon}/>
      </div>
</div>
    </footer>
  );
};

export default Footer;
