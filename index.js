"use strict"

let arr = [7, 1, 6, 4, 5]

function twoSum(arr, num) {
    let temporaryArr = []
    let quantity = 0
    arr.forEach( (element, index) => {
        if(temporaryArr.length < 1) {
            return temporaryArr.push(element)
        }

        let difference = num - element
        for (let i = 0; i < temporaryArr.length; i++) {
            if (difference == temporaryArr[i]) {
                console.log( `index ${i}, ${index}` )
                console.log( `${arr[i]} + ${element} = ${num}`)
                quantity++
                
            }
        }
        temporaryArr.push(element)
    });
    console.log('Кол-во: ' + quantity)
    /*arr.forEach(element => {
        for(let i = 10; i > element; i--) {
            console.log(element + ': ' + i)
        }
    });*/ 
}

let arr1 = []
for(let i = 0; i < 1000; i++) {
    arr1.push(Math.floor (Math.random () * (1000 - 1 + 1)) + 1)
}
twoSum(arr1, 10)
console.log(5)