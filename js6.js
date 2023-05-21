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
    porownaj(inny){if (this.oblicz2()!=inny.oblicz2()){
        if(this.oblicz2()>inny.oblicz2()){
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
console.log(pr1.oblicz(),pr1.oblicz2());
console.log(pr2.oblicz(),pr2.oblicz2());
console.log(pr3.oblicz(),pr3.oblicz2());
console.log("Większy prostokąt to "+pr1.porownaj(pr2).nazwa);
console.log("Większy prostokąt to "+pr2.porownaj(pr3).nazwa);

//Zadanie 2

class trojkat{
    constructor(wysokosc,dlugosc,podstawa,nazwa){
        this.wysokosc=wysokosc;
        this.dlugosc=dlugosc;
        this.nazwa=nazwa;
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
}


const tro1=new Trapez(4,10,"numer 1");
const tro2=new Trapez(5,5,"numer 2");
const tro3=new Trapez(5,5,"numer 3");

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
poromniaj(pr1,tr2);
poromniaj(tr3,tro2);



