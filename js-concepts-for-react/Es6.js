const numbers = [89,35,98,12]
const student = {
    name :  "sakib",
    age: 32,
    movies: ['kingkhan','dhakar Mastan']
};
const about = `My Name is ${student.name} age of  ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`

const isEven = x => x % 2 === 0;


console.log([...numbers,78,99])