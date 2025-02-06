const player1 = {
    firstName :'Virat',
    lastName : 'Kohli',
    numberTOBat : 3,
    canBowl : false,
    getDetails : function () {
       return `${this.firstName} ${this.lastName} comes at No. ${this.numberTOBat}`;
    }
}

const obj = player1.getDetails;
console.log(obj()); // undefined (because this refers to global scope)

let x  = obj.bind(player1);
console.log(x()); // Correctly prints: "Virat Kohli comes at No. 3"
