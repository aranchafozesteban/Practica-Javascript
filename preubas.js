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