window.onload = function(){
	var banner = document.getElementById("banner");
	var uls = banner.getElementsByTagName("ul")[0];
	var lis = uls.getElementsByTagName("li");
	var sp = banner.getElementsByTagName("span");
	var lr_btn = document.getElementById("lr_btn");
	var btn = lr_btn.getElementsByTagName("div");
	var btn_l = document.getElementById("btn_l");
	var btn_r = document.getElementById("btn_r");
	var ul_box = document.getElementById("ul_box");
	var top_nav = document.getElementById("top_nav");
	var top_nav_a = top_nav.getElementsByTagName("a");
	var con_box3 = document.getElementById("con_box3");
	var con_box3_ul = con_box3.getElementsByTagName("ul");
	var top_nav4 = document.getElementById("top_nav4");
	var top_nav4_a = top_nav4.getElementsByTagName("a");
	var con_box4 = document.getElementById("con_box4");
	var con4_ul = con_box4.getElementsByTagName("ul");
	var ben_nav = document.getElementById("ben_nav");
	var ben_nav_a = ben_nav.getElementsByTagName("a");
	var ben_box = document.getElementById("ben_box");
	var ben_nav_ul = ben_box.getElementsByTagName("ul");

	// 轮播图
	var li_W = lis[0].offsetWidth;
	sp[0].style.background = "#139D72";
	uls.style.width = li_W*lis.length+"px";
	uls.style.left = 0;
	var index=0;
	for(var i=0;i<sp.length; i++){
		sp[i].index = i;
		sp[i].onclick = function(){
			index = this.index;
			for(var j=0;j<sp.length;j++){
				sp[j].style.background = "#fff";
			}
			this.style.background = "#139D72";
			uls.style.left = -li_W*this.index + "px";
			uls.style.transition = "all 0.5s";
		}
	}
	btn[1].onclick = function(){
		index++;
		if(index>7){
			uls.style.transition = "all 0s";
			uls.style.left =0;
			console.log(uls.offsetLeft);			
			index=1;
		}
		for(var j=0;j<sp.length;j++){
			sp[j].style.background = "#fff";
		}
		if(index==7){
			sp[0].style.background = "#139D72";
		}
		else{
			sp[index].style.background = "#139D72";
		}
		
		uls.style.left = -li_W*index + "px";
		uls.style.transition = "all 0.5s"
	}
	btn[0].onclick = function(){
		index--;
		if(index<0){
			uls.style.transition = "all 0s"
			uls.style.left =-li_W*7 + "px";
			console.log(uls.offsetLeft);			
			index=6;

		}
		for(var j=0;j<sp.length;j++){
			sp[j].style.background = "#fff";
		}
		if(index==7){
			sp[6].style.background = "#139D72";
		}
		else{
			sp[index].style.background = "#139D72";
		}
		uls.style.left = -li_W*index + "px";
		uls.style.transition = "all 0.5s"
	}
	var timer
	function star(){
		stop();
		timer = setInterval(btn[1].onclick,2000);
	}
	function stop(){
		clearInterval(timer);
	}
	star();
	banner.onmouseover = function(){
		stop();
	}
	banner.onmouseout = function(){
		star();
	}
	//con2的左右按钮
	btn_r.style.opacity = "0.8";
	btn_r.onclick = function(){
		ul_box.style.left = "-8px";
		btn_r.style.opacity = "0.8";
		btn_l.style.opacity = "1";
	}
	btn_l.onclick = function(){
		ul_box.style.left = "-595px";
		btn_l.style.opacity = "0.8";
		btn_r.style.opacity = "1";
	}

	//con3的选项卡
	top_nav_a[0].style.color = "#138A64";
	con_box3_ul[0].style.display = "block"; 
	for(var i=0;i<con_box3_ul.length;i++){
		top_nav_a[i].index = i;
		top_nav_a[i].onclick = function(){
			for(var j=0;j<con_box3_ul.length;j++){
				top_nav_a[j].style.color = "#999";
				con_box3_ul[j].style.display = "none"; 
			}
			this.style.color = "#138A64";
			con_box3_ul[this.index].style.display = "block"; 
		}
	}
	//con4的选项卡
	top_nav4_a[0].style.color = "#138A64";
	con4_ul[0].style.display = "block"; 
	for(var i=0;i<con4_ul.length;i++){
		top_nav4_a[i].index = i;
		top_nav4_a[i].onclick = function(){
			for(var j=0;j<con4_ul.length;j++){
				top_nav4_a[j].style.color = "#999";
				con4_ul[j].style.display = "none"; 
			}
			this.style.color = "#138A64";
			con4_ul[this.index].style.display = "block"; 
		}
	}
	//右侧选项卡
	ben_nav_a[0].style.color = "#138A64";
	ben_nav_ul[0].style.display = "block"; 
	for(var i=0;i<ben_nav_ul.length;i++){
		ben_nav_a[i].index = i;
		ben_nav_a[i].onclick = function(){
			for(var j=0;j<ben_nav_ul.length;j++){
				ben_nav_a[j].style.color = "#999";
				ben_nav_ul[j].style.display = "none"; 
			}
			this.style.color = "#138A64";
			ben_nav_ul[this.index].style.display = "block"; 
		}
	}
}






