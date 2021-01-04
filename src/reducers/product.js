var initState = [
    {
        id:0,
        name:"IPHONE",
        image :'https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg',
        description: "new module",
        price: 500,
        inventory : 10,
        rating : 4
    },
    {
        id:1,
        name:"IPHONE5",
        image :'https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg',
        description: "new module",
        price: 500,
        inventory : 10,
        rating : 4
    },
    {
        id:0,
        name:"IPHONE8",
        image :'https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg',
        description: "new module",
        price: 500,
        inventory : 10,
        rating : 3
    },
]
const products = (state = initState, action) => {
    switch(action.type){
        default: return [...state]
    }
       

}
export default products