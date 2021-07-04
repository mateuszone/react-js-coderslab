const ulList = document.querySelector(".list-group");

const getNames = function () {
  const names = ["Jan", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);

  });
};
//
// getNames().then(data=> {
//   cosole.log(data)
//   data.forEach(name=>{
//     const newLi = document.createElement("li");
//     newLi.innerText = name;
//     ulList.appendChild(newLi)
//   })
// }).catch(error=>{
//   console.log()
// })


getNames().
    then((data) => {
      console.log(data);
      data.forEach((name) => {
        const newLi = document.createElement('li');
        newLi.className = '.list-group-item';
        newLi.innerText = name;
        ulList.appendChild(newLi);
      })
}).catch(error=> {
  console.log(error);
})
