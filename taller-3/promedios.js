
// Función para calcular Promedio o Media Aritmética.
function calcularMediaAritmetica(lista) {
  
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
} 

// Función para calcular Mediana.

function calcularMediana(lista){
  const listaOrdenada = ordenarLista(lista);

  let mediana;

  const mitadLista = parseInt(listaOrdenada.length / 2);
  
  if(esPar(listaOrdenada.length)){
    const dosElementosMedio = listaOrdenada.slice(mitadLista - 1, mitadLista + 1);
  
    mediana = calcularMediaAritmetica(dosElementosMedio);
  
  } else {
    mediana = listaOrdenada[mitadLista];
    console.log("es impar", mediana);
  }

  return mediana;
}

function ordenarLista(lista) {
  const ordenarAscendente = (a, b) => a - b;
  
  const listaOrdenada = [...lista].sort(ordenarAscendente);
  
  return listaOrdenada;
}

function esPar(numero) {
  return (numero % 2 === 0) ?  true :  false;
}

// Función para calcular Moda.

function calcularModa(lista) {
  // objeto que contendrá la cantidad de veces que se repite cada elemento,
  const listaContador = {};

  lista.map(
    function(elemento) {
      if(listaContador[elemento]){ 
        // si ya existe dentro del objeto + 1.
        listaContador[elemento] += 1;

      } else { // si no existe dentro del objeto = 1.
        listaContador[elemento] = 1;
      } 
    }
  );

  // convertir el objeto a un array ordenado según se repitan
  const listaContadorOrdenada  = Object.entries(listaContador).sort(
    function (a, b) {
        return a[1] - b[1];
    }
  );

  const max = listaContadorOrdenada[listaContadorOrdenada.length - 1][1];
  // Extraer aquellos elementos con la misma cantidad de repetición.
  const moda = listaContadorOrdenada.filter( (elemento) => max === elemento[1] );

  return moda;
}

// promedio ponderado - BONUS
// Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.
// N = Note | C = Credit.
// Fórmula: [(N1*C1) + (N2*C2) + (N3*C3)] / (C1 + C2 + C3)

// 1) Definir el conjunto de números junto al peso de cada elemento
const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

// 2) Multiplicar cada número de la lista por su peso
const notesWithCredit = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});

// 3) Sumar todos los elementos del arreglo de elementos multiplicados por su peso
const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

// 4) Sumar todos los pesos (créditos)
const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfCredits = credits.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

// 5) Hacer la división entre ambas “sumas”
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

