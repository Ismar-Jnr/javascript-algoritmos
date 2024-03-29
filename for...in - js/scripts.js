// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property);
    console.log(person[property]); // Essa é uma das maneiras de acessar uma propriedade em um objeto;
}