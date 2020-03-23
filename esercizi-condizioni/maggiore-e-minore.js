/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

// numero 1

var numbers = [3,-1,4,-2];
var somma =  [Math.max (...numbers)]  +  [ Math.min (...numbers)];

console.log(somma);

//numero 2

var numbers =[3,-1,4,-2];

var max = Math.max (...numbers);
var min = Math.min(...numbers);

console.log(max, min);
