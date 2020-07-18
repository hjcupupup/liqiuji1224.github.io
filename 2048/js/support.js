function getPosTop(i, j) {
    return 20 + i * 120;
}
 
function getPosLeft(i, j) {
    return 20 + j * 120;
}
 
function getNumberBackgroundColor(number) {
    switch (number) {
    case 2:
        return "#eee4da";
        break;
    case 4:
        return "#eee4da";
        break;
    case 8:
        return "#f26179";
        break;
    case 16:
        return "#f59563";
        break;
    case 32:
        return "#f67c5f";
        break;
    case 64:
        return "#f65e36";
        break;
    case 128:
        return "#edcf72";
        break;
    case 256:
        return "#edcc61";
        break;
    case 512:
        return "#9c0";
        break;
    case 1024:
        return "#3365a5";
        break;
    case 2048:
        return "#09c";
        break;
    case 4096:
        return "#a6bc";
        break;
    case 8192:
        return "#93c";
        break;
    }
    return "black";
}
 
function getNumberColor(number) {
    if (number <= 4){
        return "#776e65";
    }
    return "white";
}



function canMoveLeft(board){ //判断能否左移
    for(var i = 0;i<4;i++){
        for(var j = 1;j<4;j++){
            if( board[i][j] !=0 ){
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
                    return true;
                }    
	        }
	    }
	}
	return false;
}

 
//判断水平方向是否有障碍物
function noBlockHorizontal(row, col1, col2, board){
    for(var i = col1 + 1; i<col2; i++){
        if(board[row][i]!=0){
            return false;
			}
    }
     return true;
}
 
 

