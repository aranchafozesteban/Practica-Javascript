// Listado de alumnos
const students = [{
    age:32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
}]

// Usefull lists
const availableMaleNames = ['pepe','juan','victor', 'Leo','francisco','carlos']
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia','isabel', 'virginia']
const availableGenders = ['male','female']

// Configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

// Funciones comunes:
// Calcular número aleatorio
function calculateRandomNumber(min,max){
    const randomNumber = Math.floor(Math.random()*(max-min +1))+min;
    return randomNumber;
}
//Si es entero devuelve booleano
const isInt = (str) => {
  const integer = parseInt(str);
  if (Number.isNaN(integer)) {
    return false;
  } else {
    return true;
  }
};

// Proceso asíncrono - Pedir un número por consola y devolver respuesta después:
// Productor: hacer una promesa
function getNumber() {
    const promise = new Promise((resolve, reject) => {
      rl.question("Introduce el número: ", (num) => {
        rl.pause();
        if (isInt(num)) {
          num = Number.parseInt(num);
          resolve(num);
        } else {
          reject("Has de introducir un número entero entre el 1 y el 19");
        }
      });
    });
    return promise;
  }
// Consumidor: mostrar resultados cuando reciba resolve -->revisar variables y try and catch
async function respuesta() {
    let numberStudents 
    const posicion = calculateRandomNumber(0, 100);
    let obtainedNumber;
   
    do {
      try {
        obtainedNumber = await getNumber();
      } catch (error) {
        console.log(error);
        process.exit(0);
      }
      //Hacer un switch con todas las respuestas
      // Question 1: Mostrar en tabla todos los alumnos
      // console.table(alumnos)
       
      
      // Question 2: número de alumnos que hay en clase 
      
    } while (obtainedNumber !== 0); // condiciones de continuar permitiendo preguntas
  }
  
  respuesta();