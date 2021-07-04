URL = 'https://pokeapi.co/api/v2/pokemon'
const ul = document.querySelector(".list-group");


fetch(URL)
    .then(response => response.json())
    .then(data => data.results.forEach(item=> {
        const newLi = document.createElement('li');
        newLi.className = '.list-group-item';
        // console.log(item.name)
        // console.log(data)
        newLi.innerText = item.name;
        ul.appendChild(newLi);
    }))

