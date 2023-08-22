let age = 25;

if (age < 18) {
    console.log("No puede pasar; es menor de edad");
} else if (age >= 18) {
    console.log("Adelante");
}


let premium = true;
let senior = true;

console.log(age >= 18 ? (premium && senior ? "Adelante, usted es premium" : "Adelante") : "No puede pasar");

// menos verboso