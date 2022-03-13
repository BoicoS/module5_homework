 var a = prompt("Send a number");
 +a;
 console.log (typeof a);

 if(typeof a == 'number' || !isNaN(+a)){
var result = (a%2 == 0)?"четное":"нечетное";
 console.log(result);
 }

 else {
 console.log("Упс, кажется ошибка.");
 }