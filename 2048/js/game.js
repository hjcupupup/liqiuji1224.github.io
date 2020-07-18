//通过上下左右四个键进行操作

//1.键盘事件的捕获，keydown表示键盘被按下

$(document).keydown(function(event){
	//event是keydown事件自带
	// switch(event.keyCode){
	// 	case "ArrowLeft":
	// 	 console.log('按下了左方向键');
	// 	//moveLeft();//moveleft判断向左移动逻辑 bool类型
	// 	if(moveLeft()){
	// 		//重新随机生成两个数字
	// 		generateOneNumber();
	// 		//判断这次移动完成后游戏是否结束了？
	// 		//isgameover();
	// 	}
	// 	  break; //left
		  
	// 	case 38:
	// 	  break;//up
		  
	// 	case 39:
	// 	  break;//right
		  
	// 	case 40:
	// 	  break;//down
		  
	// 	default:
	// 	   break;
	// }
	var keyCode = event.keyCode
	if (keyCode == 37){
		//moveLeft();//moveleft判断向左移动逻辑 bool类型
		if(moveLeft()){
		// 		//重新随机生成两个数字
				generateOneNumber();
		// 		//判断这次移动完成后游戏是否结束了？
		// 		//isgameover();
		
			}
		alert('你已经按下L键'); 
	}
	else if(keyCode == 38){
		
		        alert('你已经按下R键');    
		
		
	}
	else if(keyCode == 39){
		
		        alert('你已经按下T键');    
		
		
	}
	else if(keyCode == 40){
		
		        alert('你已经按下D键');    
		
		
	}
	else if(keyCode == 13){
		
		        alert('你已经按下回车键');    
		
		
	}
}
)




function moveLeft(){
	// moveleft判断向左移动逻辑 bool类型
	if(!canMoveLeft(board)){
// 		//当前无法移动
		return false;
	}
// 	//完成左移逻辑,第一列不必判断
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
// 			//当前数字格子需有值
			if(board[i][j]!=0){
// 				//左移逻辑
				for(var k=0;k<j;k++){
					if(board[i][k]==0 && noBlockHorizontal(i,k,j,board)){
// 						//left 1
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
// 						//利用交换排序方法实现格子的移动
					}else if(board[i][k]==board[i][j] && noBlokHorizontalCol(i,k,j,board)){
// 						//left2
						 showMoveAnimation(i, j,i,k);
						 board[i][k]+=board[i][j];
						 board[i][j]=0;
					} 
// 					// continue;
				}
			}
		}
	}
	return true;
	setTimeout("updateBoardView();",200);
}