// console.log("Hello Essia")

// function Somme(a,b){
//     return a + b
// }

// console.log(Somme(2,3))

// let Somme =(a,b)=> a+b

// console.log(Somme(3,8))

// for(var i = 0;i<10;i++){
//     console.log("Bonjour")
// }

// function Somme(a,b){
//     return a + b
// }

// console.log(process.argv)

// console.log(Somme(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Somme(+process.argv[2],+process.argv[3]))

var obj = require('./ModuleLocal')


console.log(obj.Multi(+process.argv[2],+process.argv[3]))
console.log(obj.Sous(+process.argv[2],+process.argv[3]))
