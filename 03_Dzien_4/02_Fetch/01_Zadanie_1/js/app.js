// const book_info = document.querySelector(".book-info");
// const input = document.querySelector(".form-control");
// const submitBtn = document.querySelector("button");
//
// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const numerISBN = input.value
//     const URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${numerISBN}`;
//     fetch(URL)
//         .then(response => response.json())
//         .then(data=>
//             console.log(data.items[0].volumeInfo.title)
//             const newH2 = document.createElement("h2");
//         newH2.className = "book-info";
//
//         .catch(error => console.log(error))
// })
//
//

// const data = {
//   name: "Polonez",
//   brand: "FSO"
// };
//
// fetch("https://example.com/api/cars", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json"
//   }
// });
let numerISBN = 0
const bookInfo = document.querySelector(".book-info");
const searchBtn = document.querySelector("button");


searchBtn.addEventListener("click",(e) => {
    const input = document.querySelector(".form-group input");
    numerISBN = input.value;
    URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${numerISBN}`
    e.preventDefault();
    numerISBN = input.value;
    fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            let bookTitle = data.items[0].volumeInfo.title;
            let titleElement = document.createElement('h2');
            titleElement.innerText = bookTitle;
            titleElement.className = '.book-info';
            bookInfo.appendChild(titleElement);
        })
        .catch(err => {
            let errorElement = document.createElement('h2');
            errorElement.innerText = err;
            bookInfo.appendChild(errorElement);
        })

})

