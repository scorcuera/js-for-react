// destructuring
let object = {
    "data": {
        "names": [], 
        "phones": []
    },
    "metadata": {
        "blabla": 2
    }
}
// let data = object.data;
// let metadata = object.metadata;

let {data, metadata} = object

console.log(superdata)





// rest
function sum(...numbers) {
    console.log(numbers)
    let counter = 0;
    for (let number of numbers) {
        counter = counter + number;
    }
    console.log(counter);
    return counter;
}

sum(1,2,3);





// spread
let frutas1 = ["naranja", "manzana"];
let frutas2 = ["mango", "sandía", "arándanos"];

let frutas3 = [...frutas1, ...frutas2];
console.log(frutas3);
