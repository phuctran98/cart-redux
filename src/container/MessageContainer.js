import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Message  from "../Components/Message";


class MessageContainer extends React.Component {
    render() {
        var {message} = this.props
        return (
           <Message message = {message}>
              
           </Message>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        message : state.message
    }
}

export default connect(mapStateToProps,null)(MessageContainer) ;
