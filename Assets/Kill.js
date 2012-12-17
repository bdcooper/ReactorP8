
static var score : int = 0;
function OnTriggerEnter (hit : Collider){
if(hit.gameObject.tag == "Finish"){
   score ++;
   Destroy(gameObject);


   
}

}
function OnGUI () {
     GUI.Label (Rect (250, 50, 100, 20), "Score: " + score.ToString()); }
     function Update(){
if (Input.GetKeyDown (KeyCode.Escape)){
score = 0;}
}