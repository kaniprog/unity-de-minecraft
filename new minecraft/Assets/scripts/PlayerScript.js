#pragma strict

var wantedMode : CursorLockMode = CursorLockMode.None;

function Start () {
	Cursor.lockState = wantedMode;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.F1))
        {
            Cursor.lockState = wantedMode = CursorLockMode.None; //標準モード
            Debug.Log("DEBUG:Cursor is normal");
            Cursor.visible = true; //OSカーソル表示
        }
        if (Input.GetKeyDown(KeyCode.F2))
        {
            Cursor.lockState = wantedMode = CursorLockMode.Confined; //はみ出さないモード
            Debug.Log("DEBUG:Cursor is confined");
            Cursor.visible = false; //OSカーソル非表示
        }
}