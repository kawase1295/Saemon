//キャンバス
const can = document.getElementById('can');
const ctx = can.getContext('2d');

//初期色
let inputRightColor = '#235694';
let inputLeftColor = '#ffffff';


//右側描画
const right = ()=> {
    //カラーピッカーの色を反映
    rightColor.addEventListener('change', ()=> {
        inputRightColor = document.getElementById('rightColor').value;
    });
    ctx.fillStyle = inputRightColor;
    ctx.fillRect(115, 0, 185, 300);
}
//左側描画
const left = ()=>{
    //カラーピッカーの色を反映
    leftColor.addEventListener('change', ()=> {
        inputLeftColor = document.getElementById('leftColor').value;
    });
    ctx.fillStyle = inputLeftColor;
    ctx.fillRect(0, 0, 115, 300);
}

//目描画
const eye = ()=>{
    //黒目
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(175,200,35,0,360);
    ctx.fill();
    ctx.closePath;
    
    //白目
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(190,215,9,0,360);
    ctx.fill();
    ctx.closePath
}

//画像としてダウンロード
document.getElementById("download").onclick = (event) => {
    let link = document.createElement("a");
    link.href = can.toDataURL("image/png");
    link.download = "originalSaemon.png";
    link.click();
}

//ループ
setInterval(right, 1000 / 60);
setInterval(left, 1000 / 60);
//更新が後の方が上のレイヤーに行くための対処のループ
setInterval(eye, 1000 / 60);
