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
    				startActionA();
					startActionB();
    		}
    		$("restart").onclick = function(){
    			if(state1==GAME_OVER||state2==GAME_OVER)
    				startActionA();
    				startActionB();
    		}
    		startActionA();
    		startActionB();
			}