
// Código del Cuadrado

// Perímetro del cuadrado
// L = lado
function perimetroCuadrado(L) {
  return L * 4;
}

// Área del cuadrado
function areaCuadrado(L) {
  return L * L;
}


// Código del Triángulo

// Perímetro del Triángulo
// A, B y C son los lados.
function perimetroTriangulo(A, B, C) {
  return A + B + C;
}

// área del triángulo
// b = base y h = altura
function areaTriangulo(b, h) {
  return (b * h)/2;
} 

// Código del círculo

// Diámetro
// r = Radio
function diametroCirculo(r) {
  return r * 2;
}

// PI
const PI = Math.PI;

// Círcunferencia
function circunferenciaCirculo(r) {
  const diametro = diametroCirculo(r);
  return diametro * PI;
}

// área
function areaCirculo(r) {
  return (r*r) * PI;
}

// Capturar eventos de HTML

// validar entradas
function validarInput(input) {
    return ( 
      Number(input) >= 1 && 
      !isNaN(input) && 
      input.length >= 1
      ) 
      ? true : false;
}

// perimetro cuadrado
function calcularPerimetroCuadrado() {

  const resultado = document.querySelector(".resultado__perimetro--cuadrado");
  const L = document.getElementById("inputCuadrado").value;

  if (validarInput(L)) {
    const perimetro = perimetroCuadrado( Number(L) )

    resultado.innerHTML = `Perímetro: ${perimetro} cm.` 

  } else alert("Debes ingresar sólo números");
}
const btnCalcularPerimetroCuadrado = document.getElementById("calcularPerimetroCuadrado");
btnCalcularPerimetroCuadrado.addEventListener("click", calcularPerimetroCuadrado);

// área cuadrado
function calcularAreaCuadrado() {
  const resultado = document.querySelector(".resultado__area--cuadrado");
  const L = document.getElementById("inputCuadrado").value;

  if (validarInput(L)) {
    const area = areaCuadrado( Number(L) );

    resultado.innerHTML = `Área: ${area} cm².`;

  } else alert("Debes ingresar sólo números");
}
const btnCalcularAreaCuadrado = document.getElementById("calcularAreaCuadrado");
btnCalcularAreaCuadrado.addEventListener("click", calcularAreaCuadrado);


//  Perímetro Triágulo
function calcularPerimetroTriangulo() {
  const A = document.querySelector("#ladoA").value;
  const B = document.querySelector("#ladoB").value;
  const C = document.querySelector("#ladoC").value;

  if (
    validarInput(A) && 
    validarInput(B) && 
    validarInput(C)
  ) {
    const resultado = document.querySelector(".resultado__perimetro--triangulo");
    const perimetro = perimetroTriangulo( Number(A), Number(B), Number(C) );

    resultado.innerHTML = `Perímetro: ${perimetro} cm.`

  } else alert("Debes ingresar sólo números");
}

// Área Triágulo
function calcularAreaTriangulo() {
  const b = document.getElementById("base").value;
  const h = document.getElementById("altura").value;

  
  if (validarInput(b) && validarInput(h)) {
    const resultado = document.querySelector(".resultado__area--triangulo");
    const area = areaTriangulo( Number(b), Number(h) );

    resultado.innerHTML = `Área: ${area} cm².`;

  } else alert("Debes ingresar sólo números");
}

const btnCalcularPerimetroTriangulo = document.querySelector("#calcularPerimetroTriangulo");
btnCalcularPerimetroTriangulo.addEventListener("click", calcularPerimetroTriangulo);

const btnCalcularAreaTriangulo = document.querySelector("#calcularAreaTriangulo");
btnCalcularAreaTriangulo.addEventListener("click", calcularAreaTriangulo);



//  Perímetro Circulo
function calcularCircuferenciaCirculo() {
  const r = document.querySelector("#radio").value;

  if (validarInput(r)) {
    const resultado = document.querySelector(".resultado__perimetro--circulo");
    const perimetro = circunferenciaCirculo( Number(r) );

    resultado.innerHTML = `Circuferencia: ${perimetro} cm.`

  } else alert("Debes ingresar sólo números");
}

// Área Circulo
function calcularAreaCirculo() {
  const r = document.querySelector("#radio").value;
  
  if (validarInput(r)) {
    const resultado = document.querySelector(".resultado__area--circulo");

    const area = areaCirculo( Number(r) );
    resultado.innerHTML = `Área: ${area} cm².`;

  } else alert("Debes ingresar sólo números");
}

const btnCalcularCircuferenciaCirculo = document.querySelector("#calcularCircuferenciaCirculo");
btnCalcularCircuferenciaCirculo.addEventListener("click", calcularCircuferenciaCirculo);

const btnCalcularAreaCirculo = document.querySelector("#calcularAreaCirculo");
btnCalcularAreaCirculo.addEventListener("click", calcularAreaCirculo);

// Triángulo isóseles altura

function alturaTrianguloIsoseles(L1, L2, base) {
  // Utilizando Pitágoras
  return Math.sqrt( 
    Math.pow(L1, 2) - (Math.pow(base , 2) / 4)
  );
}

function calcularAlturaTriangulo() {
  const lado1 = document.querySelector("#iso-lado-1").value;
  const lado2 = document.querySelector("#iso-lado-2").value;
  const base = document.querySelector("#iso-base").value;

  if (
    validarInput(lado1) && 
    validarInput(lado2) && 
    validarInput(base) && 
    lado1 === lado2 &&
    (
      (Number(lado1) + Number(lado2)) > Number(base)
    )
  ) {
    const resultado = document.querySelector(".resultado__altura-triangulo");

    const altura = alturaTrianguloIsoseles( 
      Number(lado1), 
      Number(lado2), 
      Number(base) 
    );

    resultado.innerHTML = `Altura: ${altura} cm.`;

  } else alert("Debes ingresar sólo números y 2 lados iguales");
}

const bntCalcularAlturaTriangulo = document.querySelector("#calcularAlturaTriangulo");
bntCalcularAlturaTriangulo.addEventListener("click", calcularAlturaTriangulo);
