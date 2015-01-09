var player : GameObject;
var stopped : boolean = true;
var restartPlayer : boolean = false;

function Update(){
		if(stopped == false){
			if(restartPlayer == true){
				player.transform.position = Vector3(11,-9,20);
				restartPlayer = false;
			}
			gameObject.active = false;
			Time.timeScale = 1;
		}else if(Time.timeScale == 0){
			stopped = true;
		}
}
function OnMouseDown(){

	//if(Application.levelCount!=4){
		Application.LoadLevel(Application.loadedLevel);
//	}else{
//	Application.LoadLevel(Application.loadedLevel+1);
//	}
	stopped = false;
	restartPlayer = true;
}