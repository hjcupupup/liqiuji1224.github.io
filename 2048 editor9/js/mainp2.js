	//更新显示，将表格中的数据，更新到界面显示
	function updateView(type){
	
		if(type==TYPE_1){
			for(var row=0; row<4; row++){
				for(var col=0; col<4; col++){
					var n =cells[row][col];
					var cell = $("cell"+row+col);
					//清楚显示的数据和显示样式
					cell.className="cell";
					cell.innerHTML = "";
					if(n>0){
						//更新显示样式
						cell.className="cell num"+n;
						//更新显示的数字
						cell.innerHTML = n;
					}
				}
			}
						
		}else if(type==TYPE_2){
			for(var row=0; row<4; row++){
				for(var col=0; col<4; col++){
					var n =cells2[row][col];
					var cell = $("cellA"+row+col);
					//清楚显示的数据和显示样式
					cell.className="cell";
					cell.innerHTML = "";
					if(n>0){
						//更新显示样式
						cell.className="cell num"+n;
						//更新显示的数字
						cell.innerHTML = n;
	                }
				}
			}
		}			
		$("score1").innerHTML = score1;
		$("score2").innerHTML = score2;
	}	
	
	//元素查询方法，移植自jquery库
	function $(id){
		return document.getElementById(id);
	}
	//首先定义一个二维数组，可以更改cells中的内容并注释掉startAction中的循环进行效果调试而不必
    	var cells= [[0,0,0,0],
    				[0,0,0,0],
    				[0,0,0,0],
    				[0,0,0,0]];
	    var cells2= [[0,0,0,0],
	    			[0,0,0,0],
	    			[0,0,0,0],
	    			[0,0,0,0]];
					
					var TYPE_1=1;
					var TYPE_2=2;
    	//游戏进行中
    	var PLAYING = 0;
    	//方块正在移动动画处理中，期间不能响应键盘事件
    	var CELL_MOVEING=1;
    	//游戏结束了，结束了就不能响应键盘事件了
    	var GAME_OVER=2; 
    	
    	var score1 = 0;
    	var score2 = 0;
    	//当前游戏状态
    	var state1 = PLAYING;
		var state2 = PLAYING;
    	
    	//动态效果开关,打开后可以绘制方块的移动动画效果
    	var effect = true;
    	//软件启动初始代码
    	window.onload = function(){
			var a=1;
			var b=2;
    		$("newGame").onclick = function(){
    			if(state1==PLAYING && state2==PLAYING)
    				startAction(a);
					startAction(b);
    		}
    		$("restart").onclick = function(){
    			if(state1==GAME_OVER||state2==GAME_OVER)
    				startAction(a);
    				startAction(b);
    		}
    		startAction(a);
    		startAction(b);
			}
			
			//元素查询方法，移植自jquery库
			function $(id){
				return document.getElementById(id);
			}
			//获取每个单元格前/后一个单元格的信息
			function startAction(type){
				$("gameOver").style.display = "none";
				
				if(type==TYPE_1){
					score1 = 0;
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							cells[row][col]=0;
						}
					}
					randomNumberA();
					randomNumberA();
					updateView(type);
					state1 = PLAYING;
					} else if(type==TYPE_2){
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							cells2[row][col]=0;
						}
					}	
					score2 = 0;
					randomNumberB();
					randomNumberB();
					updateView(type);
					state2 = PLAYING;
					}
				
			}
			
			// 获取同列信息
			function getNextInColA(col, startRow, step){
				var row = startRow;
				while(true){
					if(row<0 || row>=4){
						return -1;
					}
					if(cells[row][col]!=0){
						return row;
					}
					row+=step;
				}
			}
			// 获取同行信息
			function getNextInRowA(row, startCol, step){
				var col = startCol;
				while(true){
					if(col<0 || col>=4){
						return -1;
					}
					if(cells[row][col]!=0){
						return col;
					}
					col+=step;
				}
			}
			// 获取同列信息
			function getNextInColB(col, startRow, step){
				var row = startRow;
				while(true){
					if(row<0 || row>=4){
						return -1;
					}
					if(cells2[row][col]!=0){
						return row;
					}
					row+=step;
				}
			}
			// 获取同行信息
			function getNextInRowB(row, startCol, step){
				var col = startCol;
				while(true){
					if(col<0 || col>=4){
						return -1;
					}
					if(cells2[row][col]!=0){
						return col;
					}
					col+=step;
				}
			}
			/* 向上的动作， */
				function upActionA(){
						if(state1==CELL_MOVEING){
							return false;
						}
						if(! canMoveUpA()){
							return false;
						}
						//每次处理一个列
						for(var col = 0; col<4; col++){
							//每一个列中 从反方向判断是否需要移动处理
							upColA(col);
						}
						return true;
					
				}
				
				// 处理一个列的移动 
				function upColA(col){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var row=0; row<4;){
						var current = cells[row][col];
						var nextRow = getNextInColA(col, row+1, 1);
						//没有下一个，就直接结束了
						if(nextRow==-1){
							return;
						}
						var next = cells[nextRow][col];
			
						if(current == 0){
							//下一个格子移动到当前位置。
							cells[row][col] = next;
							cells[nextRow][col]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
												
								var obj = $("cell"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);			
			    			}
						}else if(current == next){
							//两个格子一样，就合并格子
							cells[row][col] = next+current;
							cells[nextRow][col]=0;
							score1 += cellS[row][col];	

							
							
							row++;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cell"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

								}

						}else{
							//下个不一样，就忽略
							row++;
						}
			   		}
				}
				
			/* 向上的动作， */
				function upActionB(){
						if(state2==CELL_MOVEING){
							return false;
						}
						if(! canMoveUpB()){
							return false;
						}
						//每次处理一个列
						for(var col = 0; col<4; col++){
							//每一个列中 从反方向判断是否需要移动处理
							upColB(col);
						}
						return true;
					
				}
				
				// 处理一个列的移动 
				function upColB(col){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var row=0; row<4;){
						var current = cells2[row][col];
						var nextRow = getNextInColB(col, row+1, 1);
						//没有下一个，就直接结束了
						if(nextRow==-1){
							return;
						}
						var next = cells2[nextRow][col];
			
						if(current == 0){
							//下一个格子移动到当前位置。
							cells2[row][col] = next;
							cells2[nextRow][col]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
												
								var obj = $("cellA"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);			
			    			}
						}else if(current == next){
							//两个格子一样，就合并格子
							cells2[row][col] = next+current;
							cells2[nextRow][col]=0;
							score2 += cells2[row][col];	

							
							
							row++;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cellA"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

								}

						}else{
							//下个不一样，就忽略
							row++;
						}
			   		}
				}				
				
				function downActionA(){
						if(state1==CELL_MOVEING){
							return false;
						}
						if(! canMoveDownA()){
							return false;
						}
						//每次处理一个列
						for(var col = 0; col<4; col++){
							//每一个列中 从反方向判断是否需要移动处理
							downColA(col);
						}
						return true;
			
				}
				// 处理一个列的移动
				
				function downColA(col){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var row=3; row>=0;){
						var current = cells[row][col];
						var nextRow = getNextInColA(col, row-1,1);
						//没有下一个，就直接结束了
						if(nextRow==-1){
							return;
						}
						var next = cells[nextRow][col];
			
						if(current == 0){
							//下一个格子移动到当前位置。
							cells[row][col] = next;
							cells[nextRow][col]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cell"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	
			    			}
						}else if(current == next){
							//两个格子一样，就合并格子
							cells[row][col] = next+current;
							cells[nextRow][col]=0;
							score1 += cells[row][col];	

							}
							
							row--;
							
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子	
								var obj = $("cell"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

						}else{
							//下个不一样，就忽略
							row--;
						}
			   		}
				}

				function downActionB(){
						if(state2==CELL_MOVEING){
							return false;
						}
						if(! canMoveDownB()){
							return false;
						}
						//每次处理一个列
						for(var col = 0; col<4; col++){
							//每一个列中 从反方向判断是否需要移动处理
							downColB(col);
						}
						return true;
			
				}
				// 处理一个列的移动
				
				function downColB(col){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var row=3; row>=0;){
						var current = cells2[row][col];
						var nextRow = getNextInColB(col, row-1,1);
						//没有下一个，就直接结束了
						if(nextRow==-1){
							return;
						}
						var next = cells2[nextRow][col];
			
						if(current == 0){
							//下一个格子移动到当前位置。
							cells2[row][col] = next;
							cells2[nextRow][col]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cellA"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	
			    			}
						}else if(current == next){
							//两个格子一样，就合并格子
							cells2[row][col] = next+current;
							cells2[nextRow][col]=0;
							score2 += cells2[row][col];	

							}
							
							row--;
							
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子	
								var obj = $("cellA"+nextRow+col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

			    			
						}else{
							//下个不一样，就忽略
							row--;
						}
			   		}
				}
				
				function leftActionA(){
						if(state1==CELL_MOVEING){
							return false;
						}
						if(! canMoveLeftA()){
							return false;
						}
						//每次处理一个行
						for(var row = 0; row<4; row++){
							//每一个行中 从反方向判断是否需要移动处理
							moveLeftA(row);
						}
						return true;			
					
				}
				// 处理一个列的移动
				function moveLeftA(row){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var col=0; col<4;){
						var current = cells[row][col];
						var nextCol = getNextInRowA(row, col+1, 1);
						//没有下一个，就直接结束了
						if(nextCol==-1){
							return;
						}
						var next = cells[row][nextCol];
						
						//console.log("next:"+next);
						//console.log("current:"+current);
                    }
				}
				function leftActionB(){
						if(state2==CELL_MOVEING){
							return false;
						}
						if(! canMoveLeftB()){
							return false;
						}
						//每次处理一个行
						for(var row = 0; row<4; row++){
							//每一个行中 从反方向判断是否需要移动处理
							moveLeftB(row);
						}
						return true;			
					
				}
				// 处理一个列的移动
				function moveLeftB(row){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var col=0; col<4;){
						var current = cells2[row][col];
						var nextCol = getNextInRowB(row, col+1, 1);
						//没有下一个，就直接结束了
						if(nextCol==-1){
							return;
						}
						var next = cells2[row][nextCol];
						
						//console.log("next:"+next);
						//console.log("current:"+current);
						
						if(current == 0){
							//下一个格子移动到当前位置。
							cells2[row][col] = next;
							cells2[row][nextCol]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								
								var obj = $("cellA"+row+nextCol);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

			    			}
						}else if(current == next){
							//两个格子一样，就合并格子
							cells2[row][col] = next+current;
							cells2[row][nextCol]=0;

							score2 += cells2[row][col];	

							
							col++;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子

								var obj = $("cellA"+row+Nextcol);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

			    			}
						}else{
							//下个不一样，就忽略
							col++;
						}
			   		}
				}
				
				function rightActionA(){

									if(state1==CELL_MOVEING){
										return false;
									}
									if(! canMoveRightA()){
										return false;
									}
									//每次处理一个行
									for(var row = 0; row<4; row++){
										//每一个行中 从反方向判断是否需要移动处理
										moveRightA(row);
									}
									return true;
						
			
			
					
			
				}
				// 处理一个列的移动
				function moveRightA(row){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var col=3; col>=0;){
						var current = cells[row][col];
						var nextCol = getNextInRowA(row, col-1, -1);
						//没有下一个，就直接结束了
						if(nextCol==-1){
							return;
						}
						var next = cells[row][nextCol];
						
						//console.log("next:"+next);
						//console.log("current:"+current);
			 
						if(current == 0){
							//下一个格子移动到当前位置。
							cells[row][col] = next;
							cells[row][nextCol]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cell"+row+nextCol);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	
								}
			    		
						}else if(current == next){
							//两个格子一样，就合并格子
							cells[row][col] = next+current;
							cells[row][nextCol]=0;

							score1 += cells[row][col];	

							
							col--;
							
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cell"+nextRow+Col);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

			    			}
						}else{
							//下个不一样，就忽略
							col--;
						}
			   		}
				}

				function rightActionB(){

									if(state2==CELL_MOVEING){
										return false;
									}
									if(! canMoveRightB()){
										return false;
									}
									//每次处理一个行
									for(var row = 0; row<4; row++){
										//每一个行中 从反方向判断是否需要移动处理
										moveRightB(row);
									}
									return true;
						
			
			
					
			
				}
				// 处理一个列的移动
				function moveRightB(row){
					//一个列中，按照反方向检查是否需要合并处理。
					for(var col=3; col>=0;){
						var current = cells2[row][col];
						var nextCol = getNextInRowB(row, col-1, -1);
						//没有下一个，就直接结束了
						if(nextCol==-1){
							return;
						}
						var next = cells2[row][nextCol];
						
						//console.log("next:"+next);
						//console.log("current:"+current);
			 
						if(current == 0){
							//下一个格子移动到当前位置。
							cells2[row][col] = next;
							cells2[row][nextCol]=0;
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cellA"+row+nextCol);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	
								
			    			}
						}else if(current == next){
							//两个格子一样，就合并格子
							cells2[row][col] = next+current;
							cells2[row][nextCol]=0;

							score2 += cells2[row][col];	

							
							col--;
							
							if(effect){//如果动效开关打开，就处理动画
								// $("cell"+nextRow+col) 找到下一个对象对应的格子
								var obj = $("cellA"+row+nextCol);
								var top =  row*120+20;
								var left = col*120+20;
								animation.add(obj, top, left);	

			    			}
						}else{
							//下个不一样，就忽略
							col--;
						}
			   		}
				}
			
				function canMoveUpA(){
					for(var col=0; col<4; col++){
						for(var row=1; row<4; row++){
							//格子上方是空位置, 可以移动
							if(cells[row][col]!=0 && cells[row-1][col]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells[row][col]!=0 && (cells[row][col] == cells[row-1][col])){
								return true;
							}
						}
					}
					return false;
				}
					
					
				function canMoveUpB(){
					for(var col=0; col<4; col++){
						for(var row=1; row<4; row++){
							//格子上方是空位置, 可以移动
							if(cells2[row][col]!=0 && cells2[row-1][col]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells2[row][col]!=0 && (cells2[row][col] == cells2[row-1][col])){
								return true;
							}
						}
					}
					return false;
				}
					
				function canMoveDownA(){
					for(var col=0; col<4; col++){
						for(var row=0; row<3; row++){
							//格子上方是空位置, 可以移动
							if(cells[row][col]!=0 && cells[row+1][col]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells[row][col]!=0 && (cells[row][col] == cells[row+1][col])){
								return true;
							}
						}
					}
					return false;
				}
				function canMoveDownB(){
					for(var col=0; col<4; col++){
						for(var row=0; row<3; row++){
							//格子上方是空位置, 可以移动
							if(cells2[row][col]!=0 && cells2[row+1][col]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells2[row][col]!=0 && (cells2[row][col] == cells2[row+1][col])){
								return true;
							}
						}
					}
					return false;
				}				
				function canMoveLeftA(){
					for(var col=1; col<4; col++){
						for(var row=0; row<4; row++){
							//格子上方是空位置, 可以移动
							if(cells[row][col]!=0 && cells[row][col-1]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells[row][col]!=0 && (cells[row][col] == cells[row][col-1])){
								return true;
							}
						}
					}
					return false;
				}
				function canMoveLeftB(){
					for(var col=1; col<4; col++){
						for(var row=0; row<4; row++){
							//格子上方是空位置, 可以移动
							if(cells2[row][col]!=0 && cells2[row][col-1]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells2[row][col]!=0 && (cells2[row][col] == cells2[row][col-1])){
								return true;
							}
						}
					}
					return false;
				}				
				function canMoveRightA(){
					for(var col=0; col<3; col++){
						for(var row=0; row<4; row++){
							//格子上方是空位置, 可以移动
							if(cells[row][col]!=0 && cells[row][col+1]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells[row][col]!=0 && (cells[row][col] == cells[row][col+1])){
								return true;
							}
						}
					}
					return false;
				}
				function canMoveRightB(){
					for(var col=0; col<3; col++){
						for(var row=0; row<4; row++){
							//格子上方是空位置, 可以移动
							if(cells2[row][col]!=0 && cells2[row][col+1]==0){
								return true;
							}
							//格子上方相邻的相等，可以移动
							if(cells2[row][col]!=0 && (cells2[row][col] == cells2[row][col+1])){
								return true;
							}
						}
					}
					return false;
				}				
				
				// function test(){
				// 	rightAction();
				// 	state=CELL_MOVEING;
				// 	animation.start(function(){
				// 		//console.log("update");
				// 		randomNumber();
				// 		updateView();
				// 		state = PLAYING;
				// 	});
				// }
				
			//检查当前的表格中是否是满的，如果满了返回true，否则返回false
			function fullA(){
				for(var row=0; row<4; row++){
					for(var col=0; col<4; col++){
						if(cells[row][col]==0){
							return false;
						}
					}
				}
				return true;
			}
				//检查当前的表格中是否是满的，如果满了返回true，否则返回false
				function fullB(){
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							if(cells2[row][col]==0){
								return false;
							}
						}
					}
					return true;
				}
				//向表格随机插入一个数字，如果插入成功返回true，插入失败返回false
				function randomNumberA(){
					if(fullA()){
						return false;
					}
					while(true){
						var col = parseInt(Math.random()*4);
						var row = parseInt(Math.random()*4);
						if(cells[row][col]==0){
							var n = Math.random() <0.5 ? 2:4;
							cells[row][col]=n;
							return true;
						}
					}
				}
				//向表格随机插入一个数字，如果插入成功返回true，插入失败返回false
				function randomNumberB(){
					if(fullB()){
						return false;
					}
					while(true){
						var col = parseInt(Math.random()*4);
						var row = parseInt(Math.random()*4);
						if(cells2[row][col]==0){
							var n = Math.random() <0.5 ? 2:4;
							cells2[row][col]=n;
							return true;
						}
					}
				}
				
				
				function has8192A(){
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							if(cells[row][col]==8192){
								return true;	
							}
						}
					}
					return false;
				}
				
				function hasSpaceA(cell){
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							if(cells[row][col]==0){
								return true;	
							}
						}
					}
					return false;
				}
				
				function has8192B(){
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							if(cells2[row][col]==8192){
								return true;	
							}
						}
					}
					return false;
				}
				
				function hasSpaceB(cell){
					for(var row=0; row<4; row++){
						for(var col=0; col<4; col++){
							if(cells2[row][col]==0){
								return true;	
							}
						}
					}
					return false;
				}				
				/* 显示游戏结束界面 */
				//检查是否胜利
				function checkWinA(){
					var ch=has8192A();
					if(ch==true){
						return true;
						}
						return false;
					}
				//检查是否胜利
				function checkWinB(){
					var ch=has8192B();
					if(ch==true){
						return true;
						}
						return false;
					}	
				//检查游戏是否结束
				function checkGameOverA(){
					var x=has8192A();
					var y=hasSpaceA();
					var left=canMoveLeftA();
					var right=canMoveRightA();
					var up=canMoveUpA();
					var down=canMoveDownA();
					if(x==true){
						return true;
					}else if(y==false && left==false && right==false && up==false && down==false){
					return true;
					}
					return false;
				}
				
				//检查游戏是否结束
				function checkGameOverB(){
					var x=has8192B();
					var y=hasSpaceB();
					var left=canMoveLeftB();
					var right=canMoveRightB();
					var up=canMoveUpB();
					var down=canMoveDownB();
					if(x==true){
						return true;
					}else if(y==false && left==false && right==false && up==false && down==false){
					return true;
					}
					return false;
				}
				//实现游戏结束
				function gameOver(){
					var b1=checkGameOverA();
					var b2=checkGameOverB();
					var a1=checkWinA();
					var a2=checkWinB();
					if(a1||a2||b1||b2){
						state1 = GAME_OVER;
						state1 = GAME_OVER;
						$("gameOver").style.display = "block";
						
						if(a1 && !a2){	
							alert("恭喜玩家一获得胜利，得分："+score1);
						}else if(a2 && !a1){
							alert("恭喜玩家二获得胜利，得分："+score2);
						}else if(a2 && a1){
						    alert("平局");
						}	
						
						if(b2 && !b1){
							alert("恭喜玩家一获得胜利，得分："+score1);
						}else if(b1 && !b2){
							alert("恭喜玩家二获得胜利，得分："+score2);
						}
						
						
					}
				}
			