let hor = document.querySelector('#horas');
let min = document.querySelector('#minutos');
let sec = document.querySelector('#segundos');

setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hor.style.transform =  `rotateZ(${hh+(mm/12)}deg)`;
min.style.transform =  `rotateZ(${mm}deg)`;
sec.style.transform =  `rotateZ(${ss}deg)`;

let hours = document.getElementById('hour');
let minut = document.getElementById('Minute');
let secon = document.getElementById('Second');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

hours.innerHTML = h;
minut.innerHTML = m;
secon.innerHTML = s;

})