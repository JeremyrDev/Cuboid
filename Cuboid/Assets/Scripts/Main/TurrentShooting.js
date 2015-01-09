var timer : float;
var prefab : GameObject;
var health : float;
var blastPerkMultiplier : float;
function Start () {
	health = PlayerPrefs.GetInt("LevelEnemyHealth")*10;
	blastPerkMultiplier = PlayerPrefs.GetFloat("BlastPerkMultipler");
}
function OnTriggerEnter(other:Collider)
{
	if(other.tag == "blast")
	{
		health-=10*blastPerkMultiplier;
		if(health<-0)
		{
			Destroy(gameObject);
		}
	}
}
function Update () {
timer +=1*Time.deltaTime;
	if(timer >3){
		Instantiate(prefab, Vector3(transform.position.x+3,transform.position.y,transform.position.z), Quaternion.identity);
		timer = 0;
	}
}