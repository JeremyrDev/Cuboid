var force1 : float;
var torque1 : float;
var force2 : float;
var torque2 : float;
var torque3 : float;
var force3 : float;
var force : float;
var torque : float;
var timer : float;
function Start(){
	force = -10;
	torque = 10;
}
function Update () {
timer +=1*Time.deltaTime;
	if(timer >2){
		timer = 0;
		torque1 = Random.Range(-15,-10);
		force1 = Random.Range(-15,-10);
		torque2 = Random.Range(10,15);
		force2 = Random.Range(10,15);
		torque3 = Random.Range(0, 2);
		force3 = Random.Range(0,2);
		if(torque3 == 1){
			torque = torque1;
		}else{
			torque = torque2;
		}
		if(force3 == 1){
			force = force1;
		}else {
			force = force2;
		}
	}
	rigidbody.AddTorque(0,0,torque);
	rigidbody.AddForce(force,0,0);
}