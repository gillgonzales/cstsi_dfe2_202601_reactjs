
const API_URL = import.meta.env.VITE_API_URL;

export const fetchProdutosApi = async (id = null) => {
  const url = id ? `${API_URL}/produtos/${id}` : `${API_URL}/produtos`;
  console.log({id, url})
  return fetch(url)
    .then(response => {
      if (response.status !== 200)
        throw new Error("Erro ao carregar produtos!!");
      return response.json()
    })
    .then(json => {
      console.log({ json })
      return json?.data
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Exemplo com fetch!!"))
}