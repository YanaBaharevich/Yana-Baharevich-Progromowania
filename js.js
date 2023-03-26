/*
Zadanie 1
*/
var a=10;
var b=20;
let add=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let mod=a%b;
//a)
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log("wynik to:"+mod);
//b)
document.getElementById("addR").
innerHTML=add;
document.getElementById("mulR").
innerHTML="wynik to:"+mul;
/*
Zadanie 2
*/
var s1=3;
var s2=4;
var s3=5;
var p=(s1+s2+s3)/2;
var area=Math.sqrt(p*(p-s1)*(p-s2)*(p-s3))
console.log("Pole trójkąta:"+area);
document.getElementById("areaR").
innerHTML="Pole trójkąta:"+area;
/*
Zadanie 3
var x=Math.ceil(Math.random() * 11);
var y=prompt()
console.log(x);
console.log(y);
var z = x==y;
console.log(z);
document.getElementById("rowR").
innerHTML=z;
Zadanie 3.1
*/
var komp=Math.ceil(Math.random() * 10);
const ja=prompt("Podaj liczbę:");
var f=ja-komp;
if(komp===ja){
   console.log(komp)
   console.log(ja)
   console.log("Dobra robota")
   document.getElementById("ansR").
   innerHTML="Dobra robota";
}else{
    console.log(komp)
    console.log(ja)
    console.log("Nie trafiłaś :<")
    document.getElementById("ans2R").
    innerHTML="Nie trafiłaś :< Pomyliłas się o:"+Math.abs(f);
}
/*
Zadanie 4
*/
const l1=parseFloat(prompt("Podaj liczbę 1:"));

const l2=parseFloat(prompt("Podaj liczbę 2:"));

const l3=parseFloat(prompt("Podaj liczbę 3:"));

if(l1 >= l2 && l1 >= l3){
console.log("Liczba 1 jest najweksza "+l1)
}else if(l2 >= l1 && l2 >= l3){
    console.log("Liczba 2 jest najweksza "+l2)
}else{
    console.log("Liczba 3 jest najweksza "+l3)
}
