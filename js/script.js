/*const arregloNumeros=[30,40,50]
arregloNumeros.push(60);
arregloNumeros.push(70);


class Animal{
    constructor(patas, tamanio){
        this.patas=patas;
        this.tamanio=tamanio;
    }
}

class Gato extends Animal{
    constructor(patas, tamanio, pelaje){
        super(patas, tamanio);
        this.pelaje=pelaje;
    }
}

const perro = new Animal(4, 'Mediano');
console.log(perro);

const felix = new Gato(4, 'Pequeño', 'Liso');
console.log(felix);

function mensaje(){
    console.log("Hola mundo");
}

mensaje();

const mensaje1 = () => {
    return "Hola Mundo";
    
    console.log("Hola mundo");
}

mensaje1();

const suma = (opq, op2) => {
    return `el valor de la suma de ${op1} + ${op2} es de: ${op1 + op2}` 
}


const web = {
    nombre: "Udenar",
    links: {
        sitio: "www.udenar.edu.co"
    },
    redesSociales: {
        youtube:{
            enlace: "www.youtube.com/udenar",
            nombre: "Youtube Udenar"
        },
        facebook:{
            enlace: "www.facebook.com/udenar",
            nombre: "Facebook Udenar"
        },
        instagram:{
            enlace: "www.instagram.com/udenar",
            nombre: "Instagram Udenar"
        }
    }
}

const {redesSociales}=web;
console.log(web.redesSociales.instagram.nombre);

const frutas = ["Manzana", "Pera", "Mango", "Fresa"]

const dulces = ["Mermelada", "Manjar", "Helado"];


const postres = [...frutas, ...dulces]

console.log(postres);

*/

// Promesas
/*const miPromesa = new Promise((resolve, reject) => {
    if (Math.random()*10 < 9){
        resolve('Dato Correcto');
    }else{
        reject('Dato incorrecto');
    }
})*/

/*miPromesa.then(respuesta => {
    console.log(respuesta);
}).catch((error) => {
    console.log(error);
});*/

// Async Await
const getResponse = () => {
    return new Promise((resolve, reject) => {
        if (Math.random()*10 < 9){
            resolve('Dato Correcto');
        }else{
            reject('Dato incorrecto');
        }
    })
} 
 

async function response(){
    try{
        const res = await getResponse();
        console.log("Respuesta", res);
    }catch(err){
        console.log("error", err);
    }
}

response();

// Módulos

/*import {PI, suma} from './modulo.js';
console.log(PI);
console.log(suma(5,13));*/