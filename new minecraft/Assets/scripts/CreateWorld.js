#pragma strict

var SandCube : Transform;

function Start () {
	var x : int = 0;
	var y : int = 0;
	var z : int = 0;
	var mPx : float = 0;
	var mPz : float = 0;

	var height : float = 0;

	for(x = 0; x < 100; x++){
		for(z = 0; z < 100; z++){
			mPx = Random.Range(0.0, 1.0);
			mPz = Random.Range(0.0, 1.0);
			height = Mathf.PerlinNoise(mPx, mPz) * 100.0 ;
			Debug.Log(height);
			Instantiate(SandCube, Vector3 (x, height, z), Quaternion.identity);
		}
	}
}

function Update () {
	
}