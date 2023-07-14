const words = [
  'pilot',
  'deter',
  'doll',
  'supply',
  'soil',
  'tough',
  'prefer',
  'tune',
  'deport',
  'park',
  'coma',
  'patch',
  'lend',
  'see',
  'cheque',
  'buffet',
  'process',
  'handy',
  'story',
  'treat',
  'route',
  'writer',
  'island',
  'suntan',
  'path',
  'ton',
  'weed',
  'mine',
  'barrier',
  'sermon',
  'zero',
  'queen',
  'defend',
  'charge',
  'unique',
  'embark',
  'slime',
  'chalk',
  'appeal',
  'manual',
  'spite',
  'trap',
  'fair',
  'sin',
  'partner',
  'formal',
  'affect',
  'floor',
  'arm',
  'plant',
];

var palabra = words[Math.floor(Math.random() * words.length)];
let h1 = document.getElementById("randomWord");
h1.innerText = palabra;

function iniciarContador() {
  var valorInicial = 10;
  var segundos = valorInicial;
  var intervalo;
  var contador = document.getElementById("timeSpan");
  var endDiv = document.getElementById("end");
  endDiv.style.display = "none";

  function reiniciarContador() {
    clearInterval(intervalo);
    segundos = valorInicial;
    contador.innerHTML = segundos;
    intervalo = setInterval(function() {
      if (segundos === 0) {
        clearInterval(intervalo);
        mostrarDivTerminado();
      } else {
        contador.innerHTML = segundos;
        segundos--;
      }
    }, 1000);
  }

  function mostrarDivTerminado() {
    endDiv.style.display = "block";
  }

  var input = document.getElementById('text');
  var score = document.getElementById("score");
  var result = document.getElementById("result");
  var scoren = 1

  input.addEventListener('input', function(event) {
    var palabraIngresada = event.target.value;
    var palabraCorrecta = palabra;

    if (palabraIngresada === palabraCorrecta) {
      event.target.value = '';
      palabra = words[Math.floor(Math.random() * words.length)];
      h1.innerText = palabra;
      reiniciarContador();
      score.innerHTML = scoren++;
      result.innerHTML = score.innerHTML;
    }
  });

  document.getElementById('reiniciar').addEventListener('click', reiniciarPagina);


  function reiniciarPagina(){
    location.reload();
  }
  
  reiniciarContador();
}

iniciarContador();
