var CheckPointText : GameObject;
var showDeathScreen : boolean;
var timer : float;
var startTimer : boolean;
var reachedCheckPoint : int;
var light1 : Light;
var light2 : Light;

function Start(){
//	CheckPointText.active = false;
//	Time.timeScale = 1;
	reachedCheckPoint = PlayerPrefs.GetInt("reachedCheckpoint");
	
	if(reachedCheckPoint==1)
	{	
		light1.active = false;
		light2.active = false;
	}
}
function Update(){
//	if(startTimer == true){
//		if(reachedCheckPoint == 0){
//			timer+=1*Time.deltaTime;
//			if(timer >1){
//				CheckPointText.active = false;
//				timer = 0;
//				startTimer = false;
//			}
//		}
//	}
}
function OnTriggerEnter(other: Collider){	
	if(other.tag =="Player"){
//		CheckPointText.active = true;
//		startTimer = true;
//		reachedCheckPoint = PlayerPrefs.GetInt("reachedCheckpoint");
		//Time.timeScale = 0.0;
	}
}