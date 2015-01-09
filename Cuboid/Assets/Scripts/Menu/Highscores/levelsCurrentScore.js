var levelsCurrentScore : float;
var levelsCurrentScoreText : GUIText;
function Update(){
	levelsCurrentScore = PlayerPrefs.GetFloat("Score");
	levelsCurrentScoreText.text = "Levels score:  "+levelsCurrentScore.ToString("f0");
}