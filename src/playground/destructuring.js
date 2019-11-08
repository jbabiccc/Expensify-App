//
// Object destructuring
//

// const person={
//     name:'Andrew',
//     age:20,
//     location:{
//         city:'Aarhus',
//         temp: 4
//     }
// };
// const {name,age} = person;
// console.log(`${name} is ${age}.`);


// const {city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Publish'} = book.publisher;

//     console.log(publisherName);

//  //Penguin, Self-Published


//
// Array destructuring
//
// const address=['1299 S Juiper Street', 'Philadelphia', 'Pensilvania', '19854'];
// const [,city, state = 'NewYork'] = address;

// console.log(`You are in ${city}  ${state}`);


const item = ['Coffe(hot)', '$2.00','$2.50', '$2.75'];
const [itemName,, mediumPrice] =item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)