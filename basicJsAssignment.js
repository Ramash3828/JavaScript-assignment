// // Convert ana to vori
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return "Please Enter your valid number.";
    }
    let total = 0;
    let vori = ana / 16;
    total = vori;
    return total;
}
console.log(anaToVori(60));



// // pandaCost
function pandaCost(singra, samosa, zilapi) {

    if (typeof singra != 'number' || typeof samosa != 'number' || typeof zilapi != 'number') {
        return "Please type the valid quantity.";
    }

    let totalCost = 0;
    let totalSingraCost = singra * 7;
    let totalSamosaCost = samosa * 10;
    let totalZilapiCost = zilapi * 15;

    totalCost = totalSingraCost + totalSamosaCost + totalZilapiCost;
    return totalCost;

}
console.log(pandaCost(10, 5, 12));


// // Picnic budget
function picnicBudget(person) {
    if (typeof person != 'number') {
        return "Please Enter your valid number.";
    }
    let parsed = parseInt(person);
    let totalPrice = 0;
    if (parsed > 200) {
        let firstHundredPrice = 100 * 5000;
        let secondHundredPrice = 100 * 4000;
        let thirdHundredPrice = (parsed - 200) * 3000;
        totalPrice = firstHundredPrice + secondHundredPrice + thirdHundredPrice;
        return totalPrice;
    } else if (parsed > 100) {
        let firstHundredPrice = 100 * 5000;
        let secondHundredPrice = (parsed - 100) * 4000;
        totalPrice = firstHundredPrice + secondHundredPrice;
        return totalPrice;
    } else if (parsed <= 100) {
        let firstHundredPrice = parsed * 5000;
        totalPrice = firstHundredPrice;
        return totalPrice;
    }

}

console.log(picnicBudget(300))


// // return biggest friend name of an array

function oddFriend(arraylist) {
    if (typeof arraylist == 'number') {
        return "Please Enter valid array.";
    }

    let oddLength = "";
    for (let i = 0; i < arraylist.length; i++) {
        let currentArray = arraylist[i];
        if ((currentArray.length % 2) != 0) {
            return oddLength = currentArray;
        }
    }
}
console.log(oddFriend(['habl', 'hjk', 'bablu', 'jkl']));

// facterial using function
function demo(i) {
    if (i <= 1) {
        return 1;
    }
    return i * demo(--i);
}

console.log(demo(5));

// Search the name get the value of an object
const products = [
    { name: "del laptop", price: 45000 },
    { name: "hp laptop", price: 48000 },
    { name: "asus laptop", price: 38000 },
    { name: "apple watch", price: 3000 },
    { name: "hp watch", price: 4000 },
    { name: "lenevo laptop", price: 40000 },
];

function product(item, searchText) {
    for (let product of item) {
        if (product.name.includes(searchText)) {
            console.log(product);
        }
    }

}

product(products, "laptop")

// grass the number only 2 (not 3) for next round figer  and return an array

let grades = [38, 37, 44, 70, 99, 77, 62];

function grade(numbers) {
    let result = [];
    for (let number of numbers) {
        if (number < 38) {
            result.push(number);
        } else {
            let nextMultiple = (Math.ceil(number / 5)) * 5;
            let difference = Math.abs(nextMultiple - number);
            if (difference < 3) {
                result.push(nextMultiple);
            } else {
                result.push(number);
            }
        }
    }
    return result;
}
console.log(grade(grades));