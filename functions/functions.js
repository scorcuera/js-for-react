function myFunction () {
    console.log("hola !")
}

const yourFunction = (myNumber, yourNumber) => console.log(myNumber * yourNumber)

yourFunction(2, 3);

console.log((function herFunction() {
    console.log(3 + 3)
})());
