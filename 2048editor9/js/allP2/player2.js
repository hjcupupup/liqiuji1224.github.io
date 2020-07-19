	//元素查询方法，移植自jquery库
	function $(id){
		return document.getElementById(id);
	}
	//获取每个单元格前/后一个单元格的信息
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
						animationB.add(obj, top, left);
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
						animationB.add(obj, top, left);
	    			}
    			}else{
    				//下个不一样，就忽略
    				row++;
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
    			var nextRow = getNextInColB(col, row-1, -1);
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
						animationB.add(obj, top, left);
	    			}
    			}else if(current == next){
    				//两个格子一样，就合并格子
    				cells2[row][col] = next+current;
    				cells2[nextRow][col]=0;
    				
    				score2 += cells2[row][col];
    				
					row--;
					
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cellA"+nextRow+col);
						var top =  row*120+20;
						var left = col*120+20;
						animationB.add(obj, top, left);
	    			}
    			}else{
    				//下个不一样，就忽略
    				row--;
    			}
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
						animationB.add(obj, top, left);
	    			}
    			}else if(current == next){
    				//两个格子一样，就合并格子
    				cells2[row][col] = next+current;
    				cells2[row][nextCol]=0;
    				
    				score2 += cells2[row][col];
    				
					col++;
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cellA"+row+nextCol);
						var top =  row*120+20;
						var left = col*120+20;
						animationB.add(obj, top, left);
	    			}
    			}else{
    				//下个不一样，就忽略
    				col++;
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
						animationB.add(obj, top, left);
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
						animationB.add(obj, top, left);
	    			}
    			}else{
    				//下个不一样，就忽略
    				col--;
    			}
       		}
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
    	function startActionB(){
    		$("gameOver").style.display = "none";
    		for(var row=0; row<4; row++){
    			for(var col=0; col<4; col++){
    				cells2[row][col]=0;
    			}
    		}
    		score2 = 0;
    		randomNumberB();
    		randomNumberB();
    		updateViewB();
    		state2 = PLAYING;
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
    	
    	function hasSpaceB(){
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
		function checkWinB(){
			var ch=has8192B();
			if(ch==true){
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