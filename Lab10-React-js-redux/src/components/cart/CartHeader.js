import styles from './scss/CartHeader.module.scss'
import React from "react";
import {NavLink} from "react-router-dom";
import {CATALOG} from "../../constants/routes";

export const CartHeader = () => {

    return (
        <div className={styles.cartHeader}>
            <NavLink className={styles.title} to={CATALOG}>| Shopping Continue </NavLink>
            <hr/>
            <h3>Shopping cart</h3>
        </div>
    )
}