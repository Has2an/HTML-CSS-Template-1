let days = document.getElementById("daysDate");
let dateNaw = new Date();
let dateOfdays = dateNaw.getDate();
days.innerText = `${dateOfdays}`;

let hours = document.getElementById("hoursDate");
let dateOfhours = dateNaw.getHours();
hours.innerText = `${dateOfhours}`;

let minutes = document.getElementById("minutesDate");
let dateOfminutes = dateNaw.getMinutes();
minutes.innerText = `${dateOfminutes}`;

let seconds = document.getElementById("secondsDate");
let dateOfseconds = dateNaw.getSeconds();
seconds.innerText = `${dateOfseconds}`;

let years = document.getElementById("mastersEventdate");
let dateOfyears = dateNaw.getFullYear();
years.innerText = `Tech Masters Event ${dateOfyears}`;
