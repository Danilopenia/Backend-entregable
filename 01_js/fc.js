let cuenta = 0;

function contador(numero) {
  cuenta = cuenta + numero;
  console.log(cuenta);
}

contador(2);
contador(5);
contador(10);


const concatenar = (tercera, cuarta) => {
  let primera = "hola";
  let segunda = "mundo";
  console.log(primera, segunda, tercera, cuarta);
};


concatenar("soy", "dani");

function corroborar (arreglo) {
    const tiposDeDato = arreglo.map(cadaUno=>({valor: cadaUno, tipoDeDato: typeof cadaUno}))
    console.log(tiposDeDato);
    return tiposDeDato
}

const resultado = corroborar([1, "hola", null, false])
corroborar([NaN, undefined, true, concatenar, resultado])
