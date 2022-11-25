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


// pregunta 4
          case 4: 
        
        console.log('El alumno eliminado ha sido: ', students.pop())
          break;

//pregunta 6
          case 6: 
          let index6 = 0
          while (index6 <= numberStudents){
            if (alumnas === true){
              console.log(students[index6])
              index6++;
            }else{
              index6++;
            }
          } 
          break;
// pregunta 9
        case 9:
          const joven = (students) =>{
            if(students.age > 20 && students.age < 25){
              return true
            }
          }

          let index9 = 0
          let counter9 = 0
          while (index7 <= numberStudents){
            if (joven === true){
              counter9
              let numberFemale = counterFemale;
              index7++;
              console.log('Alumnas: ', numberFemale)
            }else{
              counterMale++;
              let numberMale = counterMale;
              index7++;
              console.log('Alumnos: ', numberMale)
            }
          }
          break;

          case 14:
          let index14 = 0
          let grade = calculateRandomNumber(0, 10);
          while (index14 <= students.length-1){
            let notesStudents =students.forEach(student =>{
            students[index14].examScores = grade;
            
            index14++;
          })

          while (index14 <= students.length-1){
            students[index14].examScores = grade;
            
            index14++;
          }


          case 14:
          let index14 = 0
          let grade = calculateRandomNumber(0, 10);
          while (index14 <= students.length-1){
            students[index14].examScores = grade;
            
            index14++;
          }
          console.table(students);
          break;