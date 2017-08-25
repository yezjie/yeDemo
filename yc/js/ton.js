window.onload = function(){
	var nextnum = 0;
	// header点击
	//index柱子高度
	$(".z_zhu").each(function(){
		$(this).css({
			height:$(this).parent().innerHeight(),
		})
	})
	//点击出现导航
	$(".h_menu").click(function(){
		$("#header ul").slideToggle();
	});
	//轮播图
	$("#banner ul").height($("#banner ul li:eq(1)").outerHeight());
	$("#banner span").eq(0).css("background","#cfdb00");

	$("#banner span").click(function(){
		$("#banner li").each(function(){
			$(this).fadeOut();
		})
		$("#banner span").css("background","#8291A0").filter($(this)).css("background","#cfdb00");
		$("#banner li").eq($(this).index()).fadeIn();
		nextnum = $(this).index();
	});
	function don(){
		nextnum = ++nextnum%3;
		$("#banner li").each(function(){
			$(this).fadeOut();
		})
		$("#banner span").css("background","#8291A0").filter($("#banner span").eq(nextnum)).css("background","#cfdb00");
		$("#banner li").eq(nextnum).fadeIn();
	}
	var timer;
	function start(){
		timer = setInterval(don,2000);
	}
	start();
	function stop(){
		clearInterval(timer);
	}
	$("#banner").hover(function(){
		stop();
	},function(){
		start();
	})
	//animate部分
	$(".video").click(function(){
		$("#vid").show();
		$(".video p").hide();
	})
	//bim
	$(".bim_text").each(function(){
		$(this).children().slice(0,3).css({
			position:"relative",
			zIndex:"1",
		})
	})
	//瀑布流
	for(var i=0;i<21;i++){
		var pu_y= $('<div class="pu_y"><img src="img/'+i+'.jpg" alt=""><div class="ze_z"><img src="img/fangda.png" alt=""></div></div>')
		$(".pu").append(pu_y);
	}
	$(".pu_y").click(function(event){
		$(".b_pu").show();
		var b_pum = $('<img src="img/'+$(this).index()+'.jpg" alt="">');
		$(".b_pu").html(b_pum);
		$(".b_pu").css({
			height:b_pum.outerHeight(),
		})
		console.log($(this).index())
		event.stopPropagation();
	})
	var z_hd = $(".pu_y>img").eq(1).outerHeight()+
	$(".pu_y>img").eq(5).outerHeight()+
	$(".pu_y>img").eq(9).outerHeight()+
	$(".pu_y>img").eq(13).outerHeight()+
	$(".pu_y>img").eq(17).outerHeight();
	$(".pu").css({
		height:z_hd,
	})
	$(document).click(function(){
		$(".b_pu").hide();
	});
	var pu_y = $(".pu_y");
	$('img').each(function(index){
	  var $this = $(this);
	  var src = $this.attr('src');
	  var img = new Image()
	  img.src = src;
	  img.onload = function(){
	    var li_w = pu_y.eq(0).outerWidth();
		pu_y.each(function(){
			var sum = 0;
			for(var i = $(this).index() - 4; i >= 0; i-=4 ){
				sum += $(".pu_y").eq(i).innerHeight();
			}
			$(this).css({
				top:sum,
				left:($(this).index() % 4) * li_w,
			})
		})
	  }
	});
	//移出来后ul显示
	$(window).resize(function(){
		var z_hd = $(".pu_y>img").eq(1).outerHeight()+
		$(".pu_y>img").eq(5).outerHeight()+
		$(".pu_y>img").eq(9).outerHeight()+
		$(".pu_y>img").eq(13).outerHeight()+
		$(".pu_y>img").eq(17).outerHeight();
		$(".pu").css({
			height:z_hd,
		})
		if($("#header").innerWidth()>=850){
			$("#header ul").show();
		}else{
			$("#header ul").hide();
		}
		//轮播图高度
		$("#banner ul").height($("#banner ul li:eq(1)").outerHeight());
		//瀑布流
		var pu_y = $(".pu_y");
		$('img').each(function(index){
		  var $this = $(this);
		  var src = $this.attr('src');
		  var img = new Image()
		  img.src = src;
		  img.onload = function(){
		    var li_w = pu_y.eq(0).outerWidth();
			pu_y.each(function(){
				var sum = 0;
				for(var i = $(this).index() - 4; i >= 0; i-=4 ){
					sum += $(".pu_y").eq(i).innerHeight()
				}
				$(this).css({
					top:sum,
					left:($(this).index() % 4) * li_w,
				})
			})
		  }
		});
	})

	//bim的scrooltop
	var bim_li = $("#bim_main li");
	var li_top = [];
	bim_li.each(function(){
		li_top.push($(this).offset().top);
	});
	li_top.push($("#footer").offset().top);
	$(document).on("mousewheel",function(e){
		var screent=$(document).scrollTop();
		clearTimeout(timer);
		timer=setTimeout(function (){
			for (var i = 0; i < li_top.length; i++) {
				if(e.originalEvent.wheelDelta<0){
					//往下滚
					if (screent>=li_top[i]&&screent<li_top[i+1]) {
						$("body").stop().animate({scrollTop:li_top[i+1]},500);
					}
				}else{
					//往上滚
					if (screent>li_top[i]&&screent<=li_top[i+1]) {
						$("body").stop().animate({scrollTop:li_top[i]},500);
					}
				}
			}
		},200);	
		e.preventDefault();	
	})
	
}
	
	
	