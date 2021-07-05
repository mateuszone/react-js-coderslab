const API_URL = "https://randomuser.me/api/"
const photo = document.querySelector(".card-img-top");
const nameSurname = document.querySelector(".card-title");
const email = document.querySelector(".card-text");

async function personaldetails() {
    const fetchdata = await fetch(API_URL);
    const data = await fetchdata.json()
    const emailData = data.results[0].email
    const largePicture = data.results[0].picture['large']
    const firstName = data.results[0].name['first'];
    const lastName = data.results[0].name['last'];
    photo.src = largePicture;
    nameSurname.innerText = `${firstName} ${lastName}`
    email.innerText = emailData;

}
personaldetails()