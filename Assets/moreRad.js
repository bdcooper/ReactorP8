#pragma strict
var radPrefab : Transform;
function Start () {
    while (true) {
       yield WaitForSeconds (Random.Range(7.0, 11.0));
       Instantiate (radPrefab, transform.position, transform.rotation);
    }
}