const URL = "https://jsonplaceholder.typicode.com/todos/1"
const titleTag = document.querySelector("#title");
const completedTag = document.querySelector("#completed");
const authorTag = document.querySelector("#author");
const range = [...Array(10).keys()]
// const SECONDURL = `https://jsonplaceholder.typicode.com/users/:${userId}`
async function getUsers() {
    try {
         // URL = `https://jsonplaceholder.typicode.com/todos/${id}`
         const result = await fetch(URL);
         const data = await result.json();
         const userId = data.userId;
         const title = data.title;
         const completed = data.completed;
         const usertodo = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
         const todoData = await usertodo.json();
         const username = todoData.name;
         authorTag.innerText = username;
         titleTag.innerText = title;
         if (completed === true) {
             completedTag.innerText = "Zrobione"
             completedTag.className = 'badge-success';
         } else {
             completedTag.innerText = "Nie zrobione";
             completedTag.className = 'badge-danger';
         }

    } catch (err){
        console.log(err)
    }
}
getUsers()
// range.forEach( (e) => getUsers(e))
