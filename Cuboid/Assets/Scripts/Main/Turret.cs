using UnityEngine;
using System.Collections;

public class Turret : MonoBehaviour {

	public float timer;
	public GameObject prefab;
	public float health;
	public float BlastPerkMultiplier;
	public float shootCounter=0;
	public GameObject bulletSpawner;
	public GameObject rotateTurrent;
	public bool wait;
	public float timer2;
	void Start () {
		//health = PlayerPrefs.GetInt("LevelEnemyHealth")*10;
		//blastPerkMultiplier = PlayerPrefs.GetFloat("BlastPerkMultipler");
	}

	void Update () {
		timer +=1*Time.deltaTime;

		if(timer >.5){
			shootCounter++;
			if(shootCounter >=1)
			{
				Instantiate(prefab, new Vector3(bulletSpawner.transform.position.x,bulletSpawner.transform.position.y,bulletSpawner.transform.position.z), rotateTurrent.transform.localRotation);
				rotateTurrent.transform.Rotate(0,0,-15, Space.Self);
			}
			if(shootCounter >=2)
			{
				Instantiate(prefab, new Vector3(bulletSpawner.transform.position.x,bulletSpawner.transform.position.y+1,bulletSpawner.transform.position.z), rotateTurrent.transform.localRotation);
				rotateTurrent.transform.Rotate(0,0,-15, Space.Self);
			}
			if(shootCounter >=3)
			{
				Instantiate(prefab, new Vector3(bulletSpawner.transform.position.x,bulletSpawner.transform.position.y+3,bulletSpawner.transform.position.z),rotateTurrent.transform.localRotation);
				rotateTurrent.transform.Rotate(0,0,30, Space.Self);
				wait = true;
				shootCounter = 0;
			}
			timer = 0;
		}	
		if(wait)
		{
			timer2+=1*Time.deltaTime;
			if(timer2>3){
				timer = 0;
				wait = false;
			}
		}
	}
	void OnTriggerEnter(Collider other)
	{
		if(other.tag == "blast")
		{
			//health-=10*blastPerkMultiplier;
			if(health<-0)
			{
				Destroy(gameObject);
			}
		}
	}
}
