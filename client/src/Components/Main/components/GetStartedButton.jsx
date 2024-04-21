import {AuthContext} from '../../../Context/AuthContext';
import { useContext } from 'react';
import style from "../style.module.css";
import { Link } from 'react-router-dom';




const GetStartedButton = () => {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user
 
  return (
    <div className={style.get_started_container}>
        <div className={style.get_title}>
        <h1 className={style.title}>OUR STYLE</h1>
        <p>custom design T-Shirt generator ecommerce application</p>
        </div>
        <div className={style.get_started_button}>
        {isLoggedIn ? (
              <button className={style.white_btn}><Link to="/tshirts"> Get Started </Link></button>
            ) : (
              <Link to="/login"><button className={style.white_btn}>Get Started</button></Link> 
            )}
        </div>
    </div>
  )
}

export default GetStartedButton