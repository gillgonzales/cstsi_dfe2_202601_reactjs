import articleLib from './components/articleLib/articleLib.js';
import './css/style.css'
import log from './log'
import { livros } from './mocks/livros';

log("Exemplo importando um módulo")

let section = document.querySelector('#library')
let sectionContent =  '';

let pathImages = '/img/exemplo-01-02/'

livros.forEach((livro,indice)=>{
    livro.image = pathImages+livro.image;
    let articleElement = articleLib({...livro, id:indice})
    sectionContent+= articleElement
})

section.innerHTML=sectionContent