

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



const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log( ironman );

// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );
// Persona._conteo = 2;
console.log( 'Conteo estatico', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );