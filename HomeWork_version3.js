// // Используем switch case

// let a = 200
// let b = 0
// while (b < a) {
//     b++
//         switch(b){
//             case 5: console.log("five")
//             break
//             case 13: console.log("thirteen")
//             break
//             case 22: console.log("twenty-two")
//             break
//             case 35: console.log("thirty-five")
//             break
//             case 98: console.log("ninety-eight")
//             break
//             default: console.log(b);
//         }
// }


// Используем for. К комментарию: "Нет ограничения на выводимое кол-во цифр", я правильно понимаю, что надо ограничить count, условием чтобы это исправить. Сделала это двумя способами: указав в условии в цикле for и через break
function hello(a) {
    for (let count = 0; count <= 200; count++)  {
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

// // break
// function hello(a) {
//     for (let count = 0; ; count++)  {
//         if (count === 5) {
//             console.log("five")
//         } else if (count === 13) {
//             console.log("thirteen")
//         } else if (count === 22) {
//             console.log("twenty-two")
//         } else if (count === 35) {
//             console.log("thirty-five")
//         } else if (count === 98) {
//             console.log("ninety-eight")
//         } else if (count > 200) {
//             break;
//         } else {
//             console.log(count)
//         }
//     }
// }
// hello()
    
