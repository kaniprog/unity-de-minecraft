#pragma strict

//Public variable for the size of the terrain, width and heigth
var Size:Vector2 = new Vector2( 128 , 128 );
//Height multiplies the final noise output
var Height:float = 10.0f;
//This divides the noise frequency
var NoiseSize:float = 10.0f;
var root:GameObject;

function OnGUI (){	
	//Make a button that generates when you press it
	if(GUI.Button( new Rect( 10, 10, 100, 30 ), "Generate" ))
	{			
		Generate();
	}
	
}
	
function Start () {
	Generate();
}

function Update () {

}

function PerlinNoise(x:float,y:float){
		//Generate a value from the given position, position is divided to make the noise more frequent.
		var noise :float= Mathf.PerlinNoise( x / NoiseSize, y / NoiseSize );
		
		//Return the noise value
		return noise * Height;
		
}

function Generate ()
	{
		
		//If we find a gameobject called terrain, there's a high
		//chance that we have the previous terrain still there
		//So, let's delete it
		Destroy(GameObject.Find("Terrain"));

		
		//Create a new empty gameobject that will store all the objects spawned for extra neatness
		root = new GameObject("Terrain");
		
		//Put the root object at the center of the boxes
		root.transform.position = new Vector3(Size.x/2, 0, Size.y/2);
		
		//For loop for x-axis
		for(var i = 0; i <= Size.x; i++){
			
			//For loop for z-axis
			for(var p = 0; p <= Size.y; p++){
				
				for(var j = 0;j <= parseInt(PerlinNoise( i, p ));j++){
					var box:GameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
					box.transform.position = new Vector3( i, j, p);
					box.transform.parent = root.transform;
				}
			
			}
			
		}
					
		//Move the root at the origin.
		root.transform.position = Vector3.zero;
	
	}
