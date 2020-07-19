function gameOver(){
					var b1=checkGameOverA();
					var b2=checkGameOverB();
					var a1=checkWinA();
					var a2=checkWinB();
					if(a1||a2||b1||b2){
						state1 = GAME_OVER;
						state1 = GAME_OVER;
						$("gameOver").style.display = "block";
						
						if(a1 && !a2){	
							alert("恭喜玩家一获得胜利，得分："+score1);
						}else if(a2 && !a1){
							alert("恭喜玩家二获得胜利，得分："+score2);
						}else if(a2 && a1){
						    alert("平局");
						}	
						
						if(b2 && !b1){
							alert("恭喜玩家一获得胜利，得分："+score1);
						}else if(b1 && !b2){
							alert("恭喜玩家二获得胜利，得分："+score2);
						}
						
						
					}
				}