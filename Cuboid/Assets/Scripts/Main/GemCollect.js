﻿var particle : ParticleEmitter;
var timer : float;
var start : boolean = false;
var light1 : Light;

function Start(){
	particle.active = false;
}

function Update(){
	//score = PlayerPrefs.GetFloat("Score");
	if(start == true){
		timer+=1*Time.deltaTime;
		light1.intensity +=5;
		if(timer >1.5){
			particle.emit = false;
			Destroy (gameObject);
			Destroy (light1);
			Destroy (particle);
			start = false;
			//PlayerPrefs.SetFloat("Score", score);
		}
	}
}
function OnTriggerEnter(other : Collider){
	if(other){
		particle.active = true;
		renderer.enabled = false;
		start = true;
	}
}