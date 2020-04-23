
let liczenie = {

 kurs: document.querySelector(".kurs"),
 dodaj10: document.querySelector(".dodaj10"),
 odejmij10: document.querySelector(".odejmij10"),
 dodaj1: document.querySelector(".dodaj1"),
 odejmij1: document.querySelector(".odejmij1"),
 ilosc: document.querySelector(".ilosc"),
 oblicz: document.querySelector(".oblicz"),
 wynik: document.querySelector(".wynik"),
 wybierz: document.querySelector(".wybierz"),
 waluta: document.querySelector(".waluta"),
 jakawaluta: document.querySelector(".jakawaluta"),

 

init:function(){
    

this.dodaj10.addEventListener("click", function(){

    this.kurs.innerText = this.kurs.innerText - (-0.10);
    this.kurs.innerText = Math.round(this.kurs.innerText * 100) / 100;
    
}.bind(this))

this.odejmij10.addEventListener("click", function(){

    this.kurs.innerText = this.kurs.innerText - 0.10;
    this.kurs.innerText = Math.round(this.kurs.innerText * 100) / 100;
}.bind(this))

this.dodaj1.addEventListener("click", function(){

    this.kurs.innerText = this.kurs.innerText - (-0.01);
    this.kurs.innerText = Math.round(this.kurs.innerText * 1000) / 1000;
}.bind(this))

this.odejmij1.addEventListener("click", function(){

    this.kurs.innerText = this.kurs.innerText - 0.01;
    this.kurs.innerText = Math.round(this.kurs.innerText * 1000) / 1000;
}.bind(this))

this.oblicz.addEventListener("click", function(){

    this.wynik.innerText = this.ilosc.value * this.kurs.innerText;
    this.wynik.innerText = Math.round(this.wynik.innerText * 1000) / 1000;
    
}.bind(this))

this.oblicz.addEventListener("click", function(){

    if (this.wybierz.value == "USD")
        this.waluta.innerText = "Dolary";

    else if (this.wybierz.value == "EUR")
        this.waluta.innerText = "Euro";
    

    else 
        this.waluta.innerText = "Funty";
    
    
    
   
    
    
}.bind(this))


}
}


        liczenie.init();
