var mapArray, ctx, currentImgMainX,currentImgMainY;
var imgMountain,imgMain,imgEnemy;
//mapArray:決定地圖中每個格子的元素
//ctx:HTML5 Canvas用
//currentImaMainX,currentImgMainY:決定主角的所在座標
//Mountain,imgMain,imgEnemy:障礙物,主角,敵人的圖片物件

//網頁元件再入後做的事情
$(document).ready(function(){
    //遊戲設定
    //0:可走,1:障礙,3:敵人
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#myCanvas")[0].getContext("2d");
    
    //主角 預設位置
    imgMain=new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    //擺上障礙物與敵人
    imgMountain=new Image();//擺上障圖片物件
    imgMountain.src="images/material.png";
    imgEnemy=new Image();//敵人圖片物件
    imgEnemy.src="images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(var x in mapArray)
                {
                    if(mapArray[x]==1)
                        {
                            ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                        }
                    else if(mapArray[x]==3)
                        {
                            ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                        }
                }
        };};
    
});

//按下案鍵後要做的事情
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY,targetBlock,cutImagePositionX;
    //targetImgMainX,targetImgMainY:主角即將移動過去的目標位置
    //targetBlock:主角即將移過去那一格的編號
    //cutImagePositionX:依據主角朝向方向決定圖片
    event.preventDefault();
    //避免典籍鍵盤出現其他行為,如:捲動,放大..等
    //依據使用者點擊按鍵,計算出目標位置即設定新的圖片
    switch(event.which){
        case 37://往左走
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;
            break;
        case 38://往上走
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImagePositionX=355;
            break;
        case 39://往右走
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;
            break;
        case 40://往下走
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default://當有人按這四個按鍵以外的狀況
            return;
    }
    if(targetImgMainX<=400&&targetImgMainX>=0&&targetImgMainY<=400&&targetImgMainY>=0)//沒有超出邊界
        {
            targetBlock=targetImgMainX/200+targetImgMainY/200*3;
        }
    else
        {
            targetBlock=-1;//異常 不移動
        }
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);//清除主角原本所在的位置
    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3)
        {
            //目標位置異常,遇到障礙物,遇到敵人都不能走,在原地(但稍後會依移動方向轉頭)
        }
    else
    {
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    switch(mapArray[targetBlock])
        {
            case undefined://牆壁
                $("#talkBox").text("邊界");
            break;
            case 1://障礙
                $("#talkBox").text("有山");
            break;
            case 2://終點
                $("#talkBox").text("抵達終點!");
            break;
            case 3://有人
                $("#talkBox").text("嗨~");
            break;
        }
});