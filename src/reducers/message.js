import * as messages from "../constants/Message";

var initState = messages.MSG_WELCOME
const message = (state = initState, action) => {
    switch(action.type){
        case messages.MSG_ADD_CART_SUCCSESS:
            return action.message
        default: return [...state]
    }
       

}

export default message