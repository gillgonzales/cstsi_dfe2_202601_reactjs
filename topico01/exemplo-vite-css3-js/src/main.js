import articleLib from './components/articleLib/articleLib.js';
import './css/style.css'
import log from './log'
import { livros } from './mocks/livros';

log("Exemplo importando um módulo")

let section = document.querySelector('#library')
let pathImages = '/img/exemplo-01-02/'

let sectionContent =  '';
livros.forEach((livro,indice)=>{
    livro.image = pathImages+livro.image;
    let articleElement = articleLib({...livro, id:indice+1})
    sectionContent+= articleElement
})
section.innerHTML=sectionContent