let deathAmount = 0
let container = document.querySelector(".container")
let buttonID = 0
let killzoneID = 0

// Button Functions //
function buttonTick(button) {
    if (button.innerHTML == "removed") {return}

    if (Number(button.innerHTML) == 0) {
        deathAmount += 1
        deathCounter.innerHTML = "Количество раз, когда ты проиграл: "+deathAmount
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
        deathCounter.innerHTML = "Количество раз, когда ты проиграл: "+deathAmount
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
let scaleAmount = {value: 1}
let text = document.querySelector(".everyclicktext")

function sequence() {
    document.querySelector(".music").play()
    startButton.remove()
    createButton(50,50)
    //createKillzone(25,50,20,40)

    let timeline = anime.timeline({
        targets: scaleAmount,
        loop: true,
    })

    timeline.add({
        value: 1.075,
        duration: 0,
        easing: 'easeInOutSine'
    })
    
    timeline.add({
        value: 1,
        duration: 250,
        easing: 'easeInOutSine'
    });

    timeline.add({
        value: 1,
        duration: 150,
        easing: 'linear'
    });

    //First 30 seconds
    setTimeout(() => {
        anime({
            targets: "#b1",
            left: "75vw",
            top: "50vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        createButton(50,50)
        anime({
            targets: "#b2",
            left: "25vw",
            top: "50vh",
            duration: 500,
            easing: "easeOutCubic",
        });
    }, 6250);

    setTimeout(() => {
        anime({
            targets: "#b1",
            left: "75vw",
            top: "25vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        anime({
            targets: "#b2",
            left: "25vw",
            top: "25vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        createButton(25,50)
        createButton(75,50)
        anime({
            targets: "#b3",
            left: "25vw",
            top: "75vh",
            duration: 500,
            easing: "easeOutCubic",
        });
        anime({
            targets: "#b4",
            left: "75vw",
            top: "75vh",
            duration: 500,
            easing: "easeOutCubic",
        });
    }, 12500);

    setTimeout(() => {
        createKillzone(50,150,2.5,30)
        anime({
            targets: "#k1",
            translateX: "0vw",
            translateY: "-100vh",
            duration: 5000,
            easing: "linear",
        });
    }, 18750);

    setTimeout(() => {
        anime({
            targets: "#b1",
            left: "75vw",
            top: "125vh",
            duration: 750,
            easing: "easeInOutQuad",
        });
        anime({
            targets: "#b2",
            left: "25vw",
            top: "125vh",
            duration: 750,
            easing: "easeInOutQuad",
        });
        anime({
            targets: "#b3",
            left: "25vw",
            top: "125vh",
            duration: 750,
            easing: "easeInOutQuad",
        });
        anime({
            targets: "#b4",
            left: "75vw",
            top: "125vh",
            duration: 750,
            easing: "easeInOutQuad",
        });
    }, 25250);

    setTimeout(() => {
        createButton(-25,50)
        anime({
                targets: "#b5",
                left: "25vw",
                duration: 1500,
                easing: "easeInOutSine",
                composition: "blend"
            })
        setTimeout(() => {
            anime({
                targets: "#b5",
                left: ["25vw", "75vw"],
                direction: "alternate",
                loop: true,
                duration: 1500,
                easing: "easeInOutSine",
                composition: "blend"
            })
        }, 1500);
    }, 25000);
    
    setTimeout(() => {
        removeButton(document.querySelector("#b1"))
        removeButton(document.querySelector("#b2"))
        removeButton(document.querySelector("#b3"))
        removeButton(document.querySelector("#b4"))
    }, 30000);

    setTimeout(() => {
        anime({
            targets: "#b5",
            top: "25vh",
            duration: 666,
            easing: "easeInOutSine",
            composition: "blend"
        })
        setTimeout(() => {
            anime({
                targets: "#b5",
                top: ["25vh", "75vh"],
                direction: "alternate",
                loop: true,
                duration: 1222,
                easing: "easeInOutSine",
                composition: "blend"
            })
        }, 666);
    }, 31750);

    setTimeout(() => {
        anime({
            targets: text,
            top: "22.5vh",
            duration: 1000,
            easing: "easeOutCubic",
        })
    }, 37750);
    setTimeout(() => {
        anime({
            targets: text,
            top: "100vh",
            duration: 1000,
            easing: "easeInCubic",
        })
        anime({
            targets: "#b5",
            top: "125vh",
            duration: 1250,
            easing: "easeInCubic",
            composition: "replace"
        })
        anime({
            targets: "#k1",
            translateY: "100vh",
            duration: 1250,
            easing: "easeInCubic",
            composition: "replace"
        })
    }, 38750);
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "#ffffff"
        anime({
            targets: document.querySelector("body"),
            backgroundColor: "#000000",
            duration: 500,
            easing: "linear",
        })
        removeButton(document.querySelector("#b5"))
        removeKillzone(document.querySelector("#k1"))
    }, 40000);
}

let startButton = document.querySelector(".start")
startButton.addEventListener("click", function() {
    sequence()
})

//setTimeout(() => {
//    removeButton(buttonThing)
//    removeKillzone(killzoneThing)
//}, 7500);

function pulse() {
    for (let b of buttonArray) {
        b.style.translate = (b.style.translateX, b.style.translateY)
        b.style.scale = scaleAmount.value
    }
    requestAnimationFrame(pulse)
}
pulse()
