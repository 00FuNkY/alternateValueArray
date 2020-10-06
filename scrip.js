
function generateBoard(nbRow,nbCol){
    const board = [];
    for(let i = 1; i <= nbRow; i++){
        const boardInside = [];
        for (let j = 1; j <= nbCol; j++){
            if(( (i+j) % 2) ==0 ){
                boardInside.push("");
            } else {
                boardInside.push("x");
            }
        }
        board.push(boardInside);
    }
    console.log(board);
}
generateBoard(5,4);