//create by Ulysses Lee on 2020/7/16
//图方便，有些注释是用英文写的，看的懂就好哈
//为简便操作，js文档全部以jquery文档进行代替

var board= new Array();
//定义一个数组
 // board[0]= new Array();
 // board[1]= new Array();
 // board[2]= new Array();
 // board[3]= new Array();
 
 /*定义二维数组（尝试在下面的inti函数中定义过，但定义完后在updateBoardView()中会显示未定义【
 可能是局部函数的问题？）*/
 
 
 $(document).ready(function(e){
     newgame();
 });
 
$(function(){
	newgame();
})

function newgame(){
	//初始化游戏界面
	init()
	//通知前端对board二位数组进行设定。
	//在随机两个格子上生成数字
	generateOneNumber();
	generateOneNumber();
}
function init(){
	/*在之前已经创建一个数组，因js不能直接定义二维数组，故采用如下算法定义一个二维数组
	一种极其简单的嵌套循环，来表示一个4 4 的棋盘格*/
	for(var i=0;i<4;i++){
		//此处定义成功
		for(var j=0;j<4;j++){
			// board[i][j]=0;//对小方格进行了初始化
			var gridCell=$("#grid-cell-"+i+"-"+j);
			//遍历以获取每个格子元素
			gridCell.css("top",getPosTop(i,j));//certain the position about the top
			gridCell.css("left",getPosLeft(i,j));//certain the pos. about the left
			//this two methods were put in "support.jS"
			
		}
	}
	   for(var i = 0; i<4;i++){//初始化格子数组
	        board[i] = new Array();
	        for(var j = 0;j<4;j++){
	            board[i][j] = 0;
	        }
	    }
      updateBoardView();
}

			
function updateBoardView(){
	//首先清空已有的内容
	 $(".number-cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			//向游戏台上增加内容格子
			
			
			/* var newDiv = document.creatElement('div');
			newDiv.id="'number-cell-'+i+'-'+j";
			var oldDiv = document.getElementById('grid-container');
			var parentNode = oldDiv;
			parentNode.appendChild(newDiv);
			
			var k='number-cell-'+i+'-'+j;
			var cell=$('<div/>')
			.attr("id",k)
			.addClass("number-cell")
			.text("hello world");
			 $("#grid-container").append(cell);
			 alert($('#number-cell-0-0').attr("id"));*/
			 
			 
			// var k="number-cell-"+i+"-"+j;
			
            var newDiv = $('<div></div>').attr({
               class:'number-cell' ,
               id:'number-cell-'+i+'-'+j ,
            });
			$("#grid-container").append(newDiv); 
			
			// $("#grid-container").append("<div class='number-cell' id='number-cell-/"+i+'-'+j/"' ></div>"); 
			/*上一段代码实现给id的动态赋值，但处于某种原因出现了问题，以上注释掉的代码都是出现问题的代码，但问题何在仍旧不知，因此保留
			最终保留的代码是最稳定的实现代码，没出现任何问题*/

			var numberCell=$("#number-cell-"+i+"-"+j);


// 			 if board is 0,all the things will be zero!
			 if( board[i][j]== 0 ){
			 	numberCell.css("width","0px");
			 	numberCell.css("height","0px");
			 	numberCell.css("top",getPosTop(i,j)+50);//
			 	numberCell.css("height",getPosLeft(i,j)+50);

			 }
//// 			  if not ,make the height and width been 75 and give them the back and front color and num.
			 else{
				numberCell.css("width","100px");
				numberCell.css("height","100px");
				numberCell.css("top",getPosTop(i,j));
				numberCell.css("left",getPosLeft(i,j));
				 numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
				numberCell.css("color",getNumberColor(board[i][j]));
				numberCell.text(board[i][j]);
			 }
		}
	}
}

function generateOneNumber(){
	//create a random Number in random position
	//1 position followed
	var randx=parseInt(Math.floor(Math.random()*4));
	var randy=parseInt(Math.floor(Math.random()*4));
	//生成x与y坐标
	while(true){
		//一个生成随机值的死循环,空白格子则满足条件
		if(board[randx][randy]==0){
			break;
		}
		//否则重新生成
		var randx=parseInt(Math.floor(Math.random()*4));
		var randx=parseInt(Math.floor(Math.random()*4));
		//2 random number

		
	}
	   var randNumber=Math.random()<0.5?2:4;
	   //一个和c语言中一样的三元运算符
	//3show the number in random position
		ShowNumberWithAnimation(randx,randy,randNumber);
		// in animation.js
}

