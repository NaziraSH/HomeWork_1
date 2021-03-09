// // Используем switch case

function deal(b) {
    for (let count = 0; count <= b; count++)  {
        switch(count){
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
            default: console.log(count);
        }
    }
}
deal(45)

// Используем for. 
function hello(a) {
    for (let count = 0; count <= a; count++)  {
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
hello(30)
