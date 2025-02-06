

let iphone = {
    name :'iphone',
    price:125000,
    description:'The new apple iphone 14 pro',
    rating:4.9,
    display(){
        console.log('first display',this);
    }
}

let macbook = {
    name :'Macbook M2',
    price:20000,
    description:'the new apple macbook m2',
    rating:4.9,
    display(){
        console.log('second display',this);
    }
}

iphone.display();
macbook.display();
