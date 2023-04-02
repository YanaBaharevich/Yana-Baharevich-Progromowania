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

var komp=Math.ceil(Math.random() * 10);
const ja=prompt("Podaj liczbę:");
var f=ja-komp;
if(komp==ja){
   console.log(komp)
   console.log(ja)
   console.log("Dobra robota")
   document.getElementById("ansR").
   innerHTML="Dobra robota";
}else(komp!=ja)
{
    console.log(komp)
    console.log(ja)
    console.log("Nie trafiłaś :<")
    document.getElementById("ans2R").
    innerHTML="Nie trafiłaś :< Pomyliłas się o:"+Math.abs(f);
}

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
*/
var k1=prompt("Podaj 1 liczbę:");
var k2=prompt("Podaj 2 liczbę:");

function nwd(x, y) {
    if (y === 0) {
      return x;
    } else {
      return nwd(y, x % y);
    }
}

console.log("NWD podanych liczb jest:" + nwd(k1, k2));
document.getElementById("nwdR").
innerHTML="NWD jest:"+nwd(k1, k2);
/*
Zadanie 6
*/
var Student1={}
var Student2={}
var Student3={}
Student1.imię="Jakub";
Student1.nazwisko="Wojcech";
Student1.wiek="20";

Student2.imię="Kacper";
Student2.nazwisko="Jamiński";
Student2.wiek="21";

Student3.imię="Barbara";
Student3.nazwisko="Mroczek";
Student3.wiek="19";
console.log(Student1)
console.log(Student2)
console.log(Student3)
/*
Zadanie 7
*/
function createStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const major = document.getElementById("lastName").value;

const student = {
    name: name,
    age: age,
    major: major
};

    document.getElementById("studentName").innerHTML = "Imię: " + student.name;
    document.getElementById("studentAge").innerHTML = "Wiek: " + student.age;
    document.getElementById("studentLastName").innerHTML = "Nazwisko: " + student.major;
}
function showTime(){
    return (new Date()).toLocaleTimeString();
};
document.getElementById('czas').innerHTML = showTime();
setInterval(function() {
    document.getElementById('czas').innerHTML = showTime();
}, 1000);
innerHTML=showTime;