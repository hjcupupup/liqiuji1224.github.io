//监听键盘事件

    		document.onkeydown=function(event){
    			if(state1 != PLAYING && state2 != PLAYING){
    				return;
    			}
				var check=checkGameOverA();
				var check2=checkGameOverB();
				gameOver();
				var move = false;
			    var move2 = false;//移动端的滑动识别尚待完善
				var typee=0;
			    switch (event.keyCode) {
			        case 37://left
			            move = leftActionB();
						typee=2;
			            break;
			        case 38://up
			            move = upActionB();
			            typee=2;
						break;
			        case 39://right
			            move = rightActionB();
			            typee=2;
						break;
			        case 40://down
			            move = downActionB();
			            typee=2;
						break;
					case 65://left
					    move = leftActionA();
					    typee=1;
						break;
					case 87://up
					    move = upActionA();
					    typee=1;
						break;
					case 68://right
					    move = rightActionA();
					    typee=1;
						break;
					case 83://down
					    move = downActionA();
					    typee=1;
						break;	
				}
				if(typee==TYPE_1){
				if(! move){
					return;
				}
				if(effect){
					state1=CELL_MOVEING;
					animation.start(function(){
						// console.log("update");
						updateView(1);
						state1 = PLAYING;
				    	if(!check){
				    		setTimeout(function(){
								randomNumberA();
								updateView(1);
							}, 100);
				    	}
					});
				}else{
					if(!check){
						setTimeout(function(){
							randomNumberA();
							updateView(1);
						}, 100);
					}
				
					updateView(1);
					state1 = PLAYING;
				}
						
				}else if(typee==TYPE_2){
				if(! move2){
					return;
				}
				if(effect){
					state2=CELL_MOVEING;
					animation.start(function(){
						// console.log("update");
						updateView(2);
						state2 = PLAYING;
				    	if(!check2){
				    		setTimeout(function(){
								randomNumberB();
								updateView(2);
							}, 100);
				    	}
					});
				}else{
					if(!check2){
						setTimeout(function(){
							randomNumberB();
							updateView(2);
						}, 100);
					}
				
					updateView(2);
					state2 = PLAYING;
				}	
				}
				gameOver();	
    		}