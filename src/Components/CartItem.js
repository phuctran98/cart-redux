import React from 'react';
import * as messages from "../constants/Message"

class CartItem extends React.Component {
    // constructor(){
    //     super()
    //     this.state = ({
    //         quantity :1
    //     })
    // }
    totalPrice = (price,quantity) =>{
        var total = 1
        total = price * quantity
        return total
    }
    onDelete = (item) =>{
        this.props.onDeleteCartItem(item)
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_TO_CART)
    }
    changeQuantity = (product,quantity)=>{
        if(quantity>0){
            // this.setState({
            //     quantity : quantity
            // })
            this.props.onChangeQuantityCartItem(product,quantity)
        }
       
        // console.log(this.state.quantity)
    }
    render() {
        var {item} = this.props
        var {quantity} = item.quantity > 0 ? item : this.state
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}s</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" 
                        onClick = {()=>this.changeQuantity(item.product,item.quantity-1)}>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick = {()=>this.changeQuantity(item.product,item.quantity+1)}>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.totalPrice(item.product.price, item.quantity)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={()=>this.onDelete(item.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
}


export default CartItem;
