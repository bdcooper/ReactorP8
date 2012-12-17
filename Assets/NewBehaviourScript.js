#pragma strict
var fwdSpeed : float = 3;
var turnSpeed : float = 2;

function Update () {
//forward speed
var fwdMoveAmount = Input.GetAxis("Vertical")*fwdSpeed;

//turning
var turnAmount =  Input.GetAxis("Horizontal")*turnSpeed;

//Actually Rotate The Vehicle
transform.Rotate(0,turnAmount,0);
rigidbody.AddRelativeForce(fwdMoveAmount,0,0);

//Actually Move Vehicle Forward

}



