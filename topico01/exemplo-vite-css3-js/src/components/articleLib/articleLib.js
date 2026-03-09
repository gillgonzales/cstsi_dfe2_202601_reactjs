import './article-lib.css'

export default function articleLib({titulo,autor,image,id,alt='Figura'}){
    return `
    <article class="library-item" id=${id}>
			<h1>${titulo}</h1>
			<h2>${autor}</h2>
			<img src="${image}" 
            alt="${alt}" />
			<button>Remove from library</button>
    </article>`;
}