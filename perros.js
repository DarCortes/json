// 1. VARIABLES
const perritos = document.getElementById("perritos")

//const perritosBreedArea = document.getElementById("perritosBreed")
const botonPerritos = document.getElementById("dameperritos")

// 2. FUNCIONES
const extraerPerritos = () => {
    fetch("https://dog.ceo/api/breeds/image/random/5").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        perritos.innerHTML = `
        <p>Primer Perro</p>
        <img src="${data.message[0]}" />
        <p>Segundo Perro</p>
        <img src="${data.message[1]}" />
        <p>Tercer Perro</p>
        <img src="${data.message[2]}" />
        <p>Cuarto Perrito</p>
        <img src="${data.message[3]}" />
        <p>Quinto Perrito</p>
        <img src="${data.message[4]}" />
    `
    })
}

botonPerritos.addEventListener("click", () => {
    extraerPerritos()
})