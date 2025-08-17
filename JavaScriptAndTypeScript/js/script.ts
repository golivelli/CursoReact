// - - - - - - - - - - - - - - - - - - Guia de Ejercicios Complementarios (CoderHouse) - - - - - - - - - - - - - - - - - -
console.log("Comienzo de Ejercitación.");
console.log("");
// Actividad 1 - Homero
// Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o let en la declaración.
// console.log("Actividad 1 - Homero");
// let firstName: string = "Homero";
// let lastName: string = "Simpson";
// let age: number = 40;
// console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}.`);

// console.log("\n");

// Actividad 2 - Ciudades
// Crear cinco (3) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.
// console.log("Actividad 2 - Ciudades");
// const springfield: string = "Springfield";
// const shelbyville: string = "Shelbyville";
// const ogdenville: string = "Ogdenville";
// console.log(`Ciudad 1: ${springfield}, Ciudad 2: ${shelbyville}, Ciudad 3: ${ogdenville}.`);

// console.log("\n");

// Actividad 3 - Carnet
// Declarar variables para representar la información de un carnet de conducir. Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
// console.log("Actividad 3 - Carnet");
// const nameLicense: string = "Bart";
// const lastNameLicense : string = "Simpson";
// const ageLicense : number = 10;
// const sexLicense : string = "Men";
// const cityLicense : string = "Springfield";

// console.log("License - Bart Simpson");
// console.log(`First Name: ${nameLicense}, Last Name: ${lastNameLicense}, Age: ${ageLicense}, Sex: ${sexLicense}, City: ${cityLicense}.`);

// console.log("\n");

// Actividad 4 - Registro de Personas
// Solicitar al usuario tres (3) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.
import * as readlineSync from "readline-sync";

// console.log("Actividad 4 - Registro de Personas");
// let father: string;
// let mother: string;
// let child: string;

// do
// {
//   father = readlineSync.question("Ingresa el nombre del padre: ")!;
//   mother = readlineSync.question("Ingresa el nombre de la madre: ")!;
//   child = readlineSync.question("Ingresa el nombre del hijo: ")!;

//   console.log("\n");

//   if (father && mother && child){
//     const familia = (("\nPadre: " + father.concat(", ")) + ("Madre: " + mother.concat(", ")) + ("Hijo: " + child));
//     console.log("Los nombres de la familia son: " + familia);
//   }
//   else
//   {
//     console.log("Ingreso invalido. Verifique sus entradas.");
//   }
// } while(father.trim() == '' || mother.trim() == '' || child.trim() == '');

// console.log("\n");

// Actividad 5 - Descuentos
// Solicitar al usuario uno o más precios. Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
console.log("Actividad 5 - Descuentos");
const discount1: number = 10;
const discount2: number = 20;

let inputCant: string;
let cantInput: number;
let inputValue: string;
let value: number;
let valueWithDiscount: number;

do
{
  inputCant = readlineSync.question("¿Cuantos precios desea ingresar? : ");
  cantInput = parseInt(inputCant);

  if(cantInput <= 0 || isNaN(cantInput) || inputCant.trim() == '')
  {
    console.log("Porfavor verifique el valor ingresado. No puede ser un caracter vacío, además debe ser mayor a 0 y de tipo numerico.");
  }
} while (cantInput <= 0 || isNaN(cantInput) || inputCant.trim() == '');

console.log("\n");

for (let i = 0; i < cantInput; i++) {
  console.log(`Ciclo N° ${i + 1}/${cantInput}`);

  do {
    inputValue = readlineSync.question(`Ingrese el precio del producto N° ${i + 1}: `);
    value = parseInt(inputValue);
    valueWithDiscount = value;

    if (inputValue.trim() == "" || value < 0 || isNaN(value)) {
      console.log("Porfavor verifique el precio ingresado.");
    } else {
      if (value > 500) {
        valueWithDiscount = value * (discount2 / 100);
      } else {
        valueWithDiscount = value * (discount1 / 100);
      }
    }
  } while (inputValue.trim() == "" || value < 0 || isNaN(value));

  console.log(`Precio inicial: ${value} \nPrecio con descuento ${valueWithDiscount}`);
  console.log("\n");
}


