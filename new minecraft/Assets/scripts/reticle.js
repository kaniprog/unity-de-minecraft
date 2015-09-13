#pragma strict
/*
プレイヤーにスクリプトを貼り付ける
画像を指定する
実行すると中央に指定した画像が出力される
*/
public var sightTexture : Texture; // 照準画像

function OnGUI () {
	// フレームレートの表示
	GUI.Label (Rect (Screen.width-100, 10, 100, 30), "FPS : " + (1 / Time.deltaTime));
	// 照準の表示
	GUI.DrawTexture (Rect(Screen.width / 2 - 64, Screen.height / 2 - 64, 128, 128),	sightTexture, ScaleMode.ScaleToFit, true, 1.0f);
}

