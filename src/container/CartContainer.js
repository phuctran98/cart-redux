import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Cart from "../Components/Cart";
import * as Message from "../constants/Message";
import * as actions from "../actions/index";
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
        const {onDeleteCartItem,onChangeMessage,onChangeQuantityCartItem} = this.props
        var results = <tr>
            <td>
            {Message.MSG_CART_EMPTY}
            </td>
        </tr>
        if(cart.length > 0){
            results =  cart.map((item,index)=>{
                return <CartItem 
                            item ={item} 
                            key = {index}
                            onDeleteCartItem = {onDeleteCartItem}
                            onChangeMessage = {onChangeMessage}
                            onChangeQuantityCartItem = {onChangeQuantityCartItem}
                            >
                        </CartItem>
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
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onDeleteCartItem : (product) =>{
            dispatch(actions.deleteCartItem(product))
        },
        onChangeMessage : (message) =>{
            dispatch(actions.changeMessage(message))
        },
        onChangeQuantityCartItem : (product,quantity) =>{
            dispatch(actions.updateQuantityCartItem(product,quantity))
        }
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
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer) ;
