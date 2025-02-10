

const product = {
    name :'Iphone 14 pro',
    price:12500,
    category:'mobiles'
}
//object destructing

const {name,price,category} = product;
console.log(name);
console.log(category);

const purchasedProduct = {price:1000,orderId:'ekshfsfsdfn123',orderDate:'11/09/2024',...product};
console.log(purchasedProduct);
const purchasedProduct1 = {orderId:'ekshfsfsdfn123',orderDate:'11/09/2024',...product,price:1000};
console.log(purchasedProduct1);
