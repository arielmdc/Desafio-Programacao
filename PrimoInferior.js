


function numeroPrimo(num) {
    let numeros = new Array();
    for (var i = 0; i <= num; i++) {
      if (ePrimo(i)){
        numeros.push(i);
      }
    }
    var ultimo = numeros[numeros.length - 1];
    return ultimo;
  }
  function ePrimo(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }
  console.log("numero 10: ",numeroPrimo(10));
  console.log("Numero 30: ",numeroPrimo(30));