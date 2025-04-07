// document.addEventListener("keydown", function(event) {
//     let display = document.getElementById("display")
//     let str = ""

//     if (event.key == "Delete") {
//         display.textContent = ""
//     } else if (event.key == "Backspace") {
//         display.textContent = display.innerHTML 
//     } else {
//         display.textContent += event.key
//     }

//     // console.log(event)
// })

// document.addEventListener("keyup", function(event) {
//     if (event.key == "Delete") {
//         display.innerHTML = ""
//     }
// })

// document.addEventListener("resize", function(event) {
//     let display = document.getElementById("display")
//     // display.textContent = "AAA"
//     // display.textContent = $(window.innerWidth)
// })



// let tick = true;

// function display(text) {
//     document.getElementById("display").textContent = text
// };

// function tick_func() {
//     if (tick) {
//         display("Tik")
//         tick = !tick
//     } else {
//         display("Tok")
//         tick = !tick
//     }
// };

// window.onload = function() {
//     setInterval(tick_func, 1000)
// };


let count = 0
let second = 0
let operations = 0
function counter_func() {
    let display = document.getElementById("display")
    count ++;
    display.textContent = count
}

function second_func() {
    let second_display = document.getElementById("seconds")
    second ++;
    second_display.textContent = second + " Seconds passed."
}

function comparison_func() {
    let comparison = document.getElementById("comparison")
    operations = count / second
    comparison.textContent = "Operations / Second: " + Math.round(operations)
}

window.onload = function() {
    setInterval(counter_func)
    setInterval(second_func, 1000)
    setInterval(comparison_func, 100)
}

//   154674  CPU Operations  682 Seconds passed.  Operations / Second: 227 