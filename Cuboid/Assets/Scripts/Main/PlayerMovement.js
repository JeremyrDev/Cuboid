var speed1 : float;
var speed : float;
var jumpspeed : float;
var speedText : GUIText;
var score : float;
var gemScore : float;
var nextText : GUIText;
var tryAgainText : GUIText;
var startPoint : GameObject;
var checkPoint : GameObject;
var reachedCheckPoint : int;
var runTimer:boolean = true;
var timer : float;
var timer2 : float;
var timer3 : float;
var bestTime:float;
var bestTimeMem : float;
var collectedCoins : int;
var slipperyMaterial : PhysicMaterial;
var checkPointReached : boolean = false;
var checkPointText : GUIText;
var checkPointCounter:int=0;
var startTimer : boolean = false;
var finishedBool : boolean = false;
var deadBool : boolean = false;
var light1 : Light;
var light2 : Light;
var particle : ParticleEmitter;
var startParticleTimer : boolean = false;
var light3 : Light;
var CustomColorBlue : Color;
var velocity : float;
var BottomDoor : GameObject;
var TopDoor : GameObject;
var blastPlane : GameObject;
var blast : boolean=false;
var counter2 : int=0;

function Start() {
	reachedCheckPoint = PlayerPrefs.GetInt("reachedCheckPoint");
	
	if(reachedCheckPoint == 1){
		transform.position = checkPoint.transform.position;
		bestTime = PlayerPrefs.GetFloat(Application.loadedLevelName+"CheckPointTime", timer);
		rigidbody.AddExplosionForce(1000,Vector3(transform.position.x, transform.position.y-3, transform.position.z), 15);
	}else{
		transform.position = startPoint.transform.position;
		bestTime = PlayerPrefs.GetFloat(Application.loadedLevelName+"Time");
		rigidbody.AddExplosionForce(1000,Vector3(transform.position.x-3, transform.position.y, transform.position.z), 15);
	}
	jumpspeed = 500;
	speed = 2500;
	tryAgainText.active = false;
	nextText.active = false;
	score = PlayerPrefs.GetFloat("Score");	
	
	particle.active = false;

}

function Update () {

	if(timer < bestTime){
		bestTimeMem = bestTime;
	}else{
		bestTimeMem = bestTime;
	}
//	if(bestTime<=0)
//	{
//		bestTimeMem=timer;
//	}
	rigidbody.velocity = Vector3.ClampMagnitude(rigidbody.velocity, 40);
	if(startParticleTimer){
		timer3+=1*Time.deltaTime;
		light3.intensity -=1;
		if(timer3 >.5){
			particle.emit = false;
			start = false;
			light3.active = false;
			light3.intensity = 0;
			timer3 = 0;
			//PlayerPrefs.SetFloat("Score", score);
		}
	}
	
	if(startTimer){
			timer2+=1*Time.deltaTime;
			light1.intensity -=.1;
			light2.intensity -=.1;
			if(timer2 >1){
				checkPointText.active = false;
				timer = 0;
				startTimer = false;
				checkPointCounter++;
			}else{
				checkPointText.active = true;
			}
	}
	if(Input.GetKeyDown(KeyCode.C)){
		PlayerPrefs.SetFloat(Application.loadedLevelName+"Time", 0);
	}
	if(Input.GetKeyDown(KeyCode.V)){
		PlayerPrefs.SetFloat("Score", 0);
	}
	if(Input.GetKeyDown(KeyCode.Q)){
		PlayerPrefs.SetInt("reachedCheckPoint", 0);
	}
	if(runTimer == true){
		timer +=1*Time.deltaTime;
	}
	speed1 = speed*Time.deltaTime;
	speedText.text = "Score:  "+score.ToString("f0")+" Collected Photons: "+collectedCoins+" Gems:  "+gemScore.ToString("f0")+" Time:  "+timer.ToString("f2")+" Best Time:  "+bestTimeMem.ToString("f2");
	if(Input.GetKey(KeyCode.D)){
		rigidbody.AddForce(speed1, 0, 0);
	}
	if(Input.GetKey(KeyCode.A)){

		rigidbody.AddForce(-speed1, 0, 0);
	}
	
	//velocity = ((rigidbody.velocity.magnitude/2)*Time.deltaTime)*10;
	
	if(Input.GetKey(KeyCode.Space)){
		rigidbody.AddForce(0, jumpspeed*10*Time.deltaTime, 0);
	}
	if(Input.GetKey(KeyCode.R)){
		Application.LoadLevel(Application.loadedLevel);
	}
	if(Input.GetKey(KeyCode.W)){
		rigidbody.AddForce(0, -jumpspeed*4*Time.deltaTime, 0);
	}
	
	if(Input.GetKey(KeyCode.D)&&Input.GetKey(KeyCode.LeftShift)){
		rigidbody.AddExplosionForce(500,Vector3(transform.position.x-3, transform.position.y, transform.position.z), 15);
	}
	if(Input.GetKey(KeyCode.A)&&Input.GetKey(KeyCode.LeftShift)){
		rigidbody.AddExplosionForce(500,Vector3(transform.position.x+3, transform.position.y, transform.position.z), 15);
	}
	if(Input.GetKey(KeyCode.Space)&&Input.GetKey(KeyCode.LeftShift)){
		rigidbody.AddExplosionForce(500,Vector3(transform.position.x, transform.position.y-3, transform.position.z), 15);
	}
	if(Input.GetKey(KeyCode.W)&&Input.GetKey(KeyCode.LeftShift)){
		rigidbody.AddExplosionForce(500,Vector3(transform.position.x, transform.position.y+3, transform.position.z), 15);
	}
	if(Input.GetKeyDown(KeyCode.F))
	{
		blast = true;
	}
	blastPlane.transform.position = transform.position;
	if(blast)
	{
		blastPlane.transform.localScale+= Vector3(.3,.3,.3);
		counter2++;
		if(counter2 > 5)
		{
			blastPlane.renderer.material.color.a -=.05;
			if(counter2>20){
				blast = false;
				blastPlane.transform.localScale= Vector3(.15,.15,.15);
				blastPlane.renderer.material.color.a =1;
				counter2 = 0;
		}
		}
	}
}

function OnTriggerEnter(other : Collider){

	if((other.tag == "Finish"||other.tag == "Respawn")&&gemScore==1){
		if(tryAgainText.active)
		{
		}
		else{
		finishedBool = true;
		runTimer = false;
		speed = 0;
		jumpspeed = 0;
		PlayerPrefs.SetFloat("Score",score);
		nextText.active = true;
		PlayerPrefs.SetFloat(Application.loadedLevelName+"Time", timer);
		PlayerPrefs.SetInt("reachedCheckPoint",  0);
		}
		if(timer<bestTime)
		{
			bestTimeMem = timer;
		}
		
	}else if((other.tag == "Finish"||other.tag == "Respawn")&&gemScore==0){
		runTimer = false;
		speed = 0;
		jumpspeed = 0;
		tryAgainText.active = true;
	}
	if(other.tag == "Coin"){
		score +=1;
		collectedCoins +=1;
	}
	if(other.tag == "Gem"){
		gemScore +=1;	
	}
	if(other.tag == "CheckPoint"){
		PlayerPrefs.SetFloat(Application.loadedLevelName+"CheckPointTime", timer);
		PlayerPrefs.SetFloat("Score",score);
		PlayerPrefs.SetInt("reachedCheckPoint",  1);
		startTimer = true;
	}
	if(other.tag == "Bullet")
	{
		if(Input.GetKey(KeyCode.A)||Input.GetKey(KeyCode.D)){
		rigidbody.AddExplosionForce(3000,Vector3(transform.position.x-3, transform.position.y, transform.position.z), 50);
		}
		else{
		rigidbody.AddExplosionForce(3000,Vector3(transform.position.x-3, transform.position.y, transform.position.z), 50);
		}
	}
	if(other.tag == "Trampoline")
	{
	rigidbody.AddExplosionForce(2500,Vector3(transform.position.x, transform.position.y-3, transform.position.z), 50);
	particle.active = true;
		particle.emit = true;
		startParticleTimer = true;
		light3.active =true;
		light3.intensity = 5;
		light3.color = Color(0f,1f,.5f);
	}
	if(other.tag == "Death"){
		rigidbody.AddExplosionForce(1500,Vector3(transform.position.x, transform.position.y-3, transform.position.z), 50);
		particle.active = true;
		particle.emit = true;
		startParticleTimer = true;
		light3.active =true;
		light3.intensity = 5;
		light3.color = Color(0.2f,.5f,1f);
		
		if(finishedBool)
		{
		
		} 
		else 
		{
		//Time.timeScale = 0;
		speed = 0;
		jumpspeed = 0;
		Screen.showCursor = true;
		Screen.lockCursor = false;
		tryAgainText.active = true;
		}
	}
	if(other.tag == "OppositeDeath"){
		rigidbody.AddExplosionForce(1500,Vector3(transform.position.x, transform.position.y+3, transform.position.z), 50);
		particle.active = true;
		particle.emit = true;
		startParticleTimer = true;
		light3.active =true;
		light3.intensity = 5;
		light3.color = Color(0.2f,.5f,1f);
		
		if(finishedBool)
		{
		
		} 
		else 
		{
		//Time.timeScale = 0;
		speed = 0;
		jumpspeed = 0;
		Screen.showCursor = true;
		Screen.lockCursor = false;
		tryAgainText.active = true;
		}
	}
	if(other.tag == "Door")
	{
		BottomDoor.animation.Play();
		TopDoor.animation.Play();
	}
}