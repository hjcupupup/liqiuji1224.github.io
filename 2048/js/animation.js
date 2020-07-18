function ShowNumberWithAnimation(i,j,randNumber){
	var numberCell=$("#number-cell-"+i+"-"+j);
	//获取数字格
	numberCell.css("background-color",getNumberBackgroundColor(randNumber));
	numberCell.css("color",getNumberColor(randNumber));
	//设置前景色与背景色
	numberCell.text(randNumber);
	//设置单元格内容
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},50);//此处运用了jquery中的动画函数，最后的数值单位为毫秒
	
}

function showMoveAnimation(fromx,fromy,tox,toy){
// 	//获取当前数字格的元素
	var numberCell = $('#number-cell-'+fromx +'-'+fromy);
	    numberCell.animate({
	    top:getPosTop(tox,toy),
	    left:getPosLeft(tox,toy)
		},200);
}