function lookAndSay(n) {
    if (n <= 0) {
        return "";
    }

    let currentTerm = "1";

    for (let i = 1; i < n; i++) {
        let nextTerm = "";
        let count = 1;

        for (let j = 0; j < currentTerm.length; j++) {
            if (j + 1 < currentTerm.length && currentTerm[j] === currentTerm[j + 1]) {
                count++;
            } else {
                nextTerm += count.toString() + currentTerm[j];
                count = 1;
            }
        }

        currentTerm = nextTerm;
    }

    return currentTerm;
}

document.getElementById('sequenceForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const turn = parseInt(document.getElementById('turn').value);
    document.getElementById('sequenceResult').innerText =  lookAndSay(turn);
});


// function CalculateNthTurnSequence(turn = 0) {
//
//     // 1
//     // 11
//     // 21
//     // 1211
//     // 111221
//
//     let sequence = [1];
//     for (let i = 0; i < turn-1; i++) {
//         let newTurn = ''
//         let count = 1;
//
//         Array.from(sequence[i].toString()).map((digit) => {
//             count = 1;
//             if ((count + digit) === newTurn.slice(-2)) {
//                 newTurn = newTurn.slice(0, -2)
//                 count++;
//             }
//             newTurn += count + digit;
//         });
//         sequence[i + 1] = newTurn;
//     }
//     console.log(sequence);
// }
