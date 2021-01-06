import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Cart from "../Components/Cart";
import * as Message from "../constants/Message";
import CartItem from '../Components/CartItem';
import CartResult from '../Components/CartResult';

class CartContainer extends React.Component {
    render() {
        var {cart} = this.props
        return (
           <Cart>
               {this.showCart(cart)}
               {this.CartResult(cart)}
           </Cart>
        );
    }
    showCart = (cart) => {
        var results = <tr>
            <td>
            {Message.MSG_CART_EMPTY}
            </td>
        </tr>
        if(cart.length > 0){
            results =  cart.map((item,index)=>{
                return <CartItem item ={item} key = {index}></CartItem>
            })
        }
        return results
    }
    CartResult = (cart) =>{
        var results = null
        if(cart.length>0){
            results = <CartResult cart={cart}></CartResult>
        }
        return results
    }
}
const mapStateToProps = (state) =>{
    return{
        cart : state.cart
    }
}
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired,
            }).isRequired,
            quantity : PropTypes.number.isRequired
        })
    ).isRequired
}
export default connect(mapStateToProps,null)(CartContainer) ;
