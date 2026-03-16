async function fetchProductsAsync() {
   const mockedProducts = await fetch('/mocks/mockedProducts.json')
      .then(response => {
         console.log(response)
         return response.json()
      })
   debugger
   return mockedProducts.reverse().map(product => card(product))
}

function fetchProducts(){
   return mockedProducts.reverse().map(product => card(product))
}