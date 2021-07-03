// const $title = document.getElementById("title");
// const $completed = document.getElementById("completed");
// const $author = document.getElementById("author");
// const API_URL = 'https://jsonplaceholder.typicode.com/'
// // todos/1
// // users/:userId
//
// async function getData() {
//     const todoresponse = await fetch(`${API_URL}todos/1`)
//     const data = await response.json()
//     const {userId, title, completed} = data;
//     const userresponse = await fetch(`${API_URL}users/${userId}`)
//     const user = await userresponse.json()
//     console.log(user)
//     const {name} = user
//     console.log($title)
//     $title.innerText = title
//     $completed.innerText = completed
//     $author.innerText = name
//
//
// }
//
// getData()

// wersja callback a ponizej bedzie wersja z promisem
// const getUserData = (next) => {
//     setTimeout(() => {
//         console.log('1. get user data')
//         next()
//     }, 800)
// }
// callback wyzej zamineiony na promise
// const getUserData = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('1. get user data')
//             resolve()
//         }, 800)
//
//     })
// }
//
// const validateData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2. validate')
//             reject('validation error')
//         }, 900)
//     })
// }
//
// const registerUser = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('3. register')
//             resolve('zarejestrowano nowego uzytkownika')
//         }, 400)
//     })
// }
//
// const sendEmail = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('4. send email')
//             resolve('Email has been sent', 'dupa')
//         }, 200)
//     })
// }
//
// getUserData()
//     .then(validateData)
//     .then(registerUser)
//     .then((res) => {
//         console.log(res);
//     })
//     .then(sendEmail)
//     .then((res) => {
//         console.log('End!');
//         console.log(res);
//     })
//     .catch(err => {
//     console.log('Error: ', err);
//     })


// // wytłumaczony promise
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('working...')
//         resolve(2)
//     }, 800)
// })
//     .then((response) => {
//         console.log('end!')
//         return response * 2
//     })
//     .then(res => {
//         console.log(res)
//     })

// WSTEP DO CALLBACKOW

// function someFunction(callback) {
//     // tutaj mozna robic rozne skomplikowane rzeczy a na sam koniec jak to sie wykona wywołuje moj parametr
//     callback()
// }
//
// const a = 'blablabla'
// const logB = function () {
//     console.log('b')
// }
//
// someFunction(b)

// function logA(callback) {
//     setTimeout(() => {
//         console.log('a')
//
//         const value = 'this is from a'
//         callback(value)
//     }, 1000)
// }
// function logB(param) {
//     console.log('b')
//     console.log(param)
// }
//
// logA(logB)
// const arr = [1, 3, 5].map(elem => elem * 2)
//
// console.log(arr)

// const arr = [1, 3, 5]
// const arr2 = [1, 3, 5]
//
// // function multiply() {
// //     for (let i = 0; i < arr.length; i++) {
// //         arr[i] = arr[i] * 2
// //     }
// // }
//
// const multiplay = elem => elem * 2
// const add = elem => elem + 22
// const odd = elem => elem - 12
//
// const transfromArray = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = callback(arr[i])
//     }
// }
// //
// // multiply()
// // console.log(arr)
// // transfromArray(arr2,multiplay)
// // transfromArray(arr2,add)
// transfromArray(arr2,odd)
// console.log(arr2)
// UZYWANIE THIS
// const person = {
//     name: 'Tom',
//     showName() {
//         const logName = () => {
//             console.log(this)
//         }
//         logName()
//     },
//     address: {
//         city:'Warsaaw',
//         street: 'Złota',
//         showAddress: () => {
//             console.log(`${this.city}, ${this.street}`)
//         }
//     }
// }
//
// person.showName()
// person.address.showAddress()
//
// const logName = () => {
//     console.log(this)
// }
//
// const logName2 = function () {
//     console.log(this)
// }
// logName()
// logName2()
//
//
// const dog2 = {
//     name: 'Spike',
//     showThisDog: function () {
//         console.log(this)
//     }
// }
//
// // dog.showThisDog()
//
// const Cat = function () {
//     this.name = 'Mruczek'
// }
// Cat.prototype.showThisCat = function () {
//     console.log(this)
// }
//
// const cat = new Cat(); // {name: "mruczek"
// cat.showThisCat()


// ASYNC AWAIT ZAMIAST PROMISOW
const getUserData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('1. get user data')
            resolve({name: 'Jon'})
        }, 800)

    })
}

const validateData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. validate')
            reject('validation error')
        }, 900)
    })
}

const registerUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. register')
            resolve({ name: user.name, id: 232})
        }, 400)
    })
}

const sendEmail = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. send confirmation email to username', user.name, ' id:', user.id)
            resolve('Email has been sent', 'dupa')
        }, 200)
    })
}

// getUserData()
//     .then(userData => {
//         return registerUser(userData)
//     })
//     .then(registerUser => {
//         return sendEmail(registerUser)
//     })
//     .then((res) => {
//         console.log('End!')
//     })

async function someAsyncFunction() {
    const userData = await getUserData()
    const registeredUser = await registerUser(userData)
    await sendEmail(registeredUser)

    console.log('end!')
}

someAsyncFunction()