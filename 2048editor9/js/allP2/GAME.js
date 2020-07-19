//监听键盘事件

    		document.onkeydown=function(event){
    			if(state1 != PLAYING && state2 != PLAYING ){
    				return;
    			}
				var check1=checkGameOverA();
				var check2=checkGameOverB();
				gameOver();
				var type=0;
				var move2 = false;
			    var move1 = false;//移动端的滑动识别尚待完善
			    switch (event.keyCode) {
			        case 37://left
			            move2 = leftActionB();
						type=2;
			            break;
			        case 38://up
			            move2 = upActionB();
						type=2;
			            break;
			        case 39://right
			            move2 = rightActionB();
						type=2;
			            break;
			        case 40://down
			            move2 = downActionB();
						type=2;
			            break;
					case 65://left
					    move1 = leftActionA();
						type=1;
					    break;
					case 87://up
					    move1 = upActionA();
						type=1;
					    break;
					case 68://right
					    move1 = rightActionA();
						type=1;
					    break;
					case 83://down
					    move1 = downActionA();
						type=1;
					    break;	
				}
				if(type==1){
					if(!move1){
						return;
					}
					if(effect){
						state1=CELL_MOVEING;
						animationA.start(function(){
							// console.log("update");
							updateViewA();
							state1 = PLAYING;
					    	if(!check1){
					    		setTimeout(function(){
									randomNumberA();
									updateViewA();
								}, 100);
					    	}
						});
						}else{
							if(!check1){
								setTimeout(function(){
									randomNumberA();
									updateViewA();
								}, 100);
							}
							updateViewA();
							state1 = PLAYING;
					}
					
					    gameOver();	
				}else if(type==2){
					if(! move2){
									return;
								}
				         if(effect){
				         	state2=CELL_MOVEING;
				         	animationB.start(function(){
				         		// console.log("update");
				         		updateViewB();
				         		state2 = PLAYING;
				             	if(!check2){
				             		setTimeout(function(){
				         				randomNumberB();
				         				updateViewB();
				         			}, 100);
				             	}
				         	});
							}else{
								if(!check2){
									setTimeout(function(){
										randomNumberB();
										updateViewB();
									}, 100);
								}
										
								updateViewB();
								state2 = PLAYING;
							}
						 gameOver();	
				}
				
    		}
			
		 
