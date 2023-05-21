//Zadanie 1
class prostokat{
    constructor(wysokosc,szerokosc,nazwa){
        this.wysokosc=wysokosc;
        this.szerokosc=szerokosc;
        this.nazwa=nazwa;
    }
    obwod(){
        return 2*this.wysokosc+2*this.szerokosc;
    }
    pole(){
        return this.wysokosc*this.szerokosc;
    }
    zmiananazwy(nowa){
        this.nazwa=nowa;
    }
    porownaj(inny){if (this.pole()!=inny.pole()){
        if(this.pole()>inny.pole()){
            return this}
            else{
                return inny
            }
    }else{
        return 0}

}
}
const pr1=new prostokat(4,10,"numer 1");
const pr2=new prostokat(5,5,"numer 2");
const pr3=new prostokat(5,5,"numer 3");
console.log(pr1.obwod(),pr1.pole());
console.log(pr2.obwod(),pr2.pole());
console.log(pr3.obwod(),pr3.pole());
console.log("Większy prostokąt to "+pr1.porownaj(pr2).nazwa);
console.log("Większy prostokąt to "+pr2.porownaj(pr3).nazwa);

//Zadanie 2

class trojkat{
    constructor(wysokosc,dlugosc,podstawa,nazwa){
        this.wysokosc=wysokosc;
        this.dlugosc=dlugosc;
        this.nazwa=nazwa;
        this.podstawa=podstawa;
    }
    obwod(){
        return this.podstawa+2*this.dlugosc;
    }
    pole(){
        return 1/2*this.podstawa*this.wysokosc;
    }
    porownaj(inny){if (this.pole()!=inny.pole()){
        if(this.pole()>inny.pole()){
            return this}
            else{
                return inny
            }
    }else{
        return 0}
}
    zmiananazwy(nowa){
    this.nazwa=nowa;
    }
}


const tro1=new trojkat(4,10,"numer 1");
const tro2=new trojkat(5,5,"numer 2");
const tro3=new trojkat(5,5,"numer 3");

//Zadanie 3
class Trapez{
    constructor(nazwa,wysokość,podstawa1,podstawa2){
        this.wysokość=wysokość;
        this.nazwa=nazwa;
        this.podstawa1=podstawa1;
        this.podstawa2=podstawa2;
    }
    pole(){
    return 1/2*(this.podstawa1+this.podstawa2)*this.wysokość;
    }
    zmiananazwy(nowa){
        this.nazwa=nowa;
    }
}

const tr1=new Trapez(4,10,"numer 1");
const tr2=new Trapez(5,5,"numer 2");
const tr3=new Trapez(5,5,"numer 3");

//Zadanie 4
function zad4(f1,f2){
    {if (f1.pole()!=f2.pole()){
        if(f1.pole()>f2.pole()){
         return console.log(f1.nazwa)}
         else{
         console.log(f2.nazwa)
                }
        }else{
            return 0}}}
zad4(pr1,tr2);
zad4(tr3,tro3);

//Zadanie 6

//lab 6+
//Zadanie 1

const tablica=[1,2,3,4,4,5,6,7,8,9,10]
var suma=0;
const parzyste=[]
var średnia=0;
var najw=0;
tablica.forEach(function(element){
suma+=element;
});
console.log(suma);

tablica.forEach(function(element){
    if (element%2===0){
    parzyste.push(element)
    }
    });
console.log(parzyste);

const przetworzonaTablica = tablica.map(element => element * 3); 
console.log(przetworzonaTablica); 
tablica.push(68369)

tablica.forEach(function(element,index){
    if (element===68369){
    console.log(index)
    }
    });
tablica.forEach(function(element){
    średnia+=element
    });
średnia/2
console.log(średnia);

function max(tablica) {
    let max = tablica[0];
    tablica.forEach(function(e) {
      if (e > max) max = e;
    });
    return max;
  }
console.log(max(tablica))

function ilosc(tablica,liczba){
    let il=0;
    tablica.forEach(function(element){
        if  (element==liczba) il+=1
    });
    return il;
}

console.log(ilosc(tablica,4));