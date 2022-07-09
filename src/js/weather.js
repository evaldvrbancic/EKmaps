alert("test");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "c1325d5279c30a84d88dc3e254fa213d";

function external(){
  
}
//ajax here
const url = "https://api.openweathermap.org/data/2.5/forecast?=524901&appid=$c1325d5279c30a84d88dc3e254fa213d";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]
            }.svg`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${weather[0]["description"]
            }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
        li.innerHTML = markup;
        alert(Math.round(main.temp));
        list.appendChild(li);
    })
    .catch(() => {
    });