import React, { Component } from 'react';
import Header from './Components/Header'
import Products from './Components/Products'
import Message from './Components/Message'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
class App extends React.Component {
    render() {
        return (
            <div className= "hidden-sn animated deep-purple-skin">
                <Header></Header>
                <Products></Products>
                <Message></Message>
                <Cart></Cart>
                <Footer></Footer>
            </div>  
        );
    }
}


export default App;
