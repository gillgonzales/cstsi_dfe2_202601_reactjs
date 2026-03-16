import { fetchProducts } from "./utils/importProducts";
import mockedProducts from "./mocks/mockedProducts.json";

// import './style.css'

const content = fetchProducts(mockedProducts)
const container = document.querySelector(".products_grid_container");

setTimeout(()=>
  container.innerHTML = content.join('')
,1000);