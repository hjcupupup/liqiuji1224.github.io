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
