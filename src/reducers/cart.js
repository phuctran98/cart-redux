import * as types from "../constants/ActionType";
// var data = JSON.parse(localStorage.getItem('cart'))
var initState = [
    {
        product : {
            id:0,
            name:"IPHONE8",
            image :'https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg',
            description: "new module",
            price: 100,
            inventory : 10,
            rating : 3
        },
        quantity : 4
    },
    {
        
        product : {
            id:1,
            name:"IPHONE8",
            image :'https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg',
            description: "new module",
            price: 500,
            inventory : 10,
            rating : 3
        },
        quantity : 2
    }

]
const cart = (state = initState, action) => {
    var index = -1
    var {product,quantity} = action
    switch(action.type){
        case types.ADD_TO_CART :{
            // console.log(action)
            var index = findIndex(state,product)
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