//元素查询方法，移植自jquery库
	function $(id){
		return document.getElementById(id);
	}
	//获取每个单元格前/后一个单元格的信息
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
						animationA.add(obj, top, left);
	    			}
    			}else if(current == next){
    				//两个格子一样，就合并格子
    				cells[row][col] = next+current;
    				cells[nextRow][col]=0;
    				
    				score1 += cells[row][col];
    				
    				row++;
					if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+nextRow+col);
						var top =  row*120+20;
						var left = col*120+20;
						animationA.add(obj, top, left);
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
    			var nextRow = getNextInColA(col, row-1, -1);
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
						animationA.add(obj, top, left);
	    			}
    			}else if(current == next){
    				//两个格子一样，就合并格子
    				cells[row][col] = next+current;
    				cells[nextRow][col]=0;
    				
    				score1 += cells[row][col];
    				
					row--;
					
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+nextRow+col);
						var top =  row*120+20;
						var left = col*120+20;
						animationA.add(obj, top, left);
	    			}
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

    			if(current == 0){
    				//下一个格子移动到当前位置。
    				cells[row][col] = next;
    				cells[row][nextCol]=0;
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+row+nextCol);
						var top =  row*120+20;
						var left = col*120+20;
						animationA.add(obj, top, left);
	    			}
    			}else if(current == next){
    				//两个格子一样，就合并格子
    				cells[row][col] = next+current;
    				cells[row][nextCol]=0;
    				
    				score1 += cells[row][col];
    				
					col++;
    				if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+row+nextCol);
						var top =  row*120+20;
						var left = col*120+20;
						animationA.add(obj, top, left);
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
						animationA.add(obj, top, left);
	    			}
    			}else if(current == next){
    				//两个格子一样，就合并格子
    				cells[row][col] = next+current;
    				cells[row][nextCol]=0;
    				
    				
    				score1 += cells[row][col];
    				
    				col--;
    				
					if(effect){//如果动效开关打开，就处理动画
						// $("cell"+nextRow+col) 找到下一个对象对应的格子
						var obj = $("cell"+row+nextCol);
						var top =  row*120+20;
						var left = col*120+20;
						animationA.add(obj, top, left);
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
		function startActionA(){
			$("gameOver").style.display = "none";
			for(var row=0; row<4; row++){
				for(var col=0; col<4; col++){
					cells[row][col]=0;
				}
			}
			score1 = 0;
			randomNumberA();
			randomNumberA();
			updateViewA();
			state1 = PLAYING;
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
		
		function hasSpaceA(){
			for(var row=0; row<4; row++){
				for(var col=0; col<4; col++){
					if(cells[row][col]==0){
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