import chalk from "chalk";
import { exemploFilter, exemploFind, exemploForeach, exemploMap, exemploReduce } from "./modules/exemploArrayIterations.js";
import { ordenaArray } from "./modules/exemploArraysFun.js";
import potencia, { Person, Person2, Person3, pow, pow2 } from "./modules/exemploFuncArrowFun.js";
import exemplosStrings from "./modules/exemploStrings.js";
import { exemplosConst, exemplosLet } from "./modules/letConstExemplos.js";
import { listProducts } from "./modules/listProducts.js";
import numberBigInt from "./modules/numTypes.js"


// exemplosLet()
// exemplosConst()
// numberBigInt()
// exemplosStrings()

// console.log(pot(2,2))
// console.log(pow(2,3))
// console.log(pow2(3))

// let p1 = new Person()

// setTimeout(()=>{
//     console.log(p1.age)
//     // process.exit()
// },5000);

// let p2 = new Person2()

// setTimeout(()=>{
//     console.log(p2.age)
//     // process.exit()
// },5000);

// let p3 = new Person3()

// setTimeout(()=>{
//     console.log(p3.age)
//     process.exit()
// },7000);

// ordenaArray()

// exemploForeach()

// exemploFind()

// exemploFilter()

// exemploMap()

// exemploReduce()

// listProducts()

console.log(chalk.blue(potencia(3,3)));
