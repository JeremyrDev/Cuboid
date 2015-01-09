
//var nextText : GameObject;
function Start(){
	
	//nextText.active = false;
}
function OnTriggerEnter(other: Collider){	
	if(other.tag == "Player"){
		//nextText.active = true;
	}
}
