﻿using UnityEngine;
using System.Collections;

public class BlastPlane : MonoBehaviour {
	public float enemyHealth;
	public int hitCounter=0;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	void OnTriggerEnter(Collider other)
	{
		if(other.tag =="Enemy"||other.tag == "turrent")
		{

		}
	}
}