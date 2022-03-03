const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        Ciudad: 'New York',
        Zip: 15235,
        lat: 14.265,
        lng: 153.5631
    }
};

console.log( persona );

console.log( persona.edad );

console.log( persona.apellido );

console.log( persona.nombre );

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );