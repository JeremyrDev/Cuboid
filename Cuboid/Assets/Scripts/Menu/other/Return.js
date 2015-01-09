var t1 : GameObject;
var t2 : GameObject;
var t3 : GameObject;
var t4 : GameObject;
var t5 : GameObject;
var t6 : GameObject;

var t7 : GameObject;
var t8 : GameObject;
var t10 : GameObject;
function Start(){
	gameObject.active = false;
}
function OnMouseDown(){
	if(t1.transform.position.x == -1&&t5.transform.position.x == .5||t1.transform.position.x == -1&&t5.transform.position.x == 1.1){
		t1.transform.position = Vector3(.5, .8, 0);
		t2.transform.position = Vector3(.5, .6, 0);
		t3.transform.position = Vector3(.5, .4, 0);
		t4.transform.position = Vector3(.5, .2, 0);
		gameObject.active = false;
		t5.transform.position = Vector3(1.1, .8, 0);
		t6.transform.position = Vector3(1.2, .4, 0);
	}
	if(t5.transform.position.x == -1){
		t5.transform.position = Vector3(.5, .8, 0);
		t6.transform.position = Vector3(.5, .4, 0);
	}
	if(t7.transform.position.x == .5){
		t1.transform.position = Vector3(.5, .8, 0);
		t2.transform.position = Vector3(.5, .6, 0);
		t3.transform.position = Vector3(.5, .4, 0);
		t4.transform.position = Vector3(.5, .2, 0);
		gameObject.active = false;
		t7.transform.position = Vector3(1.5, .8, 0);
		t8.transform.position = Vector3(1.5, .4, 0);
		t10.transform.position = Vector3(1.5, .6, 0);
	}
	
}