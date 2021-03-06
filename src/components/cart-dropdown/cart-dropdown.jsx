import React from "react";
import CustomButton from "../custom-button/custom-button";
import './cart-dropdown-styles.scss';
import CartItem from "../cart-item/cart-item";
import {connect} from 'react-redux'
import {selectCartItems} from "../../redux/cart/cart.selectors";


const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id}
                    item={cartItem}/>)
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);