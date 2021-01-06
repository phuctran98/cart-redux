import React from 'react';
// import products from '../reducers/product';
import * as messsages from "../constants/Message";

class Product extends React.Component {
    render() {
        const {product} = this.props
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.rating(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                                    </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    onClick = {()=>this.addToCart(product)}
                                    >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    rating(rating){
        var results = []
        for(var i=1;i <= rating; i++){
            results.push(<i key = {i}className="fa fa-star"></i>)
        }
        for(var j=1;j <= 5-rating; j++){
            results.push(<i key ={i+j} className="fa fa-star-o"></i>)
        }
        
        return results
    }
    addToCart = (product) => {
        this.props.onAddToCart(product)
        this.props.changeMessage(messsages.MSG_ADD_CART_SUCCSESS)
    }
}


export default Product;
