var bq=document.getElementById("baiqi");
var hq=document.getElementById("heiqi");
var huiq=document.getElementById("huiqi");
var rf=document.getElementById("refresh");
var cx=document.getElementById("chexiao");
var box=document.getElementById("warp");
//点击白棋
bq.onclick=function()
{
	var sp=document.createElement("span");
	sp.className="writer";
	box.appendChild(sp);
	var a=Math.round(Math.random()*9+1);
	var b=Math.round(Math.random()*9+1);
	sp.style.left=(24+(36*a))+"px";
	sp.style.top=(24+(36*b))+"px";
	
}
//点击黑棋
hq.onclick=function()
{
	var sp=document.createElement("span");
	sp.className="black";
	box.appendChild(sp);
	var a=Math.round(Math.random()*9+1);
	var b=Math.round(Math.random()*9+1);
	sp.style.left=(24+(36*a))+"px";
	sp.style.top=(24+(36*b))+"px";
}
//刷新重来
rf.onclick=function()
{
    box.innerHTML="";
}
//悔棋
huiq.onclick=function()
{
	var last=box.lastChild;
	var name=last.getAttribute("class");
	var left=last.offsetLeft;
	var top=last.offsetTop;
	box.removeChild(box.lastChild);
	//撤销悔棋
	cx.onclick=function()
	{
		var sp=document.createElement("span");
		sp.className=name;
		box.appendChild(sp);
		sp.style.left=left+"px";
		sp.style.top=top+"px";
	}
}
