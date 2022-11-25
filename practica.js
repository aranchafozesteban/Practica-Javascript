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
const alumnas = (students) =>{
  if (students.gender === 'female'){
    return true;
   }else{
    return false;
  }
}
//Si tiene entre 20 y 25 años
const joven = (students) =>{
  if(students.age > 20 && students.age < 25){
    console.log(students.name)
  }
}

    console.log('1- Mostrar en formato de tabla todos los alumnos.')
    console.log('2- Mostrar por consola la cantidad de alumnos que hay en clase')
    console.log('3- Mostrar por consola todos los nombres de los alumnos.')
    console.log('4- Eliminar el último alumno de la clase.')
    console.log('5- Eliminar un alumno aleatoriamente de la clase.')
    console.log('6- Mostrar por consola todos los datos de los alumnos que son chicas.')
    console.log('7- Mostrar por consola el número de chicos y chicas que hay en la clase.')
    console.log('8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.')
    console.log('9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.')
    console.log('10- Añadir un alumno nuevo')
    console.log('11- Mostrar por consola el nombre de la persona más joven de la clase')
    console.log('12- Mostrar por consola la edad media de todos los alumnos de la clase.')
    console.log('13- Mostrar por consola la edad media de las chicas de la clase.')
    console.log('14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.')
    console.log('15- Ordenar el array de alumnos alfabéticamente según su nombre.')
    console.log('16- Mostrar por consola el alumno de la clase con las mejores notas.')
    console.log('17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.')
    console.log('18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10')
    console.log('19- Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.')
    
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
          console.log('Número de estudiantes en clase: ', students.length)
          break;

        // Question 3: Mostrar todos los nombres de los alumnos. 
        case 3:
          let index3 = 0
          while (index3 <= students.length-1){
            console.log(students[index3].name)
              index3++;
            }
          break;

        // Question 4: Eliminar el último alumno de la clase -Revisar si tengo tiempo para que no de problemas con undefined
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
          let femaleData = students.filter(alumna => alumna.gender === 'female')
          console.log(femaleData)  
          break;

        // Question 7: Mostrar número de chicos y chicas 
        case 7:
          let index7 = 0
          let counterFemale = 0
          let counterMale = 0
          while (index7 <= students.length-1){
            if (students[index7].gender === 'female'){
              counterFemale++;
              let numberFemale = counterFemale;
              index7++;
              
            }else{
              counterMale++;
              let numberMale = counterMale;
              index7++;
              
            }
          }
          console.log('Alumnas: ', counterFemale);
          console.log('Alumnos: ', counterMale);
          break;

        // Question 8: Mostrar true o false en función de si todos son alumnAs
        case 8:
          if (alumnas === true){
            console.log('True')
          }else{
            console.log('False')
          }
          break;

        // Question 9: Mostrar los nombres de los alumnos que tengan entre 20 y 25 años 
        case 9:
          let range ={
            min: 20,
            max: 25
          };
          let alumnosJovenes = students.filter(function(students){
            return students.age >=this.min && students.age <= this.max;
          },range)
          console.log(alumnosJovenes)
          break;

        // Question 10: Añadir un nuevo alumno - nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, calificaciones vacío
        case 10: 
        let newAge = calculateRandomNumber(20, 50);
        let getRandomNumber = calculateRandomNumber(0,1);
        let getRandomNumber2 = calculateRandomNumber(0,5)
        if (getRandomNumber === 0){
          let newGender = 'female'
          let newName = availableFemaleNames[getRandomNumber2]
          students.push({age: newAge, examScores:[], gender: newGender, name:newName })
        }else{
          let newGender = 'male'
          let newName = availableMaleNames[getRandomNumber2]
          students.push({age: newAge, examScores:[], gender: newGender, name: newName})
        }
        console.table(students)
        break;
        
        // Question 11: Mostrar el nombre de la persona más jóven
        case 11:
          let getAges = student => student.age;
          let agesStudents = students.map(getAges);
          let masJoven = Math.min(...agesStudents)
          let index = agesStudents.indexOf(masJoven)
          console.log(students[index].name)
          break;

        // Question 12: Mostrar la edad media de todos los alumnos 
        case 12:
          let obtenerAges = student => student.age;
          let ages = students.map(obtenerAges);
          const sum = ages.reduce(function (resultado, elemento) {
            return resultado + elemento;
          }, 0);
          let averageAge = sum/students.length
          console.log('La edad media de todos los alumnos es: ', averageAge)
          break;

        // Question 13: Mostrar la edad media de las alumnAs 
        case 13:
          let femaleStudents = students.filter(function(students){
            if (students.gender === 'female'){
              return students.age;
            }})
          let obtenerFemaleAges = (femaleStudents) => femaleStudents.age;
          let femaleAges = femaleStudents.map(obtenerFemaleAges);
          const femaleSum = femaleAges.reduce(function (resultado, elemento) {
            return resultado + elemento;
          }, 0);
          let averageFemalesAge = femaleSum/femaleStudents.length
          console.log('La edad media de las alumnAs es: ', averageFemalesAge)
          break;
        // Question 14: Añadir una nueva nota (entre 0-10) aleatoria a cada alumno y añadirla a su lista.- FALTA
        case 14:
          let index14 = 0
          while (index14 <= students.length-1){
            students[index14].examScores = calculateRandomNumber(0,10);
            
            index14++;
          }
          console.table(students);
          break;
         
        // Questión 15: Ordenar el array de alumnos alfabéticamente en función de su nombre
        case 15:
          students.sort((a,b) =>{
            if (a.name.toLowerCase() < b.name.toLowerCase()){
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()){
              return 1;
            } return 0;
          })
          console.table(students)
          break;
        // Question 16: Mostrar por consola el alumno con mejores notas 
        case 16:
          let getExamScores = student => student.examScores;
          let scoresStudents = students.map(getExamScores);
          let mejorAlumno = Math.max(...scoresStudents)
          let index16 = scoresStudents.indexOf(mejorAlumno)
          console.log(students[index16])
          break;
        // Question 17: Mostrar nota media más alta y el nombre del alumno
        case 17:
          let getExamScores17 = student => student.examScores;
          let scoresStudents17 = students.map(getExamScores17);
          let mejorAlumno17 = Math.max(...scoresStudents17)
          let index17 = scoresStudents17.indexOf(mejorAlumno17)
          console.log(students[index17].examScores)
          console.log(students[index17].name)
          break;
        // Question 18: Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10
        case 18:
          let index18 = 0
          while (index18 <= students.length-1){
            if (students[index18].examScores <10){
              students[index18].examScores++;
            }
            
            index18++;
          }
          console.table(students);
          break;
        // Question 19: Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
        case 19: 
        let index19 = 0
          while (index19 <= students.length-1){
            if (students[index19].examScores.length === 0){
              students[index19].examScores =10;
            }
            
            index19++;
          }
          console.table(students);
          break;
      }
    } while (obtainedNumber !== 0); // condiciones de continuar permitiendo preguntas
  }
  
  respuesta();