// 1. VARIABLES
const perritosArea = document.getElementById("perritos")
const perritosBreedArea = document.getElementById("perritosBreed")
const botonPerritos = document.getElementById("dameperritos")​
    // 2. FUNCIONES
const extraerPerritos = () => {
        fetch("https://dog.ceo/api/breeds/image/random/3").then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            perritosArea.innerHTML = `
        <p>Primer Perro</p>
        <img src="${data.message[0]}" />
        <p>Segundo Perro</p>
        <img src="${data.message[1]}" />
        <p>Tercer Perro</p>
        <img src="${data.message[2]}" />
    `
        })
    }​
    // 3. EVENTOS
    ​
botonPerritos.addEventListener("click", () => {
    extraerPerritos()
})