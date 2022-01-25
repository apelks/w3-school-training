import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import React,{ useContext,useEffect, useState} from "react";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) =>{


    
    const carCtx = useContext(CartContext);

    const numberOfCartItems = carCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${classes.bump}`;

    useEffect(() => {


    },[]);


    return <button className={btnClasses} onClick={props.onClick}>

        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Food
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>

    </button>



}

export default HeaderCartButton;