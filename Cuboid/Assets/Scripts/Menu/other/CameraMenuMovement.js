var target : Transform;
var player : GameObject;
public var dampTime : float = 0.2; 
var zPos : float = 5;
private var velocity = Vector3.zero;
var xPos : float;
var yPos : float;

function Awake(){
	xPos = .5;
	yPos = .3;
}

function FixedUpdate () {
 
    if(target) {
        var point : Vector3 = camera.WorldToViewportPoint(target.position);
        var delta : Vector3 = target.position -camera.ViewportToWorldPoint(Vector3(xPos, .5, 13.5));
        var destination : Vector3 = transform.position + delta;
        transform.position = Vector3.SmoothDamp(transform.position, destination, velocity, dampTime);
    }
    	if(player.rigidbody.transform.right.magnitude >10){
    		xPos = 0.45;
    	}else if(player.rigidbody.transform.right.magnitude<-10){
    		xPos = 0.55;
    	}else if(player.rigidbody.transform.right.magnitude >-1 && player.rigidbody.transform.right.magnitude <1){
    		xPos = .5;
    	}
    	
    	if(player.rigidbody.transform.up.magnitude >10){
    		yPos = 0.35;
    	}else if(player.rigidbody.transform.up.magnitude<-10){
    		yPos = 0.25;
    	}else if(player.rigidbody.transform.up.magnitude >-1 && player.rigidbody.transform.up.magnitude <1){
    		yPos = .3;
    	}
}
