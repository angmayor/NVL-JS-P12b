var allNumb = []
var even = []
var odd =[]
var ask = prompt("¿Cuantos numeros quieres?")

function Result(n) {

    for (i = 0; i < n; i++) {
    var random = Math.floor((Math.random() * 100) + 1);
    allNumb.push(random);
    
    if (allNumb[i] % 2 == 0){
    even.push(allNumb[i]);
       
    }else{
    odd.push(allNumb[i]);}  
   }
} 
