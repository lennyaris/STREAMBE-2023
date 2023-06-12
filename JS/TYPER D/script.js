const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];

var palabra = words[Math.floor(Math.random() * words.length)];
let h1 = document.getElementById("randomWord")
h1.innerText = palabra

var input = document.getElementById("text").value
if (input === palabra)
  n = +3

var n = 10;
var l = document.getElementById("timeSpan");
window.setInterval(function(){  
l.innerHTML = n;
n--;
},1000);
if (l === 0)
    clearInterval(timeInterval);
