import React from 'react';
import Header from './Components/Header'
import ProductsContainer from './container/ProductsContainer'
import CartContainer from './container/CartContainer'
import MessageContainer from './container/MessageContainer'
import Footer from './Components/Footer'
class App extends React.Component {
    render() {
        return (
            <div className= "hidden-sn animated deep-purple-skin">
                <Header></Header>
                <ProductsContainer></ProductsContainer>
                <MessageContainer></MessageContainer>
                <CartContainer></CartContainer>
                <Footer></Footer>
            </div>  
        );
    }
}


export default App;
