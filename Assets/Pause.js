#pragma strict

function Update () {
    if (Input.GetKeyDown (KeyCode.P)) {
        if (Time.timeScale == 1.0){
            Time.timeScale = 0;
            }
        else {
        Time.timeScale = 1.0;}
        }    
        Time.fixedDeltaTime = 0.02 * Time.timeScale;
   
}