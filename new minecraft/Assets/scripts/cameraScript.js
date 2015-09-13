#pragma strict

var snow : GameObject = GameObject.Find("snowman");
var PitSpeed : float = 1.0;
var YawSpeed : float = 1.0;


function Update () {
	if(Input.GetMouseButton(0)){
		PitSpeed = 1.0;
		YawSpeed = 1.0;
		transform.Rotate(Input.GetAxis("Mouse Y") * PitSpeed * -1, Input.GetAxis("Mouse X") * YawSpeed, 0);
	}else{
		PitSpeed = 0.0;
		YawSpeed = 0.0;
	}
	snow.transform.localEulerAngles.y = this.transform.localEulerAngles.y;
}