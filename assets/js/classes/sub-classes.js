class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos soy un emtodo estatico');
    }
    
    nombre  = '';
    codigo  = '';
    frase   = '';
    comida  = '';
    
    //se pueden agregar valores por defecto
    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;

    }
    //setter
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    //getter
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }
    //metodo
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

class Heroe extends Persona{

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {

        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre}, ${ this.clan }`);
        super.quienSoy();
    }

}


const spiderman = new Heroe('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();