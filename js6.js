//Zadanie 1
class prostokat{
    constructor(wysokosc,szerokosc,nazwa){
        this.wysokosc=wysokosc;
        this.szerokosc=szerokosc;
        this.nazwa=nazwa;
    }
    oblicz(){
        return 2*this.wysokosc+2*this.szerokosc;
    }
    oblicz2(){
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
