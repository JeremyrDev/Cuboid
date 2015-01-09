var t1 : GameObject;
var scrollPosition : Vector2 = Vector2.zero;
var style : GUIStyle;
var showLevels : boolean = false;
function OnMouseDown(){
	transform.position = Vector3(-1, .8, 0);
	t1.transform.position = Vector3(-1, .4, 0);
	showLevels = true;
}
function Update(){
	if(transform.position.x !=-1){
		showLevels = false;
	}
}
function OnGUI () {
if(showLevels == true&& transform.position.x == -1){
		GUI.skin.scrollView = style;
		scrollPosition = GUI.BeginScrollView (Rect (20,75,Screen.width-20,Screen.height-150),
		scrollPosition, Rect (0, 0, 220, 200));
		
		if (GUI.Button(Rect(20,20,100,100),"Level 1"))
			Application.LoadLevel(1);
		if (GUI.Button(Rect(130,20,100,100),"Level 2"))
			Application.LoadLevel(2);
		if (GUI.Button(Rect(240,20,100,100),"Level 3"))
			Application.LoadLevel(3);
			
		GUI.EndScrollView ();
	}
}