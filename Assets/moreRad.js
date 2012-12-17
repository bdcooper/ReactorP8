#pragma strict
var radPrefab : Transform;
function Start () {
    while (true) {
       yield WaitForSeconds (Random.Range(15.0, 25.0));
       Instantiate (radPrefab, transform.position, transform.rotation);
    }
}