const products = [
    {name: 'laptop',price:3200,brand:'lenovo',color: 'silver'},
    {name: 'phone',price:7000,brand:'iphone',color: 'golden'},
    {name: 'watch',price:3000,brand:'casio',color: 'yellow'},
    {name: 'sungalss',price:300,brand:'ribon',color: 'black'},
    {name: 'camera',price:9000,brand:'canon',color: 'gray'},
]

brands = products.map(item => item.brand)

console.log(brands)



products.forEach(product => console.log(product.name));
prices = products.filter(product => product.price> 100 && product.price<=100000)
console.log(prices)

 