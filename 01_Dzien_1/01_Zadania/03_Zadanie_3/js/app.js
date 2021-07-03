const randomize = (param1,param2, callback) => {
    if (typeof callback === "function") {
        return callback(Math.floor(Math.random() * (param1 - (param2 + 1)) + (param2 + 1)));
    }
}

function losowaliczba (number) {
    return number
}

const liczba = randomize(1,3, losowaliczba);
console.log(liczba);