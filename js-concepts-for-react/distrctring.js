const numbers = [42]
const [number1,number2] = numbers
console.log(number2) 

const {name,age} ={name:"sakib",year:2023,"age":20}

const employ = {
    language:  ['html','css','js'],
    specification: {
        height: 66,
        weight:67
    }
}
const {specification} = employ
const {height } = specification
console.log(height)

for (number in employ){
    console.log(number)
}      