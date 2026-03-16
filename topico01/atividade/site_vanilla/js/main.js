
// const content = fetchProducts()
// debugger
const content = {}
window.onload = ()=>{
  fetchProductsAsync().then(cards=>{
    content.html = cards
    debugger
    main()
  });
}

const main = ()=>{
  const container = document.querySelector(".products_grid_container");

  setTimeout(() => {
    console.log({ "arrayToString": content.html.join('') });
    container.innerHTML = content.html.join('')
  }, 1000);
}

// window.onload = ()=>main();
// document.addEventListener('DOMContentLoaded',main)

