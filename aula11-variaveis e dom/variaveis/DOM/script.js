//document.body.style.backgroundColor = "black"
//document.body.style.color = "white"

//window.alert("seja bem-vindo")

//window.prompt("login")
//window.prompt("senha")

//window.confirm("site com virus, deseja continuar?")


let paragrafo1 = document.getElementsByTagName("p")[0]
paragrafo1.innerHTML = "usando o tag name"
paragrafo1.style.backgroundColor = "white"

let paragrafo2 = document.getElementById("paragrafo2")
paragrafo2.innerHTML = "usando o id "
paragrafo2.style.backgroundColor = "green"

let paragrafo3 = document.getElementsByClassName("paragrafo3")[0]
paragrafo3.innerHTML = "usandoo  a classe"
paragrafo3.style.backgroundColor = "red"

let paragrafo4 = document.querySelector("#paragrafo4")
paragrafo4.innerHTML = "usando o query selector"
paragrafo4.style.backgroundColor = "pink"

let paragrafo5 = document.querySelectorAll("p")[4]
paragrafo5.innerHTML = "usando o query selector all"
paragrafo5.style.backgroundColor = "purple"