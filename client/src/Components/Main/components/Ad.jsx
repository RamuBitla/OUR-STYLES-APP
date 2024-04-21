import React from 'react';
import style from '../style.module.css'
import {AuthContext} from '../../../Context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Ad = () => {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user
  return (
    <div className={style.ad_container}>
        <div className={style.adButton}>
            <h3>Unleash Your creativity</h3>
            <p>Experience the magic of AI Design on custom T-Shirts!</p>
            <div className={style.get_started_button}>
            {isLoggedIn ? (
              <button className={style.white_btn}><Link to="/tshirts"> Get Started </Link></button>
            ) : (
              <Link to="/login"><button className={style.white_btn}>Get Started</button></Link> 
            )}
        </div>
        </div>
        <div><img src="https://static.wixstatic.com/media/1516c0_8a5edfbca97f4b4c8ffc747506337d6b~mv2.gif" alt="personalized t-shirts" className={style.img}></img></div>
    </div>
  )
}

export default Ad