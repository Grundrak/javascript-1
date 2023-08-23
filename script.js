//task1
const age=25
const isStudent=true
const favoriteColors=['Brown','Blue']

//task2
const MyName="Ahmed"+' '+'Sajir'

//taks3

const  etat= isStudent ? "I am a student ." :"I am not a student .";
const task3=MyName+' '+age+' '+etat
console.log(task3);
//task5
const Myfvcolor='blue'
const MyfvAnimal='cat'
let FavoriteAnimal=prompt("entrez votre animal prefere")
let FavoriteColor=prompt("entrez votre couleur prefere")

if( MyfvAnimal&&Myfvcolor==FavoriteAnimal&&FavoriteColor  )
console.log("Congralutation we have same Favorite color and animal");
else
console.log("Unforntly we have not the same Favorite color and color");

//task6
let Number=prompt("Put one number to check")
let NumberCheck=`${yourNumber > 0 ? 'Your number is positive' :
 yourNumber < 0 ? 'Your number is negative' : 
 yourNumber === 0 ? 'Your number is zero' : null}`
console.log(NumberCheck);

//task8
let Value =  prompt("Put your value to check")
let Valuecheck = `${Value ? true : false}`
console.log(Valuecheck);

