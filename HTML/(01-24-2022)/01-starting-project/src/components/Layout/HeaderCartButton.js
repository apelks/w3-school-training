import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import React,{ useContext } from "react";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) =>{

    const carCtx = useContext(CartContext);

    const numberOfCartItems = carCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>

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