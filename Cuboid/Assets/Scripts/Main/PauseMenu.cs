using UnityEngine;
using System.Collections;
public class PauseMenu : MonoBehaviour {
	public  GUISkin skin;
	public bool paused = false;
	public bool pauseMenu = false;
	public bool settings = false;
	public bool showPauseMenu = true;
	public bool showSettingsMenu = false;
	public float hSliderValue;
	
	void Start(){
		hSliderValue = 90;	
	}
	void OnGUI(){
		if(paused)
			Pause();
		if(settings)
			Settings();
	}
	void Update(){
		if(paused){
			Time.timeScale = 0;	
			Screen.showCursor = true;
			Screen.lockCursor = false;
		}else{
			Time.timeScale = 1;	
			Screen.showCursor = false;
			Screen.lockCursor = true;
		}
		if(Input.GetKeyDown(KeyCode.Escape)||Input.GetKeyDown(KeyCode.P)){
			paused = !paused;
			settings=false;
		}
		 camera.fieldOfView = hSliderValue;
	}
	void Pause(){
		GUILayout.BeginArea (new Rect((Screen.width*.5f)- 50,(Screen.height*.5f)-100,100,200));	
			if(GUILayout.Button("Resume")){
				paused = !paused;
				if(settings)
				settings=false;
			}
			if(GUILayout.Button("Main Menu")){
				Application.LoadLevel (0);	
			}
			if(GUILayout.Button("Settings")){
				settings=!settings;
			}
			if(GUILayout.Button("Quit")){
				Application.Quit();
			}
		GUILayout.EndArea ();
	}
	void Settings(){
			GUILayout.BeginArea (new Rect((Screen.width*.5f)- 250,(Screen.height*.5f)+10,500,500));	
			if(GUILayout.Button("Choose Quality")){
			}
			var names = QualitySettings.names;
			GUILayout.BeginHorizontal ();
			for (var i = 0; i < names.Length; i++)
			{
				if (GUILayout.Button (names[i]))
					QualitySettings.SetQualityLevel (i, true);
			}
			GUILayout.EndHorizontal ();
			GUILayout.Label("FOV: Slide right for wider view");
			hSliderValue = GUILayout.HorizontalSlider(hSliderValue, 30.0F, 150.0F);
			GUILayout.Label(""+hSliderValue.ToString ("f0"));
		GUILayout.EndArea ();
	}
}
