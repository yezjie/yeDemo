var i_menu = document.getElementById("i_menu");
var nav_h = document.getElementsByClassName("nav_h")[0];
var search = document.getElementById("search");
var sea_img = search.getElementsByTagName("img")[0];
var inputs = search.getElementsByTagName("input")[0];
var d_box = document.getElementById("d_box");
var lr_btn = document.getElementById("lr_btn");
//log
var log = document.getElementById("log");
var log_tuo = document.getElementById("log_tuo");
var log_close = document.getElementById("log_close");
var form1 = document.getElementById("form1");
var l_inputs = form1.getElementsByTagName("input");
var l_a = document.getElementsByTagName("a")[0];
//res
var res = document.getElementById("res");
var res_tuo = document.getElementById("res_tuo");
var res_close = document.getElementById("res_close");
var form2 = document.getElementById("form2");
var r_inputs = form2.getElementsByTagName("input");
var r_a = res.getElementsByTagName("a")[1];
//最上面的按钮
var bol = true;
var bols = true;
i_menu.onclick = function() {
		if (bol) {
			nav_h.style.height = "227px";
			bol = false;
		} else {
			nav_h.style.height = "0px";
			bol = true;
		}
	}
	//搜索的出现关闭
sea_img.onclick = function() {
		if (bols) {
			search.className = "active";
			sea_img.setAttribute("src", "images/d_search.png");
			bols = false;
		} else {
			search.className = "";
			sea_img.setAttribute("src", "images/h_search.png");
			bols = true;
		}
	}
	//input的点击字消失
	//获得焦点
inputs.onfocus = function() {
		inputs.value = "";
	}
	//失去焦点
inputs.onblur = function() {
		if (inputs.value == "") {
			inputs.value = "搜索";
		} else {
			inputs.value = inputs.value;
		}

	}
	//登录拖动

function tuod(dr_tuo,box) {
	dr_tuo.onmousedown = function(e) {
		var ev = e || window.event;
		var divx = ev.clientX - box.offsetLeft - 200;
		var divy = ev.clientY - box.offsetTop;
		document.onmousemove = function(e) {
			var ev = e || window.event;
			var cw = document.documentElement.clientWidth;
			var ch = document.documentElement.clientHeight;
			nowx = ev.clientX - divx;
			nowy = ev.clientY - divy;
			if (nowx < 200) {
				nowx = 200;
			} else if (nowx >= cw - box.offsetWidth + 200) {
				nowx = cw - box.offsetWidth + 200;
			}
			if (nowy < 0) {
				nowy = 0;
			} else if (nowy >= ch - box.offsetHeight) {
				nowy = ch - box.offsetHeight;
			}
			box.style.left = nowx + "px";
			box.style.top = nowy + "px";
		}
		document.onmouseup = function() {
			document.onmousemove = null;
		}
	}
}
tuod(res_tuo,res);
tuod(log_tuo,log);

//点击出现
lr_btn.onclick = function(){
	if(lr_btn.innerHTML == "登录"){
		d_box.style.display = "block";
	}
}
//注册跳转
l_a.onclick = function(){
	log.style.display = "none"
	res.style.display = "block"
}
//登录跳转
r_a.onclick = function(){
	res.style.display = "none"
	log.style.display = "block"
}
//关闭按钮
res_close.onclick = function(){
	d_box.style.display = "none";
}
log_close.onclick = function(){
	d_box.style.display = "none";
}

//保存用户信息
	//得到信息
var r_bol = true;
var stor = window.localStorage;
var s_stor = window.sessionStorage;
var num=1;
if(stor.length == 0){
	stor.setItem("user","");
	stor.setItem("pass","");
}
r_inputs[5].onclick = function(){
	var user = r_inputs[0].value;
	var pass = r_inputs[1].value;
	var pass_q = r_inputs[2].value;
	var e_mail = r_inputs[3].value;
	//判断是否勾选
	if(r_inputs[4].checked != true){
		alert("请确认是否接受协议");
		r_bol = false;
	}else{
		r_bol = true;
	}
	//判断两次密码是否一致
	if(pass != pass_q){
		alert("两次密码不一样");
		r_bol = false;
	}else{
		r_bol = true;
	}
	//判断是否为空 有缺陷
	if(user == ""){
		alert("请填写用户名");
		r_bol = false;
	}else if(pass == ""){
		alert("请填写密码");
		r_bol = false;
	}else if(pass_q == ""){
		alert("请确认密码");
		r_bol = false;
	}else if(e_mail == ""){
		alert("请输入邮箱");
		r_bol = false;
	}else{
		r_bol = true;
	}
	//判断是否用户名重复
	for(var i=1;i<stor.length-1;i++){
		var shuju = stor.getItem("用户"+i);
		shuju=JSON.parse(shuju);
		console.log(shuju);
		if(shuju.user == user){
			alert("输入的用户名重复");
			r_inputs[0].value = "";
			r_bol = false;
			break;
		}else{
			r_bol = true;
		}
	}
	//以上条件满足后执行
	if(r_bol){
		var u_obj = {"user":user,"pass":pass,"e_mail":e_mail}
		alert("恭喜你！注册成功");
		res.style.display = "none";
		log.style.display = "block";
		var storL = stor.length-1;
		stor.setItem("用户"+storL,JSON.stringify(u_obj));
		r_inputs[0].value = "";
		r_inputs[1].value = "";
		r_inputs[2].value = "";
		r_inputs[3].value = "";
	}
}
//登录界面
var l_bol = false;
l_inputs[3].onclick = function(){
	var user = l_inputs[0].value;
	var pass = l_inputs[1].value;
	//判断是否为空 有缺陷
	if(user == ""){
		l_bol=false;
		alert("请填写用户名")
	}else if(pass == ""){
		l_bol = false;
		alert("请填写密码")
	}
	//判断是否存在该用户名
	for(var i=1;i<stor.length-1;i++){
		var shuju = stor.getItem("用户"+i);
		shuju=JSON.parse(shuju);
		console.log(shuju);
		if(shuju.user == user){
			l_bol = true;
			break;			
		}else{
			l_bol = false;
		}
	}
	//判断密码是否一致
	if(l_bol){
		for(var i=1;i<stor.length-1;i++){
			var shuju = stor.getItem("用户"+i);
			shuju=JSON.parse(shuju);
			if(shuju.pass != pass){		
				l_bol = false;
				num++;
			}else{
				l_bol = true;
				break;	
			}
		}
	}
	//判断是否勾选并存入数据
	if(l_bol){
		if(l_inputs[2].checked == true){
			stor.setItem("pass",pass);
		}else{
			stor.setItem("pass","");
		}
		stor.setItem("user",user);
		d_box.style.display = "none";
		lr_btn.innerHTML = "用户"+num;
	}
	//不符合条件进行重新输入
	if(l_bol == false){
		alert("您输入的用户名或密码错误");
		l_inputs[0].value = "";
		l_inputs[1].value = "";
	}
}
//将上次的记录存入输入框中
if(stor.getItem("user")!=""){
	l_inputs[0].value = stor.getItem("user");
}
if(stor.getItem("pass")!=""){
	l_inputs[1].value = stor.getItem("pass");
	l_inputs[2].checked = true;
}








