#pragma strict
var radPrefab : Transform;
function Start() {
	Instantiate(radPrefab, transform.position, transform.rotation);
}

