import React, { Component } from 'react';
import Products from "../Components/Products";
import Product from "../Components/Product";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class ProductsContainer extends React.Component {
    showProduct(products){
        var results = []
        results = products.map((product,index) =>{
            return <Product product={product} key={index}></Product>
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
export default connect(mapStateToProps,null)(ProductsContainer) ;
