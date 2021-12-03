
// Código del Cuadrado

// Perímetro del cuadrado
// L = lado
function perimetroCuadrado(L){
  return L * 4;
}

// Área del cuadrado
function areaCuadrado(L){
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
function areaTriangulo(b, h){
  return (b * h)/2;
} 

// Código del círculo

// Diámetro
// r = Radio
function diametroCirculo(r){
  return r * 2;
}

// PI
const PI = Math.PI;

// Círcunferencia
function perimetroCirculo(r){
  const diametro = diametroCirculo(r);
  return diametro * PI;
}

// área
function areaCirculo(r){
  return (r*r) * PI;
}