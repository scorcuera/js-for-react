let fruits = ["arándanos", "aguacate", "parchita", "maqui", "mandarinas", "kaki", "mango", "cambur", "tuna", "kiwi", "melocotón"];

// traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//new modern hipster for loop
for (let fruit of fruits) {
    console.log(fruit);
}

let forEachFruits = fruits.forEach((fruit) => {
    // console.log(fruit, index)
    // return fruit;
})

let mapFruits = fruits.map(fruit => { 
    // if (fruit == "kaki") {
    //     return fruit + " que riquísimo";
    // }
    // return fruit + " que rico";
})

let aFruits = fruits.filter(fruit => {
    return !fruit.includes('a');
})


console.log(aFruits);