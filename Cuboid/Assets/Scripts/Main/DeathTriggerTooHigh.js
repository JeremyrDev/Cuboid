var tryAgainText : GameObject;
var ToohighText : GameObject;
var showDeathScreen : boolean;
function Start(){
	tryAgainText.active = false;
	ToohighText.active = false;
	Time.timeScale = 1;
}
function OnTriggerEnter(other: Collider){	
	if(other){
		tryAgainText.active = true;
		ToohighText.active = true;
		//Time.timeScale = 0.0;
	}
}
function OnGUI () {
if(showDeathScreen == true){	
	if (GUI.Button(Rect(10,10,50,50),"Try Again?"))
			Application.LoadLevel(1);
	}
}