var initState = [
    {
        id:0,
        name:"IPHONE",
        image :'',
        description: "new module",
        price: 500,
        inventory : 10
    },
    {
        id:1,
        name:"IPHONE5",
        image :'',
        description: "new module",
        price: 500,
        inventory : 10
    },
    {
        id:0,
        name:"IPHONE8",
        image :'',
        description: "new module",
        price: 500,
        inventory : 10
    },
]
const product = (state = initState, action) => {
    switch(action.type){
        default: return [...state]
    }
       

}
export default product