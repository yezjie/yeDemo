window.onload = function() {
	var banner = document.getElementsByClassName("banner")[0];
	var banner_img = document.getElementsByClassName("banner-img");
	var bimgs = banner.getElementsByTagName("img");
	var bspans = banner.getElementsByTagName("span");

	//轮播图
	function lunb(bimg,btn,box) {
		var index = 0;
		bimg[0].className = "active";
		btn[0].className = "active";
		box[0].style.height = bimg[0].offsetHeight + "px";
		for (var i = 0; i < btn.length; i++) {
			btn[i].index = i;
			btn[i].onmouseover = function() {
				index = this.index;
				for (var j = 0; j < btn.length; j++) {
					btn[j].className = "";
					bimg[j].className = "";
				}
				this.className = "active";
				bimg[this.index].className = "active";
			}
		}
			//轮播计时器
		var timer;
		//开始运动
		function star() {
			timer = setInterval(function() {
				index++;
				if (index > 4) {
					index = 0;
				}
				for (var j = 0; j < btn.length; j++) {
					btn[j].className = "";
					bimg[j].className = "";
				}
				bimg[index].className = "active";
				btn[index].className = "active";
			}, 5000);
		}
		star();
		//鼠标移上停止运动
		box[0].onmouseover = function() {
				clearInterval(timer);
			}
			//鼠标移出开始运动
		box[0].onmouseout = function() {
			star();
		}
	}
	lunb(bimgs,bspans,banner_img);
	


}