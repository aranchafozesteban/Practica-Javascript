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
//Si es alumna
const alumnas = (str) =>{
  if (gender.students === 'female'){
    return true;
   }else{
    return false;
  }
}

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
    let numberStudents = students.length -1
    let posicion = calculateRandomNumber(0, 100);
    let obtainedNumber;
   
    do {
      try {
        obtainedNumber = await getNumber();
      } catch (error) {
        console.log(error);
        rl.question("Introduce el número: "), (num) => {
          rl.pause()}
      }

      //Hacer un switch con todas las respuestas
      switch(obtainedNumber){
        // Question 1: Mostrar en tabla todos los alumnos
        case 1:
          console.table(students)
          break;
        // Question 2: Mostrar el número de alumnos que hay en clase
        case 2:
          console.log(students.length)
          break;
        // Question 3: Mostrar todos los nombres de los alumnos.
        case 3:
          console.log(students[0].name, students[1].name)
          break;
        // Question 4: Eliminar el último alumno de la clase
        case 4: 
          console.log('El alumno eliminado ha sido: ', students.pop())
          break;
        // Question 5: Eliminar un alumno aleatoriamente 
        case 5:
          posicion = calculateRandomNumber(0,students.length -1)
          console.log('El alumno eliminado aleatoriamente ha sido: ', students. splice(posicion,1))
          break;
        // Question 6: Mostrar todos los datos de las alumnAs
        case 6: 
          let index = 0
          let counter = 0
          while (index <= numberStudents){
            if (alumnas === 'true'){
              counter++;
              index++;
            }else{
              index++;
            }
          } 
          console.log(students[counter])
      // Question 7: Mostrar número de chicos y chicas 

      // Question 8: Mostrar true o false en función de si todos son alumnAs

      // Question 9: Mostrar los nombres de los alumnos que tengan entre 20 y 25 años 

      // Question 10: Añadir un nuevo alumno - nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, calificaciones vacío

      // Question 11: Mostrar el nombre de la persona más jóven

      // Question 12: Mostrar la edad media de todos los alumnos

      // Question 13: Mostrar la edad media de las alumnAs

      // Question 14: Añadir una nueva nota (entre 0-10) aleatoria a cada alumno y añadirla a su lista.

      // Questión 15: Ordenar el array de alumnos alfabéticamente en función de si nombre
      }
    } while (obtainedNumber !== 0); // condiciones de continuar permitiendo preguntas
  }
  
  respuesta();