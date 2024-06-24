// callback and foreach


const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
}


let people = ['Raul', 'Robert', 'Laur', 'Anastasia', 'Victor', 'Raluca'];

const logPerson = (person, index) =>{
  console.log(`${index} -hello ${person} `);
}

// people.forEach(function(person, index){
//   console.log(`${index} ${person} merge la munte`);
// });

people.forEach(logPerson);