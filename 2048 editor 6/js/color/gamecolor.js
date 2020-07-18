//监听键盘事件
    		document.onkeydown=function(event){
    			if(state != PLAYING){
    				return;
    			}
			    var move = false;
			    switch (event.keyCode) {
			        case 37://left
			            move = leftAction();
			            break;
			        case 38://up
			            move = upAction();
			            break;
			        case 39://right
			            move = rightAction();
			            break;
			        case 40://down
			            move = downAction();
			            break;
					case 65://left
					    move = leftAction();
					    break;
					case 87://up
					    move = upAction();
					    break;
					case 68://right
					    move = rightAction();
					    break;
					case 83://down
					    move = downAction();
					    break;	
				}
				if(! move){
					return;
				}
			    if(effect){
					state=CELL_MOVEING;
    				animation.start(function(){
    					//console.log("update");
    					updateView();
    					state = PLAYING;
				    	if(! gameOver()){
				    		setTimeout(function(){
		    					randomNumber();
		    					updateView();
		    				}, 100);
				    	}
    				});
			    }else{
			    	if(! gameOver()){
			    		setTimeout(function(){
	    					randomNumber();
	    					updateView();
	    				}, 100);
			    	}

    				updateView();
    				state = PLAYING;
			    }
			   checkGameOver(gameOver()) ;		
    		}