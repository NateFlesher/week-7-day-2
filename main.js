//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function displayFavFoods(obj) {
    for (let i in obj) {
        if (Array.isArray(obj[i])) {
            console.log(`${i}: `)
            for (let j in obj[i]) {
                if (typeof obj[i][j] === 'object') {
                    for (let k in obj[i][j]) {
                        console.log(`${k} : ${obj[i][j][k]}`)
                    }

                }
                else if (typeof obj[i] === "object") {
                    console.log(obj[i][j])
                }
            }
        }
        else {
            console.log(`${i}: `)
            console.log(`${obj[i]}\n`)
        }

    }
}
displayFavFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo = () => {
        console.log(`name ${this.name} age ${this.age}`)
        return
    }
    addAge = (x = 1) => {
        this.age += x
        return
    }
}

let nate = new Person('nate', 25)
let x = new Person('x', 28)
nate.printInfo()
x.printInfo()
nate.addAge(3)
nate.printInfo()
x.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

*/

const bigSmall0 = (num) => {
    return new Promise( (x,y) => {
        if(num > 10){
            x(true)
        } else {
            y(false)
        }
    })
}

function bigSmall(s){
    bigSmall0(s.length)
    .then( () => {
        console.log(`${s} is a big word`)
    })
    .catch( () => {
        console.log(`${s} is a small word`)
    })
}

bigSmall("troglodyte")



// =============Codewars #1 ============//
/*

    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd";
  }


  // =============Codewars #2 ============//
/*

    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function boolToWord( bool ){
    return bool ? "Yes": "No";
  }