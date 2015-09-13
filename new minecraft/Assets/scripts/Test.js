#pragma strict
var blockPrefab:Transform;
private var MAP_HEIGHT:int = 16;
private var MAP_SIZE:int = 128;
private var MIN_SIZE:int = 1;
private var MAX:Number = 1.0;
private var MIN:Number = 0.0;
private var gene_map:Number[,] = new Number[MAP_SIZE,MAP_SIZE];
private var map:int[,,] = new int[MAP_SIZE,MAP_SIZE,MAP_HEIGHT];
function Start () {
    generateHeightmap(0, 0, MAP_SIZE, Random.Range(0.0, 1.0), Random.Range(0.0, 1.0), Random.Range(0.0, 1.0), Random.Range(0.0, 1.0));
    for (var i=0; i<MAP_SIZE; i++) {
        for (var j=0; j<MAP_SIZE; j++) {
            var height = Mathf.RoundToInt(gene_map[i,j] * MAP_HEIGHT);
            for (var k=0; k<height; k++) {
                map[i,j,k] = 1;
                var position:Vector3 = Vector3(j,k,i);
                var rotation = transform.rotation;
                Instantiate(blockPrefab, position, rotation);
            }
        }
    }
}
function Update () {
}
function generateHeightmap(x:int, y:int, size:Number, tl:Number, tr:Number, bl:Number, br:Number) {
// minSize未満のサイズになったら分割を終了させる
    if (size < MIN_SIZE) {
        // 平均値を出す
        var val:Number = (tl + tr + bl + br) / 4;
        gene_map[x,y] = val;
    } else {
        // 四隅から見て中央にあるピクセルに平均値 + 変位させるランダムな値を入れる
        var midPoNumber:Number = (tl + tr + bl + br) / 4 + getRandomHeight(size);
        // min～max(0.0～1.0)までの値に収まるように調整
        if (midPoNumber < MIN) midPoNumber = MIN;
        if (MAX < midPoNumber) midPoNumber = MAX;
        // 中央から見て上下左右にあるピクセルにも平均値を入れる
        var top:Number = (tl + tr) / 2;
        var bottom:Number = (bl + br) / 2;
        var left:Number = (tl + bl) / 2;
        var right:Number = (tr + br) / 2;
        // 2*2に分割するのでサイズ(幅, 高さ)を半分にする
        size /= 2;
        generateHeightmap(x, y, size, tl, top, left, midPoNumber);
        generateHeightmap(x + size, y, size, top, tr, midPoNumber, right);
        generateHeightmap(x, y + size, size, left, midPoNumber, bl, bottom);
        generateHeightmap(x + size, y + size, size, midPoNumber, right, bottom, br);
    }
}
public function getRandomHeight(val:Number):Number {
    return (Random.Range(0.0, 1.0) - 0.5) * val / MAP_SIZE;
}