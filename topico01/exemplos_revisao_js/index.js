import chalk from 'chalk';

console.log(chalk.green('Exemplo Var, Let Const e Escopos'));

console.log(chalk.red('Exemplos Let'));
var pi = 3.14;
// var pi = 3; //Descomente para ver o erro
pi = 0.14; // Erro de redeclaração da variável pi
console.log(pi);

console.log(chalk.blue('Exemplos Escopo de Bloco'));
//escopo de bloco
if (true) {
  let pi = 0;
  //imprime o valor de pi do bloco
  pi = 3.1415;
  if (true) {
    let pi = 4;
    console.log(pi); //4
  }
  console.log(pi); //3.1415
}
//imprime o valor de pi do inicio do programa
console.log(pi); //0.14

//uso comum para let iteradores
for (let c of 'abcde') {
  console.log(c);
}
// console.log(c);
console.clear();

console.log(chalk.yellow('Exemplos const de Bloco'));

//tabuada do 5
const n = 5;
for (let i = 1; i <= 10; i++) console.log(`${i}X${n}=${i * n}`);
console.log(i);
process.exit();
//observe que i não é mais acessível fora do FOR
//console.log(i)//Descomente para ver o erro
