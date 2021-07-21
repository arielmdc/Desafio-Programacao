min = Math.ceil(1);
max = Math.floor(10);
var array = [...Array(20)].map(()=>Math.floor(Math.random() * (max - min)) + min);
var count = {};
var max = 0;
var maxnumero =0;
array.forEach(function(i) { count[i] = (count[i]||0) + 1; if(max < count[i]){max = count[i]; maxnumero = i}});

console.log("Array sorteado:",array);
//console.log(count);
console.log("O número que mais se repete é:", maxnumero);
console.log("Ele se repete", max,"vezes");