#pragma strict

function OnTriggerEnter (hit : Collider){

if(hit.gameObject.tag == "Player"){
   Application.LoadLevel(2);


   
}
}