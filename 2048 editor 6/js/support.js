	//元素查询方法，移植自jquery库
	function $(id){
		return document.getElementById(id);
	}
	//获取每个单元格前/后一个单元格的信息
	// 获取同列信息
	function getNextInCol(col, startRow, step){
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
	function getNextInRow(row, startCol, step){
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
	
	/* 向上的动作， */
    	function upAction(){
    		if(state==CELL_MOVEING){
    			return false;
    		}
    		if(! canMoveUp()){
    			return false;
    		}
    		//每次处理一个列
    		for(var col = 0; col<4; col++){
    			//每一个列中 从反方向判断是否需要移动处理
    			upCol(col);
    		}
    		return true;
    	}
    	// 处理一个列的移动 
    	function upCol(col){
    		//一个列中，按照反方向检查是否需要合并处理。
    		for(var row=0; row<4;){
    			var current = cells[row][col];
    			var nextRow = getNextInCol(col, row+1, 1);
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
    				
    				score += cells[row][col];
    				
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
    	
    	
    	
    	function downAction(){
    		if(state==CELL_MOVEING){
    			return false;
    		}
    		if(! canMoveDown()){
    			return false;
    		}
    		//每次处理一个列
    		for(var col = 0; col<4; col++){
    			//每一个列中 从反方向判断是否需要移动处理
    			downCol(col);
    		}
    		return true;
    	}
    	// 处理一个列的移动
		
    	function downCol(col){
    		//一个列中，按照反方向检查是否需要合并处理。
    		for(var row=3; row>=0;){
    			var current = cells[row][col];
    			var nextRow = getNextInCol(col, row-1, -1);
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
    				
    				score += cells[row][col];
    				
					row--;
					
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+nextRow+col);
						var top =  row*120+20;
						var left = col*120+20;
						animation.add(obj, top, left);
	    			}
    			}else{
    				//下个不一样，就忽略
    				row--;
    			}
       		}
    	}
		
		function leftAction(){
    		if(state==CELL_MOVEING){
    			return false;
    		}
    		if(! canMoveLeft()){
    			return false;
    		}
    		//每次处理一个行
    		for(var row = 0; row<4; row++){
    			//每一个行中 从反方向判断是否需要移动处理
    			moveLeft(row);
    		}
    		return true;
    	}
    	// 处理一个列的移动
    	function moveLeft(row){
    		//一个列中，按照反方向检查是否需要合并处理。
    		for(var col=0; col<4;){
    			var current = cells[row][col];
    			var nextCol = getNextInRow(row, col+1, 1);
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
    				
    				score += cells[row][col];
    				
					col++;
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+row+nextCol);
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
		
		function rightAction(){
    		if(state==CELL_MOVEING){
    			return false;
    		}
    		if(! canMoveRight()){
    			return false;
    		}
    		//每次处理一个行
    		for(var row = 0; row<4; row++){
    			//每一个行中 从反方向判断是否需要移动处理
    			moveRight(row);
    		}
    		return true;
    	}
    	// 处理一个列的移动
    	function moveRight(row){
    		//一个列中，按照反方向检查是否需要合并处理。
    		for(var col=3; col>=0;){
    			var current = cells[row][col];
    			var nextCol = getNextInRow(row, col-1, -1);
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
    				
    				
    				score += cells[row][col];
    				
    				col--;
    				
					if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+row+nextCol);
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
	
		function canMoveUp(){
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
			
		function canMoveDown(){
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
		
		function canMoveLeft(){
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
		
		function canMoveRight(){
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
		
    	
    	function test(){
    		rightAction();
    		state=CELL_MOVEING;
    		animation.start(function(){
    			//console.log("update");
    			randomNumber();
    			updateView();
    			state = PLAYING;
    		});
    	}
    	

    	//检查当前的表格中是否是满的，如果满了返回true，否则返回false
    	function full(){
    		for(var row=0; row<4; row++){
    			for(var col=0; col<4; col++){
    				if(cells[row][col]==0){
    					return false;
    				}
    			}
    		}
    		return true;
    	}
    	//向表格随机插入一个数字，如果插入成功返回true，插入失败返回false
    	function randomNumber(){
    		if(full()){
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
    	function startAction(){
    		$("gameOver").style.display = "none";
    		for(var row=0; row<4; row++){
    			for(var col=0; col<4; col++){
    				cells[row][col]=0;
    			}
    		}
    		score = 0;
    		randomNumber();
    		randomNumber();
    		updateView();
    		state = PLAYING;
    	}
    	
    	
    	function has8192(){
    		for(var row=0; row<4; row++){
    			for(var col=0; col<4; col++){
    				if(cells[row][col]==8192){
    					return true;	
    				}
    			}
    		}
    	}
    	
    	function hasSpace(){
    		for(var row=0; row<4; row++){
    			for(var col=0; col<4; col++){
    				if(cells[row][col]==0){
    					return true;	
    				}
    			}
    		}
    	}
    	
    	
    	/* 显示游戏结束界面 */
    	function gameOver(){
    		//发现8192游戏结束
    		if(has8192()){
    			return true;
       		}
			
			//发现空位置，游戏不结束    	
			if(hasSpace()){
				return false;
			}	
    		
    		//能够移动游戏不结束
    		if( canMoveUp() || canMoveDown() || canMoveLeft() || canMoveRight() ){
    			return false;
    		}
			return true;

    	}
		
		function checkGameOver(q){
			if(q==true){
				state = GAME_OVER;
				$("gameOver").style.display = "block";
			}
		}