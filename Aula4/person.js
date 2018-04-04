function person (firstName, lastName){
    this.primeiroNome=firstName,
    this.ultimoNome=lastName
}


person.prototype.age = undefined;

person.prototype.greet = function(){
    console.log("Hello " + this.primeiroNome+ " " + this.ultimoNome +" voce tem "+this.age+ " anos");
}




var joao = new person ("joao", "santos");
joao.age = 12;
joao.greet();


var joana = new person ("joana", "santos");
joana.age = 12;
joana.greet();




console.log(joao._proto_);
console.log(joana._proto_);
console.log(joao._proto_ == joana._proto_);