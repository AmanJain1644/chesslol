const alphabet = 'abcdefgh'
let squares = document.getElementsByClassName("square")

let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
]

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let square = document.getElementById(`${alphabet.charAt(j)}${i + 1}`)
        let piece = document.createElement("p")

        switch (board[i][j]) {
            case 1:
                piece.classList.add("wp")
                square.append(piece)
                piece.append("p")
                break
            case -1:
                piece.classList.add("bp")
                square.append(piece)
                piece.append("p")
                break
        }
    }
}

for (let i = 0; i < squares.length; i++) {

}
