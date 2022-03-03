//FUNCIONES JS
const saludar = function ( nombre ){
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
} 

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => 'Hola Mundo' ;


//console.log( saludar('Goku'))

//console.log( saludar)

//console.log( saludar2 ('Vegeta'))

console.log( saludar())
console.log( saludar2())
console.log( saludar3 ('Yamcha'))
console.log( saludar4())

const getUser = () =>({
        uid: 'ABC123',
        username: 'Padrino'
})

console.log( getUser())

const user = getUser();
console.log (user);

/*
TEST
1. Transformar a funcion de flecha
2. Retornar un objeto implicito
3. Pruebas
*/

function getUsuarioActivo ( nombre ){
    return {
        uid: 'XYZ123',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Cristian');
console.log ( usuarioActivo );

/*RESOLUCION*/

const getUsuarioActivo2 = (nombre) => 
({ uid: 'XYZ123', username: nombre });

console.log ( getUsuarioActivo2 ('Alexander') );