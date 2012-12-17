#pragma strict

var bulletPrefab : Transform;

var bulletSpeed : float = 6000;



function Update () {

    if (Input.GetKeyDown (KeyCode.Space)) {

        if (!bulletPrefab || !bulletSpeed) {

            Debug.Log("[Shoot] 'bulletPrefab' or 'bulletSpeed' is undefined");

        } else {

            var bulletCreate = Instantiate(bulletPrefab, GameObject.Find("Shooting Point").transform.position, transform.rotation);

            bulletCreate.rigidbody.AddForce(transform.forward * bulletSpeed);
            
           

        }

    }

}