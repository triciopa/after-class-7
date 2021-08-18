const object = {}

object.name = 'Patricio'
object.city = 'Buenos Aires'
object.position = 'Tutor'
object.students = []

object.students.push({ student: 'Sebastián', label: 'Clase 3', pass: true, score: 9, attendance: [2,3,4,5,8]})
object.students.push({ student: 'Paola', label: 'Clase 4', pass: true, score: 8, attendance: [1,2,3,5,6]})
object.students.push({ student: 'Valentina', label: 'Clase 2', pass: true, score: 9, attendance: [1,2,3,4,5]})
object.students.push({ student: 'Rodrigo', label: 'Clase 1', pass: true, score: 8, attendance: [1,2,4,7]})
object.students.push({ student: 'Ricardo', label: 'Clase 3', pass: false, score: 4, attendance: [3,5,6]})

// object.students[0].attendance[2]

// console.log(Object.keys(object.students[2]))
// console.log(Object.values(object))

// delete object.name
// object.city = 'Caracas'
// object["position"] = 'Alumno'
// console.log(object)

console.log(object)