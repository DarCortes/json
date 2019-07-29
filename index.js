//VARIABLE
const areaPerrito = document.getElementById("perrito")

fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data)
    areaPerrito.innerHTML = `
    <p>Mi próximo perrito <p>
    <img src= "${data.message}" />
    `
})

const areaGatito = document.getElementById("gatito")

fetch("https://aws.random.cat/meow").then((response) => {
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data)
    areaGatito.innerHTML = `
    <p>Mi próximo gatito <p>
    <img src= "${data.file}" /> 
    `
})