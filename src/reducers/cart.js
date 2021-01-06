import * as types from "../constants/ActionType";
var data = JSON.parse(localStorage.getItem('cart'))
var initState = data ? data : []
const cart = (state = initState, action) => {
    var index = -1
    var {product,quantity} = action
    switch(action.type){
        case types.ADD_TO_CART :{
            // console.log(action)
            index = findIndex(state,product)
            if(index !== -1){
                console.log(index)
                state[index].quantity += quantity
                console.log(state)
            }
            else{
                state.push({product,quantity})
            }
            return [...state]
        }
        default: return [...state]
    }
       

}
var findIndex = (state,product) =>{
    var index = -1
    for(var i =0; i<state.length;i++){
        if(state[i].product.id === product.id){
            index = i
            // console.log(index)
            break
        }
    }
    return index
}
export default cart