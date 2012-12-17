#pragma strict
public var lifeTime : int = 2;

function Awake () {
Destroy(gameObject, lifeTime);

}