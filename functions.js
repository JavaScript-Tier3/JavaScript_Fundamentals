var pos = 0;

// function move() {
//     pos += 1;
// }

// move()  Function code is only executed when the function is called upon.
// console.log(pos);

// function move(byAmount) {
//     pos += byAmount;
// }

// move(5)
// console.log(pos)

function move(pos, byAmount) {
    const newPos = pos + byAmount;
    return newPos;
}

var finalPos = move(0,2)

console.log(finalPos)