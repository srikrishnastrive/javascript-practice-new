
//rest parameter unit them all in one unit
const product = {
    name :'Iphone 14 pro',
    price:12500,
    discount:10,
    category:{
        name:'mobies',
        categoryId:12,
        type:{
            typeId:1,
            typeName :'eectronics'
        }
    },

    
}

const {discount,...productWithoutDiscount} = product;

console.log(discount);
console.log(productWithoutDiscount);
