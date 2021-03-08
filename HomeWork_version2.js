// Используем switch case

let a = 200
let b = 0
while (b < a) {
    b++
        switch(b){
            case 5: console.log("five")
            break
            case 13: console.log("thirteen")
            break
            case 22: console.log("twenty-two")
            break
            case 35: console.log("thirty-five")
            break
            case 98: console.log("ninety-eight")
            break
            default: console.log(b);
        }
}


// Используем for
function hello(a) {
    for (let count = 0; ; count++)  {
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
    
