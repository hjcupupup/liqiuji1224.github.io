	//更新显示，将表格中的数据，更新到界面显示
	function updateView(){
		for(var row=0; row<4; row++){
			for(var col=0; col<4; col++){
				var n = cells[row][col];
				var cell = $("cell"+row+col);
				//清楚显示的数据和显示样式
				cell.className="cell";
				cell.innerHTML = "";
				if(n>0){
					//更新显示样式
					cell.className="cell num"+n;
					//更新显示的数字
					// cell.innerHTML = n;
					if(n==2){
							cell.innerHTML ="红";
					}else if(n==4){
							cell.innerHTML ="橙";	
					}else if(n==8){
							cell.innerHTML ="黄";	
					}else if(n==16){
							cell.innerHTML ="绿";	
					}else if(n==32){
							cell.innerHTML ="青";	
					}else if(n==64){
							cell.innerHTML ="蓝";	
					}else if(n==128){
							cell.innerHTML ="紫";	
					}else if(n==256){
							cell.innerHTML ="红";
					}else if(n==512){
							cell.innerHTML ="橙";	
					}else if(n==1024){
							cell.innerHTML ="黄";	
					}else if(n==2048){
							cell.innerHTML ="绿";	
					}else if(n==4096){
							cell.innerHTML ="蓝";	
					}else if(n==8172){
							cell.innerHTML ="紫";	
					}
				}
			}
		}
		
		$("score").innerHTML = score;
		$("finalScore").innerHTML = score;
		
	}