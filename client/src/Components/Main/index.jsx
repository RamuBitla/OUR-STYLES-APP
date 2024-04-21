import Aboutus from "./components/Aboutus";
import Ad from "./components/Ad";
import Carousel from "./components/Carousel";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GetStartedButton from "./components/GetStartedButton";
import style from "./style.module.css";
import {Link} from "react-router-dom"

const Main = () => {

	return (
		<div className={style.main_container}>
			<nav className={style.navbar}>
				<Link to='/'><h1>OUR STYLE</h1></Link>
				<button className={style.white_btn}>
				<Link to="/signup">
        Sign Up
      </Link>
				</button>
			</nav>
			<div className={style.components}>
			<Carousel/>
			<GetStartedButton/>
			<Aboutus/>
			<Ad/>
			<FAQ/>
			<Footer/>
			</div>
		</div>
	);
};

export default Main;