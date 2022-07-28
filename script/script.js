const greetBtn = document.getElementById("greetBtn")
const bodyTag = document.getElementById("body")
console.log(greetBtn)

greetBtn.addEventListener('click', ()=>{
    const p = document.createElement("p")
    p.innerHTML = "Another paragraph of this text"
    p.innerHTML = "Hello this is wisdom text word"
    p.style.backgroundColor = "green"
    p.style.color = "#fff1028"
    p.style.fontSize = "20pt"
    p.style.fontFamily ="sans-serif"
    bodyTag.append(p)
    console.log(p)
})

var scrollIndex = 0

function scrollEffect() {
    scrollIndex++
    console.log(scrollIndex)
}

window.onload = loaded()

function loaded() {
    console.log("Finished Loading...")    
}



// innerHTML.YOU could remove attributes.