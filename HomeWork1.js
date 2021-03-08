// Используем switch case
function num(fig){
    switch(fig){
        case 5: return "five"
        case 13: return "thirteen"
        case 22: return "twenty-two"
        case 35: return "thirty-five"
        case 98: return "ninety-eight"
        default: return fig 
    }
}
console.log(num(5))
console.log(num(13))
console.log(num(22))
console.log(num(35))
console.log(num(98))
console.log(num(32))


// Используем for
function hello(a) {
    for (let count = 0; count < 99; count++) {
        if (count === 5) {
            console.log("five")
        } else if (count === 13) {
            console.log("thirteen")
        } else if (count === 22) {
            console.log("twenty-two")
        } else if (count === 35) {
            console.log("thirty-five")
        } else if (count === 98) {
            console.log("ninety-eight")
        } else {
            console.log(count)
        }
    }
}
hello()
    
