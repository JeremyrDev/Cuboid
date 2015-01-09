var speed : float;
function Start(){
	speed = 300;
}
function FixedUpdate () {
	//transform.position.x +=20*Time.deltaTime;
	//rigidbody.AddForce(Vector3.*-speed*Time.deltaTime);
	rigidbody.AddRelativeForce(Vector3.right*-speed*Time.deltaTime);
	Destroy(gameObject,7.9);
}
function OnTriggerEnter(other:Collider)
{
	Destroy(gameObject);
}