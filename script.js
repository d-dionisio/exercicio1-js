const students = [
  {
    name: "João",
    firstNote: 8,
    secondNote: 9,
  },
  {
    name: "Clara",
    firstNote: 6,
    secondNote: 7,
  },
  {
    name: "Ana Laura",
    firstNote: 10,
    secondNote: 8.5,
  },
  {
    name: "Douglas",
    firstNote: 9,
    secondNote: 7,
  }
]

function average(noteOne, noteTwo) {
  return (noteOne + noteTwo) / 2
}

function averageStudent(students) {
  const averageStudent = average(students.firstNote, students.secondNote)

  if(averageStudent > 7) {
    return `A média do(a) aluno(a) ${students.name} foi de: ${averageStudent} 
Parabéns ${students.name}, você foi aprovado(a)!!!`
  } else {
    return `A média do(a) aluno(a) ${students.name} foi de: ${averageStudent} 
Não foi dessa vez ${students.name}, tente novamente!`
  }
}

for(let student of students) {
  const result = averageStudent(student)
  alert(result)
}