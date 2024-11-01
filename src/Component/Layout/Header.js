import { Fragment } from "react";
import mealsImage from  '../../assets/meals.jpg'
import classes from  './Header.module.css'

const Header = props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Delicious meal'/>
            </div>  
    </Fragment>
}

export  default Header;

