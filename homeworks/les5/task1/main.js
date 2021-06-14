'use strict'

function chess() {
    const backBoard = document.createElement('backBoard');
    const board = document.createElement('board');
    const letters = 'ABCDEFGH';
    for (let i = 0; i <= 9; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j <= 9; j++) {
            let td = document.createElement('td');
            if (j === 0 && i != 0 || j === 9 && i != 0) {
                td.textContent = 9 - i || '';
                tr.appendChild(td);
                continue;
            }
            if (i === 0 || i === 9) {
                td.textContent = letters.charAt(j - 1);
                td.classList.add('letter');
                tr.appendChild(td);
                continue;
            }
            if (i % 2 == j % 2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
    backBoard.appendChild(board);
    document.body.append(backBoard);
}

chess();
