
// -----------------  HELPERS -----------------
// Funciones que no son parte de la lógica de negocios, pero son necesarias para el funcionamiento del código

// par o impar
function esPar(numero) {
  return numero % 2 === 0;
}

// calcular Media Aritmética.
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// calculadora mediana 
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

    return mediana;
  } else {
    const personaMitad = lista[mitad];

    return personaMitad;
  }
}

// -----------------  MEDIANA GENERAL -----------------

// obteniendo salarios
const salariosArg = argentina.map(function (persona) {
  return persona.salary;
});

// ordendo salarios
const salariosArgSorted = salariosArg.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// -----------------  MEDIANA TOP 10% -----------------

// obtiene los indices del 10% del array de salarios
const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length;

// obtiene el un array con el 10% del array de salarios
const salariosArgTop10 = salariosArgSorted.slice(
  spliceStart,
  spliceCount,
);

// calcula la media del top 10% de salarios
const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log(
  medianaGeneralArg,
  medianaTop10Arg,
);