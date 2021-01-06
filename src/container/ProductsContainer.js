import React from 'react';
import Products from "../Components/Products";
import Product from "../Components/Product";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import * as actions from '../actions/index'


class ProductsContainer extends React.Component {
    showProduct(products){
        var {onAddToCart,changeMessage} = this.props
        var results = []
        results = products.map((product,index) =>{
            return <Product product={product} key={index} onAddToCart = {onAddToCart} changeMessage={changeMessage}></Product>
        })
        return results
    }
    render() {
        const {products} = this.props
        return (
            <Products >
                {this.showProduct(products)}
            </Products>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddToCart : (product) =>{
            dispatch(actions.addToCart(product,1))
        },
        changeMessage : (message) =>{
            dispatch(actions.changeMessage(message))
        }
    }
}
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,

        })
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer) ;
