


const book_info = document.querySelector(".book-info");
const input = document.querySelector(".form-control");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const numerISBN = input.value
    const URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${numerISBN}`;
    fetch(URL)
        .then(response => response.json())
        .then(data=>
            console.log(data.items[0].volumeInfo.title)
            const newH2 = document.createElement("h2");
        newH2.className = "book-info";

        .catch(error => console.log(error))
})