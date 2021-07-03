// function sum(a, b, c) {
//     return a + b + c;
// }
// const tablica = [1,2,3]
// const res1 = sum(...tablica);
// console.log(res1);
//
// const arr = [1, 2, 3];
// const res2 = sum.apply(null, arr);
// console.log(res2); // 6
//
//
// //
// // const str = "text";
// // const chars = [ ...str ];
// // console.log(chars);
// // // ["t", "e", "x", "t"]
// //
// // console.log(typeof str);
// // // string
// // console.log(typeof chars);
// // // object
// //
// // const x = [3,4];
// // const y = [1,2,...x,7];
// // console.log(y);
//
// const users = ['Ben','Anna','John'];
// const usersCopy = [...users];
//
// const state = {
//   isActive: false,
//   inputValue: "Your name"
// };
//
// const stateCopy = {...state};
//
// console.log(stateCopy);
// console.log(state);
//
// function whatever(a,b,...args){
//     console.log("a",a)
//     console.log("b",b)
//     console.log("args",args)
// }
// const a = 2
// const b = 4
//
// console.log(`suma dwóch liczb ${a+b}`)
//
// const arr = ['snow','rain','sun']
//
// const [w1,,w3] = arr
// console.log(w1);
// console.log(w3);
// const [w1,...other] = arr;
//
// console.log(other);
//
// const slider = {
//
//   type: "infinite",
//
//   numberOfItems: 10,
//
//   center: true,
//
//   autoStart: true
//
// }
// // shift + f6 najlepsze do zmiany nazwy z autoamtu wszedzie
// const randomize = (min, max, callback) => {
//     if(typeof callback !== "function") {
//         console.log("Not a function!");
//     }
//     const random_number = Math.floor(Math.random() * (max - min) + min);
//     callback(random_number);
// };
//
// randomize(1,100,(number) => console.log(number));
//
// const myPromise = new Promise((resolve, reject) => {
//     // resolve jak sie wykona reject jak sie nie wykona
// })

const numbers = [4, 12, 23, 76, 4];

function add(accumulator, currentValue) {
    return accumulator + currentValue;
}


function customReduce( arr, callback) {
    let accumulator = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];

        if (i === 0) {
            if (!accumulator) {
                accumulator = currentValue;
            }
            else {
                accumulator += currentValue;
            }
            continue;
        }
        accumulator = callback(accumulator, currentValue)
    }
    return accumulator;
}
const dodawanie = customReduce(numbers,add)
const mnozenie = customReduce(numbers, (a,b) => a * b);
console.log(dodawanie);
console.log(mnozenie);