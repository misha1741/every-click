let deathAmount = 0
let container = document.querySelector(".container")
let buttonID = 0
let killzoneID = 0

// Button Functions //
function buttonTick(button) {
    if (button.innerHTML == "removed") {return}

    if (Number(button.innerHTML) == 0) {
        deathAmount += 1
        deathCounter.innerHTML = "Количество раз, который ты умер: "+deathAmount
        button.innerHTML = 6
    }

    button.innerHTML = Number(button.innerHTML)-1
    setTimeout(() => {buttonTick(button)}, 1000);
}

function setupButton(button, x, y) {
    buttonTick(button)
    button.addEventListener("click", function() {
        button.innerHTML = 5
    })

    button.style.left = x+"vw"
    button.style.top = y+"vh"
}

function removeButton(button) {
    button.innerHTML = "removed"
    button.remove()
}

function createButton(x, y) {
    let button = document.createElement("button")
    container.appendChild(button)
    button.innerHTML = 5
    buttonID += 1
    button.id = "b"+buttonID
    button.classList.add("button")
    setupButton(button, x, y)
    buttonArray.push(button)
}

// Killzone Functions //
function setupKillzone(killzone, x, y, width, height) {
    killzone.addEventListener("mouseover", function() {
        deathAmount += 1
        deathCounter.innerHTML = "Количество раз, который ты умер: "+deathAmount
    })

    killzone.style.left = x+"vw"
    killzone.style.top = y+"vh"

    killzone.style.width = width+"vw"
    killzone.style.height = height+"vw"

    killzone.style.marginLeft = (-width/2)+"vw"
    killzone.style.marginTop = (-height/2)+"vw"
}

function removeKillzone(killzone) {
    killzone.remove()
}

function createKillzone(x, y, width, height) {
    let killzone = document.createElement("div")
    container.appendChild(killzone)
    killzoneID += 1
    killzone.id = "k"+killzoneID
    killzone.classList.add("killzone")
    setupKillzone(killzone, x, y, width, height)
    killzoneArray.push(killzone)
}

//let buttonThing = document.querySelector(".button")
//setupButton(buttonThing, "50vw", "50vh")

//let killzoneThing = document.querySelector(".killzone")
//setupKillzone(killzoneThing, "25vw", "50vh", "20", "20")

let deathCounter = document.querySelector(".deathCounter")

let buttonArray = []
let killzoneArray = []

function sequence() {
    document.querySelector(".music").play()
    startButton.remove()
    createButton(50,50)
    //createKillzone(25,50,20,40)

    //First 30 seconds
    setTimeout(() => {
        anime({
            targets: "#b1",
            translateX: "25vw",
            translateY: "0vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        createButton(50,50)
        anime({
            targets: "#b2",
            translateX: "-25vw",
            translateY: "0vh",
            duration: 500,
            easing: "easeOutCubic",
        });
    }, 6250);

    setTimeout(() => {
        anime({
            targets: "#b1",
            translateX: "25vw",
            translateY: "-25vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        anime({
            targets: "#b2",
            translateX: "-25vw",
            translateY: "-25vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        createButton(25,50)
        createButton(75,50)
        anime({
            targets: "#b3",
            translateX: "0vw",
            translateY: "25vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        anime({
            targets: "#b4",
            translateX: "0vw",
            translateY: "25vh",
            duration: 500,
            easing: "easeOutCubic",
        });
    }, 12500);

    setTimeout(() => {
        createKillzone(50,150,10,30)
        anime({
            targets: "#k1",
            translateX: "0vw",
            translateY: "-100vh",
            duration: 5000,
            easing: "linear",
        });
    }, 18750);
}

let startButton = document.querySelector(".start")
startButton.addEventListener("click", function() {
    sequence()
})

//setTimeout(() => {
//    removeButton(buttonThing)
//    removeKillzone(killzoneThing)
//}, 7500);