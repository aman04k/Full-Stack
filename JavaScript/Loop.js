// let num = 10
// for(let i=0; i<num; i++){   
//     console.log("hello")
// }

// let sum = 0
// for(let i=0; i<=5; i++){
//     sum = sum + i
//     console.log(sum)
// }
// console.log(sum)

// while loop
 
// while (condition){
//     code to be executed
// }

// let sum = 0
// let i = 0
// while(i<=5){
//     sum = sum + i
//     console.log(sum)
//     i++
// }
// console.log(sum)




// DO while loop

// do{
//     code to be executed
// }
// while(condition)

// let number = 0
// let sum =0

// do{
//     sum = sum + number
//     console.log(sum)
//     number++
// }
// while(number<=10)

// Assignment 
// 1. factorial of a number
// 3. Prime number
// 4. Reverse number


// 1. factorial of a number
// let num = 4
// let fact = 1
// for(let i=1; i<=num; i++){
//     fact = fact * i 
// }
// console.log(fact)




// 4. Reverse number

// let num = [1,2,3,4,5]
//  let start = 0
//  let end = num.length-1

//  while(start<=end){
//     let temp = num[start]
//     num[start] = num[end]
//     num[end] = temp
//     start++
//     end--
//  }
//  console.log(num)



// 3. Prime number
// let num = 12
// let count = 0
// for(let i=1; i<=num; i++){
//     if(num%i == 0){
//         count++
//     }
// }
// if(count == 2){
//     console.log("Prime number")
// }
// else{
//     console.log("Not Prime number")
// }


let num = 11
let count = 0

for(let i=0; i<=num; i++){
    if(num%i==0){
        count++
    }
}
if(count == 2){
    console.log("Prime number")
}   
else{
    console.log("Not Prime number")
}

// let num = [1,2,3,4,5]
// let start = 0
// let end = num.length-1

// while(start<=end){
//     let a = num[start]
//     num[start] = num[end]
//     num[end] = a
//     start++
//     end--
// }
// console.log(num)