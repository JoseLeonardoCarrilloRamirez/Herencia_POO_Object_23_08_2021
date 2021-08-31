
class espada{
    constructor(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
    atacar(){
        return this.ataque;
    }
}
class espadaMadera extends espada{
    constructor(arg){
        super(arg);
        this.vida = "+120";
        this.efecto = "Entrenar";
        this.ataque+=10;
    }
    atacar(){
        return `${this.ataque} MOD ${this.efecto} y ${this.vida} vida`;
    }
}


let data = {
    ataque:120,
    diametro: "50 centimetros",
    efecto: undefined
}
const inst = new espada(data);
console.log(inst.atacar());
console.log(inst);

const instMadera = new espadaMadera(data);
console.log(instMadera.atacar());
console.log(instMadera);


// const espada = {+
//     ataque :30,
//     diametro : "30cm",
//     efecto : undefined,
//     atacar(){
//         return this.ataque;
//     }
// }

// const espadaHielo = Object.create(espada);
// Object.defineProperties(espadaHielo,{
//                         "vida":{
//                             value: "+30",
//                             enumerable: true
//                         },
//                         "efecto":{
//                             value: "Congelar",
//                             enumerable: true
//                         },
//                         "ataque":{
//                             value: espada.ataque += 10,
//                             enumerable: true
//                         }
// });
// espadaHielo.atacar = function(){
//     return `${this.ataque} MOD ${this.efecto} y ${this.vida} vida`;
// }
// console.log(espada.atacar());

