export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `O valor do contador é ${counter}`
    console.log(count)
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(-1)
}
