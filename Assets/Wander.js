#pragma strict

function Start () {

}

var maxRotation = 0.0001;
var maxSpeed = 50;
var steeringVector:Vector3;

function Update () {

	steeringVector = transform.forward * maxSpeed;
   
	transform.Translate(steeringVector * Time.deltaTime);

    transform.Rotate(0,randomBinomial() * maxRotation, 0);

}

function randomBinomial(){
	return Random.Range(-1,1);
	}


