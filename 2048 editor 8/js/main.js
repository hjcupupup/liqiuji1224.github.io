	
	    //首先定义一个二维数组，可以更改cells中的内容并注释掉startAction中的循环进行效果调试
    	var cells= [[0,0,0,0],
    				[0,0,0,0],
    				[0,0,0,0],
    				[0,0,0,0]];
    	//游戏进行中
    	var PLAYING = 0;
    	//方块正在移动动画处理中，期间不能响应键盘事件
    	var CELL_MOVEING=1;
    	//游戏结束了，结束了就不能响应键盘事件了
    	var GAME_OVER=2; 
    	
    	var score = 0;
    	
    	//当前游戏状态
    	var state = PLAYING;
    	
    	//动态效果开关,打开后可以绘制方块的移动动画效果
    	var effect = true;
    	//软件启动初始代码
    	window.onload = function(){
    		$("newGame").onclick = function(){
    			if(state==PLAYING)
    				startAction();
    		}
    		$("restart").onclick = function(){
    			if(state==GAME_OVER)
    				startAction();
    		}
    		startAction();}