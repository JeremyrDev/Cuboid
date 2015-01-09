var t1 : GameObject;
var t2 : GameObject;
var t3 : GameObject;
var t4 : GameObject;

var t5 : GameObject;
var t6 : GameObject;

var t8 : GameObject;
function OnMouseDown(){
	transform.position = Vector3(-1, .8, 0);
	t1.transform.position = Vector3(-1, .6, 0);
	t2.transform.position = Vector3(-1, .4, 0);
	t3.transform.position = Vector3(-1, .2, 0);
	t4.active = true;
	t5.transform.position = Vector3(.5, .8, 0);
	t6.transform.position = Vector3(.5, .4, 0);
	t8.transform.position = Vector3(.5, .6, 0);
}