let listContainer = document.querySelector(".list-items-container")
let menuBar = document.querySelector("#menu")

menuBar.onclick = () => {

    listContainer.classList.toggle('open')
}