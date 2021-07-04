API_URL = 'https://fer-api.coderslab.pl/v1/holidays';
example_url = 'https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL'
TOKEN = 'e92601251-c0a2-4s63-v73f-54041195480f'
const countries = ["PL", "GB", "US"];
const lista = document.querySelector(".list");

fetch(`${API_URL}?key=${TOKEN}&country=${countries[0]}`)
    .then(res => res.json())
    .then(data => {
        return data.holidays
    })
    .then(holidays => {
        for (let i = 0; i < holidays.length; i++) {
            let holidayName = document.createElement('h3');
            holidayName.innerText = holidays[i].name;
            let holidayDate = document.createElement('div');
            holidayDate.innerText = holidays[i].date;
            // console.log(holidays[i].name, holidays[i].date);
            lista.appendChild(holidayName);
            lista.appendChild(holidayDate);
        }
    })



