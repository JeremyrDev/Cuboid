var target : Transform;
var player : GameObject;
public var dampTime : float = 0.2; 
var zPos : float = 5;
private var velocity = Vector3.zero;
var xPos : float;
var yPos : float;
var magnitudeDifference : float;
var ymagnitude : float;
var xmagnitude : float;
var test : Vector3;
var backPlane : GameObject;
var secondBack : GameObject;
var secondFront : GameObject;
var fastFront : GameObject;
function Awake(){
	xPos = .5;
	yPos = .5;
	zPos = 25;
}
function Update(){
	test = player.rigidbody.velocity;
	backPlane.transform.position = Vector3(transform.position.x,backPlane.transform.position.y,backPlane.transform.position.z);
	secondBack.transform.position = Vector3(transform.position.x*.8,secondBack.transform.position.y,secondBack.transform.position.z);
	secondFront.transform.position = Vector3(transform.position.x*.4,secondFront.transform.position.y,secondFront.transform.position.z);
	fastFront.transform.position = Vector3(transform.position.x*-2.2,fastFront.transform.position.y,fastFront.transform.position.z);
}

function FixedUpdate () {

    if(target) {
        var point : Vector3 = camera.WorldToViewportPoint(target.position);
        var delta : Vector3 = target.position -camera.ViewportToWorldPoint(Vector3(xPos, yPos, zPos));
        var destination : Vector3 = transform.position + delta;
        transform.position = Vector3.SmoothDamp(transform.position, destination, velocity, dampTime);
    }
    	if(player.rigidbody.velocity.x >10){
    		xPos = .45;
    	}else if(player.rigidbody.velocity.x <-10){
    		xPos = .55;
    	}else {
    		xPos = .5;
    	}
    	
    	if(player.rigidbody.velocity.y >10){
    		yPos = .35;
    	}else if(player.rigidbody.velocity.y <-10){
    		yPos = .25;
    	}else {
    		yPos = .3;
    	}
    	
    	if(player.rigidbody.velocity.magnitude > 60){
    		magnitudeDifference = player.rigidbody.velocity.magnitude-60;
    		zPos =25+(magnitudeDifference*.25);
    		
    	}
    	if(player.rigidbody.velocity.magnitude < 60){
    		//magnitudeDifference = player.rigidbody.velocity.magnitude - 60;
    		zPos = 25;
    	}
}
