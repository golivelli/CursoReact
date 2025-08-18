// - - - - - - - - - - - - - - - - - - Guia de Ejercicios Complementarios (CoderHouse) - - - - - - - - - - - - - - - - - -
console.log("Comienzo de Ejercitación.");
console.log("\n");
// - - - - - - - - - - Modulo 1 - - - - - - - - - -
// console.log("Modulo 1");
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
// console.log("Actividad 5 - Descuentos");
// const discount1: number = 10;
// const discount2: number = 20;

// let inputCant: string;
// let cantInput: number;
// let inputValue: string;
// let value: number;
// let valueWithDiscount: number;

// do
// {
//   inputCant = readlineSync.question("¿Cuantos precios desea ingresar? : ");
//   cantInput = parseInt(inputCant);

//   if(cantInput <= 0 || isNaN(cantInput) || inputCant.trim() == '')
//   {
//     console.log("Porfavor verifique el valor ingresado. No puede ser un caracter vacío, además debe ser mayor a 0 y de tipo numerico.");
//   }
// } while (cantInput <= 0 || isNaN(cantInput) || inputCant.trim() == '');

// console.log("\n");

// for (let i = 0; i < cantInput; i++) {
//   console.log(`Ciclo N° ${i + 1}/${cantInput}`);

//   do {
//     inputValue = readlineSync.question(`Ingrese el precio del producto N° ${i + 1}: `);
//     value = parseInt(inputValue);
//     valueWithDiscount = value;

//     if (inputValue.trim() == "" || value < 0 || isNaN(value)) {
//       console.log("Porfavor verifique el precio ingresado.");
//     } else {
//       if (value > 500) {
//         valueWithDiscount = value * (discount2 / 100);
//       } else {
//         valueWithDiscount = value * (discount1 / 100);
//       }
//     }
//   } while (inputValue.trim() == "" || value < 0 || isNaN(value));

//   console.log(`Precio inicial: ${value} \nPrecio con descuento ${valueWithDiscount}`);
//   console.log("\n");
// }

// - - - - - - - - - - Modulo 2 - - - - - - - - - -
// console.log("Modulo 2");
// Actividad 6 - Yo no fui
// Solicitar al usuario un (1) nombre. Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
// Caso contrario, la salida será “Yo no fui”.

// const nameStorage: string = "Bart";
// let nameUser: string;

// do
// {
//   nameUser = readlineSync.question("Ingresa un personaje de los Simpson: ");

//   if(nameUser.trim() == "" || !isNaN(parseInt(nameUser))){
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.")
//   }
// } while(nameUser.trim() == "" || !isNaN(parseInt(nameUser)));

// let whoWas = nameUser === nameStorage ? "Fui yo" : "Yo no fui";

// console.log("\n");
// console.log(whoWas);

// console.log("\n");

// Actividad 7 - Presionar Y
// Solicitar al usuario una (1) tecla. Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. 
// Caso contrario, la salida será “Error”.

// let userInput: string;

// do 
// {
//   userInput = readlineSync.question("Ingresa una tecla: ");

//   if (userInput.trim() === "" || userInput.length > 1) {
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//   }
// } while (userInput.trim() === "" || userInput.length > 1);

// console.log("\n");

// if (userInput === "y" || userInput === "Y") {
//   console.log("Correcto");
// } else {
//   console.log("Error");
// }

// Actividad 8 - Escoger Personaje
// Solicitar al usuario un (1) número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.

// let input: string;
// let userInput: number;

// do
// {
//   input = readlineSync.question("Ingresa valor numerico entre 1-4: ");
//   userInput = parseInt(input);

//   if (input.trim() === "" || (userInput <= 0 || userInput > 4) || isNaN(userInput)) {
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//   }
// } while (input.trim() === "" || (userInput <= 0 || userInput > 4) || isNaN(userInput));

// console.log("\n");

// switch (userInput) {
//   case 1: console.log("Elegiste a Homero");
//   break;

//   case 2: console.log("Elegiste a Marge");
//   break;

//   case 3: console.log("Elegiste a Bart");
//   break;

//   case 4: console.log("Elegiste a Lisa");
//   break;

//   default: console.log("No hay personajes con el valor numerico elegido");
//   break;
// }

// Actividad 9 - Presupuesto
// Solicitar al usuario un (1) número. Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

// let input: string;
// let userInput: number;

// do
// {
//   input = readlineSync.question("Ingresa el presuesto aproximado a gastar: ");
//   userInput = parseInt(input);

//   if (input.trim() === "" || isNaN(userInput) || userInput < 0) {
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//   }
// } while (input.trim() === "" || isNaN(userInput) || userInput < 0);

// console.log("\n");

// if (userInput >= 3000) {
//   console.log("Presupuesto alto");
// } else if (userInput >= 1001 && userInput < 3000) {
//   console.log("Presupuesto medio");
// } else {
//   console.log("Presupuesto bajo");
// }

// Actividad 10 - Vacío
// Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
// Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

// let product1: string;
// let product2: string;
// let product3: string;

// do
// {
//   product1 = readlineSync.question("Ingrese el primer producto de almacen: ");

//   if (product1.trim() === "" || !isNaN(parseInt(product1))) {
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//   }
// } while (product1.trim() === "" || !isNaN(parseInt(product1)));

// console.log("\n");

// do
// {
//   product2 = readlineSync.question("Ingrese el segundo producto de almacen: ");

//   if (product2.trim() === "" || !isNaN(parseInt(product2))) {
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//   }
// } while (product2.trim() === "" || !isNaN(parseInt(product2)));

// console.log("\n");

// do
// {
//   product3 = readlineSync.question("Ingrese el tercer producto de almacen: ");

//   if (product3.trim() === "" || !isNaN(parseInt(product3))) {
//     console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//   }
// } while (product3.trim() === "" || !isNaN(parseInt(product3)));

// console.log("\n");

// let product4: string = validateInput();

// function validateInput() {
//   do
//   {
//     product4 = readlineSync.question("Ingrese el cuarto producto de almacen: ");

//     if (product4.trim() === "" || !isNaN(parseInt(product4))) {
//       console.log("Valor ingresado incorrecto. Verifique su ingreso.");
//     }
//   } while (product4.trim() === "" || !isNaN(parseInt(product4)));

//   return product4;
// }

// console.log("\n");

// if(product1 != "" && product2 != "" && product3 != "" && product4 != "") {
//   console.log(`Lista de productos ingresados: ${product1}, ${product2}, ${product3}, ${product4}`);
// } else {
//   console.log("Error: Es necesario cargar todos los productos");
// }