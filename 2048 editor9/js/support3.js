	// //元素查询方法，移植自jquery库
	// function $(id){
	// 	return document.getElementById(id);
	// }
	// //获取每个单元格前/后一个单元格的信息
	// function startAction(cell,type){
	// 	$("gameOver").style.display = "none";
	// 	for(var row=0; row<4; row++){
	// 		for(var col=0; col<4; col++){
	// 			cell[row][col]=0;
	// 		}
	// 	}
	// 	if(type==TYPE_1){
	// 		score1 = 0;
	// 		randomNumber(cell);
	// 		randomNumber(cell);
	// 		updateView(cell);
	// 		state1 = PLAYING;
	// 		} else if(type==TYPE_2){
	// 		score2 = 0;
	// 		randomNumber(cell);
	// 		randomNumber(cell);
	// 		updateView(cell);
	// 		state2 = PLAYING;
	// 		}
		
	// }
	
	// // 获取同列信息
	// function getNextInCol(col, startRow, step,cell){
	// 	var row = startRow;
	// 	while(true){
	// 		if(row<0 || row>=4){
	// 			return -1;
	// 		}
	// 		if(cell[row][col]!=0){
	// 			return row;
	// 		}
	// 		row+=step;
	// 	}
	// }
	// // 获取同行信息
	// function getNextInRow(row, startCol, step,cell){
	// 	var col = startCol;
	// 	while(true){
	// 		if(col<0 || col>=4){
	// 			return -1;
	// 		}
	// 		if(cell[row][col]!=0){
	// 			return col;
	// 		}
	// 		col+=step;
	// 	}
	// }
	
	// /* 向上的动作， */
 //    	function upAction(cell,type){
	// 		if(type==TYPE_1){
	// 			if(state1==CELL_MOVEING){
	// 				return false;
	// 			}
	// 			if(! canMoveUp(cell)){
	// 				return false;
	// 			}
	// 			//每次处理一个列
	// 			for(var col = 0; col<4; col++){
	// 				//每一个列中 从反方向判断是否需要移动处理
	// 				upCol(col,cell,type);
	// 			}
	// 			return true;
	// 		}else if(type==TYPE_2){
	// 			if(state2==CELL_MOVEING){
	// 				return false;
	// 			}
	// 			if(! canMoveUp(cell)){
	// 				return false;
	// 			}
	// 			//每次处理一个列
	// 			for(var col = 0; col<4; col++){
	// 				//每一个列中 从反方向判断是否需要移动处理
	// 				upCol(col,cell,type);
	// 			}
	// 			return true;
    		
 //    	}
 //    	// 处理一个列的移动 
 //    	function upCol(col,cell,type){
 //    		//一个列中，按照反方向检查是否需要合并处理。
 //    		for(var row=0; row<4;){
 //    			var current = cell[row][col];
 //    			var nextRow = getNextInCol(col, row+1, 1,cell);
 //    			//没有下一个，就直接结束了
 //    			if(nextRow==-1){
 //    				return;
 //    			}
 //    			var next = cells[nextRow][col];

 //    			if(current == 0){
 //    				//下一个格子移动到当前位置。
 //    				cell[row][col] = next;
 //    				cell[nextRow][col]=0;
 //    				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
						
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_2){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
						
	//     			}
 //    			}else if(current == next){
 //    				//两个格子一样，就合并格子
 //    				cell[row][col] = next+current;
 //    				cell[nextRow][col]=0;
 //    				if(type==TYPE_1){
	// 				score1 += cell[row][col];	
	// 				}else if(type==TYPE_1){
	// 				score1 += cell[row][col];	
	// 				}
    				
    				
 //    				row++;
	// 				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_1){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
						
	//     			}
 //    			}else{
 //    				//下个不一样，就忽略
 //    				row++;
 //    			}
 //       		}
 //    	}
    	
    	
    	
 //    	function downAction(cell,type){
 //            if(type==TYPE_1){
	// 			if(state1==CELL_MOVEING){
	// 				return false;
	// 			}
	// 			if(! canMoveDown(cell)){
	// 				return false;
	// 			}
	// 			//每次处理一个列
	// 			for(var col = 0; col<4; col++){
	// 				//每一个列中 从反方向判断是否需要移动处理
	// 				downCol(col,cell,type);
	// 			}
	// 			return true;
	// 		}else if(type==TYPE_2){
	// 			if(state2==CELL_MOVEING){
	// 				return false;
	// 			}
	// 			if(! canMoveDown(cell)){
	// 				return false;
	// 			}
	// 			//每次处理一个列
	// 			for(var col = 0; col<4; col++){
	// 				//每一个列中 从反方向判断是否需要移动处理
	// 				downCol(col,cell,type);
 //             }
	// 		 return true;
 //    		}
    
 //    	}
 //    	// 处理一个列的移动
		
 //    	function downCol(col,cell,type){
 //    		//一个列中，按照反方向检查是否需要合并处理。
 //    		for(var row=3; row>=0;){
 //    			var current = cells[row][col];
 //    			var nextRow = getNextInCol(col, row-1,1, cell);
 //    			//没有下一个，就直接结束了
 //    			if(nextRow==-1){
 //    				return;
 //    			}
 //    			var next = cell[nextRow][col];

 //    			if(current == 0){
 //    				//下一个格子移动到当前位置。
 //    				cell[row][col] = next;
 //    				cell[nextRow][col]=0;
 //    				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_2){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
	//     			}
 //    			}else if(current == next){
 //    				//两个格子一样，就合并格子
 //    				cells[row][col] = next+current;
 //                    cell[row][col] = next+current;
 //    				cell[nextRow][col]=0;
 //    				if(type==TYPE_1){
	// 				score1 += cell[row][col];	
	// 				}else if(type==TYPE_1){
	// 				score1 += cell[row][col];	
	// 				}
    				
	// 				row--;
					
 //    				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_1){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
	//     			}
 //    			}else{
 //    				//下个不一样，就忽略
 //    				row--;
 //    			}
 //       		}
 //    	}
		
	// 	function leftAction(cell,type){
 //    		if(type==TYPE_1){
	// 			if(state1==CELL_MOVEING){
	// 				return false;
	// 			}
	// 			if(! canMoveLeft(cell)){
	// 				return false;
	// 			}
	// 			//每次处理一个行
	// 			for(var row = 0; row<4; row++){
	// 				//每一个行中 从反方向判断是否需要移动处理
	// 				moveLeft(row,cell,type);
	// 			}
	// 			return true;
	// 		}else if(type==TYPE_2){
	// 			if(state2==CELL_MOVEING){
	// 				return false;
	// 			}
	// 			if(! canMoveLeft(cell)){
	// 				return false;
	// 			}
	// 			//每次处理一个行
	// 			for(var row = 0; row<4; row++){
	// 				//每一个行中 从反方向判断是否需要移动处理
	// 				moveLeft(row,cell,type);
	// 			}
	// 			return true;
 //            }
    		
 //    	}
 //    	// 处理一个列的移动
 //    	function moveLeft(row,cell,type){
 //    		//一个列中，按照反方向检查是否需要合并处理。
 //    		for(var col=0; col<4;){
 //    			var current = cell[row][col];
 //    			var nextCol = getNextInRow(row, col+1, 1,cell);
 //    			//没有下一个，就直接结束了
 //    			if(nextCol==-1){
 //    				return;
 //    			}
 //    			var next = cell[row][nextCol];
    			
 //    			//console.log("next:"+next);
 //    			//console.log("current:"+current);

 //    			if(current == 0){
 //    				//下一个格子移动到当前位置。
 //    				cell[row][col] = next;
 //    				cell[row][nextCol]=0;
 //    				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_2){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
	//     			}
 //    			}else if(current == next){
 //    				//两个格子一样，就合并格子
 //    				cell[row][col] = next+current;
 //    				cell[row][nextCol]=0;
    				
 //    				if(type==TYPE_1){
 //    				score1 += cell[row][col];	
 //    				}else if(type==TYPE_1){
 //    				score1 += cell[row][col];	
 //    				}
    				
	// 				col++;
 //    				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_2){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
	//     			}
 //    			}else{
 //    				//下个不一样，就忽略
 //    				col++;
 //    			}
 //       		}
 //    	}
		
	// 	function rightAction(cell,type){
	// 		if(type==TYPE_1){
	// 						if(state1==CELL_MOVEING){
	// 							return false;
	// 						}
	// 						if(! canMoveRight(cell)){
	// 							return false;
	// 						}
	// 						//每次处理一个行
	// 						for(var row = 0; row<4; row++){
	// 							//每一个行中 从反方向判断是否需要移动处理
	// 							moveRight(row,cell,type);
	// 						}
	// 						return true;
	// 					}else if(type==TYPE_2){
	// 						if(state2==CELL_MOVEING){
	// 							return false;
	// 						}
	// 						if(! canMoveRight(cell)){
	// 							return false;
	// 						}
	// 						//每次处理一个行
	// 						for(var row = 0; row<4; row++){
	// 							//每一个行中 从反方向判断是否需要移动处理
	// 							moveRight(row,cell,type);
	// 						}
	// 						return true;
	// 					}


    		

 //    	}
 //    	// 处理一个列的移动
 //    	function moveRight(row,cell,type){
 //    		//一个列中，按照反方向检查是否需要合并处理。
 //    		for(var col=3; col>=0;){
 //    			var current = cell[row][col];
 //    			var nextCol = getNextInRow(row, col-1, -1,cell);
 //    			//没有下一个，就直接结束了
 //    			if(nextCol==-1){
 //    				return;
 //    			}
 //    			var next = cell[row][nextCol];
    			
 //    			//console.log("next:"+next);
 //    			//console.log("current:"+current);
 
 //    			if(current == 0){
 //    				//下一个格子移动到当前位置。
 //    				cell[row][col] = next;
 //    				cell[row][nextCol]=0;
 //    				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_2){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
	//     			}
 //    			}else if(current == next){
 //    				//两个格子一样，就合并格子
 //    				cell[row][col] = next+current;
 //    				cell[row][nextCol]=0;
    				
    				
 //    				if(type==TYPE_1){
 //    				score1 += cell[row][col];	
 //    				}else if(type==TYPE_1){
 //    				score1 += cell[row][col];	
 //    				}
    				
 //    				col--;
    				
	// 				if(effect){//如果动效开关打开，就处理动画
	// 					// $("cell"+nextRow+col) 找到下一个对象对应的格子
	// 					if(type==TYPE_1){
	// 					var obj = $("cell"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}else if(type==TYPE_2){
	// 					var obj = $("cellA"+nextRow+col);
	// 					var top =  row*120+20;
	// 					var left = col*120+20;
	// 					animation.add(obj, top, left);	
	// 					}
	//     			}
 //    			}else{
 //    				//下个不一样，就忽略
 //    				col--;
 //    			}
 //       		}
 //    	}
	
	// 	function canMoveUp(cell){
	// 		for(var col=0; col<4; col++){
	// 			for(var row=1; row<4; row++){
	// 				//格子上方是空位置, 可以移动
	// 				if(cell[row][col]!=0 && cell[row-1][col]==0){
	// 					return true;
	// 				}
	// 				//格子上方相邻的相等，可以移动
	// 				if(cell[row][col]!=0 && (cell[row][col] == cell[row-1][col])){
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 		return false;
	// 	}
			
	// 	function canMoveDown(cell){
	// 		for(var col=0; col<4; col++){
	// 			for(var row=0; row<3; row++){
	// 				//格子上方是空位置, 可以移动
	// 				if(cell[row][col]!=0 && cell[row+1][col]==0){
	// 					return true;
	// 				}
	// 				//格子上方相邻的相等，可以移动
	// 				if(cell[row][col]!=0 && (cell[row][col] == cell[row+1][col])){
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 		return false;
	// 	}
		
	// 	function canMoveLeft(cell){
	// 		for(var col=1; col<4; col++){
	// 			for(var row=0; row<4; row++){
	// 				//格子上方是空位置, 可以移动
	// 				if(cell[row][col]!=0 && cell[row][col-1]==0){
	// 					return true;
	// 				}
	// 				//格子上方相邻的相等，可以移动
	// 				if(cell[row][col]!=0 && (cell[row][col] == cell[row][col-1])){
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 		return false;
	// 	}
		
	// 	function canMoveRight(cell){
	// 		for(var col=0; col<3; col++){
	// 			for(var row=0; row<4; row++){
	// 				//格子上方是空位置, 可以移动
	// 				if(cell[row][col]!=0 && cell[row][col+1]==0){
	// 					return true;
	// 				}
	// 				//格子上方相邻的相等，可以移动
	// 				if(cell[row][col]!=0 && (cell[row][col] == cell[row][col+1])){
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 		return false;
	// 	}
		
    	
 //    	function test(){
 //    		rightAction();
 //    		state=CELL_MOVEING;
 //    		animation.start(function(){
 //    			//console.log("update");
 //    			randomNumber();
 //    			updateView();
 //    			state = PLAYING;
 //    		});
 //    	}
    	

 //    	//检查当前的表格中是否是满的，如果满了返回true，否则返回false
 //    	function full(cell){
 //    		for(var row=0; row<4; row++){
 //    			for(var col=0; col<4; col++){
 //    				if(cell[row][col]==0){
 //    					return false;
 //    				}
 //    			}
 //    		}
 //    		return true;
 //    	}
 //    	//向表格随机插入一个数字，如果插入成功返回true，插入失败返回false
 //    	function randomNumber(cell){
 //    		if(full(cell)){
 //    			return false;
 //    		}
 //    		while(true){
 //    			var col = parseInt(Math.random()*4);
 //    			var row = parseInt(Math.random()*4);
 //    			if(cell[row][col]==0){
 //    				var n = Math.random() <0.5 ? 2:4;
 //    				cell[row][col]=n;
 //    				return true;
 //    			}
 //    		}
 //    	}
    	
    	
 //    	function has8192(cell){
 //    		for(var row=0; row<4; row++){
 //    			for(var col=0; col<4; col++){
 //    				if(cell[row][col]==8192){
 //    					return true;	
 //    				}
 //    			}
 //    		}
	// 		return false;
 //    	}
    	
 //    	function hasSpace(cell){
 //    		for(var row=0; row<4; row++){
 //    			for(var col=0; col<4; col++){
 //    				if(cell[row][col]==0){
 //    					return true;	
 //    				}
 //    			}
 //    		}
	// 		return false;
 //    	}
    	
    	
 //    	/* 显示游戏结束界面 */
	// 	//检查是否胜利
	// 	function checkWin(cell){
	// 		var ch=has8192(cell);
	// 		if(ch==true){
	// 			return true;
	// 			}
	// 			return false;
	// 		}
	// 	//检查游戏是否结束
	// 	function checkGameOver(cell){
	// 		var x=has8192(cell);
	// 		var y=hasSpace(cell);
	// 		var left=canMoveLeft(cell);
	// 		var right=canMoveRight(cell);
	// 		var up=canMoveUp(cell);
	// 		var down=canMoveDown(cell);
	// 		if(x==true){
	// 			return true;
	// 		}else if(y==false && left==false && right==false && up==false && down==false){
	// 		return true;
	// 		}
	// 		return false;
	// 	}
	// 	//实现游戏结束
	// 	function gameOver(){
	// 		var b1=checkGameOver(cells);
	// 		var b2=checkGameOver(cells2);
	// 		var a1=checkWin(cells);
	// 		var a2=checkWin(cells2);
	// 		if(a1||a2||b1||b2){
	// 			state1 = GAME_OVER;
	// 			state1 = GAME_OVER;
	// 			$("gameOver").style.display = "block";
				
	// 			if(a1 && !a2){	
	// 				alert("恭喜玩家一获得胜利，得分："+score1);
	// 			}else if(a2 && !a1){
	// 				alert("恭喜玩家二获得胜利，得分："+score2);
	// 			}else if(a2 && a1){
	// 			    alert("平局");
	// 			}	
				
	// 			if(b2 && !b1){
	// 				alert("恭喜玩家一获得胜利，得分："+score1);
	// 			}else if(b1 && !b2){
	// 				alert("恭喜玩家二获得胜利，得分："+score2);
	// 			}
				
				
	// 		}
			
	// 		// if(checkGameOver()&&!checkWin()){
	// 		// 	state = GAME_OVER;
	// 		// 	$("gameOver").style.display = "block";
	// 		// }else if(checkWin()){
	// 		// 	state = GAME_OVER;
	// 		// 	$("gameOver").style.display = "block";
	// 		// }
		
	// 	}