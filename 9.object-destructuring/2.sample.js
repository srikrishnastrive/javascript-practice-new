const product = {
    name :'Iphone 14 pro',
    price:12500,
    category:{
        name:'mobies',
        categoryId:12,
        type:{
            typeId:1,
            typeName :'eectronics'
        }
    },

    
}

// const {category} =  product
// const {categoryId} = category


const {name:productName,price:productPrice,category: {categoryId}} = product;
const {category:{type:{typeName,typeId}},discount = 10} = product;
console.log(typeName);
console.log(typeId);

console.log(productName);
console.log(categoryId);
 