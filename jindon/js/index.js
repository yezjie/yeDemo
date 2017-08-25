window.onload = function() {
    var nav = document.getElementById("nav");
    var opt = document.getElementById("opt");
    var sel = document.getElementById("sel");
    var did = opt.getElementsByTagName("a");
    var my_jd = document.getElementById("my_jd");
    var fuwu = document.getElementById("fuwu");
    var daoh = document.getElementById("daoh");
    var erwei = document.getElementById("erwei");
    var erwei_n = document.getElementById("erwei_n");
    var leftsidebar = document.getElementById("leftsidebar");
    var leftsid_li = leftsidebar.getElementsByTagName("li");
    var subnav = document.getElementById("subnav");
    var box = document.getElementById("box");
    var btn = document.getElementById("btn");
    var btn_a = btn.getElementsByTagName("a");
    var boxLi = box.getElementsByTagName("li");
    var boxSp = box.getElementsByTagName("span");
    var submenu = document.getElementsByClassName("submenu");
    var nulL = document.getElementById("nav_ul").getElementsByTagName("li");
    var s_nav = document.getElementById("s_nav");
    var s_nava = s_nav.getElementsByTagName("a");
    var cs_content = document.getElementById("cs_content");
    var cs_contentUl = cs_content.getElementsByTagName("ul");
    var liner = document.getElementById("liner");
    var bom_sider = document.getElementById("bom_sider");
    var bom_s_i = bom_sider.getElementsByTagName("i");
    var bom_s_a = bom_sider.getElementsByTagName("a");
    var bom_s_sp = bom_sider.getElementsByTagName("span");
    var bom_box = document.getElementById("bom_box");
    var cha = document.getElementById("cha");
    var cb_box = bom_sider.getElementsByClassName("cb_box");
    var b_box1 = document.getElementById("b_box1");
    var b_box1Li = b_box1.getElementsByTagName("li");
    var b_box1a = b_box1.getElementsByTagName("a");
    var b_box1sp = b_box1.getElementsByTagName("span");
    var b_box1img = b_box1.getElementsByTagName("img");
    var b_box2 = document.getElementById("b_box2");
    var b_box2Li = b_box2.getElementsByTagName("li");
    var b_box2a = b_box2.getElementsByTagName("a");
    var b_box2sp = b_box2.getElementsByTagName("span");
    var b_box2img = b_box2.getElementsByTagName("img");
    var b_box3 = document.getElementById("b_box3");
    var b_box3Li = b_box3.getElementsByTagName("li");
    var b_box3a = b_box3.getElementsByTagName("a");
    var b_box3sp = b_box3.getElementsByTagName("span");
    var b_box3img = b_box3.getElementsByTagName("img");
    var b_box4 = document.getElementById("b_box4");
    var b_box4Li = b_box4.getElementsByTagName("li");
    var b_box4a = b_box4.getElementsByTagName("a");
    var b_box4sp = b_box4.getElementsByTagName("span");
    var b_box4img = b_box4.getElementsByTagName("img");
    var con_box = document.getElementById("con_box");
    var con_boxul = con_box.getElementsByTagName("ul")[0];
    var con_boxli = con_box.getElementsByTagName("li");
    var con_boxi = con_box.getElementsByTagName("i");
    var spansj = document.getElementsByClassName("shij")

    function hov(a, b) {
        a.className = b;
    }
    sel.onmouseover = function() { hov(nav, "shover"); }
    sel.onmouseout = function() { hov(nav, ""); }
    opt.onmouseover = function() { hov(nav, "shover"); }
    opt.onmouseout = function() { hov(nav, ""); }
    nulL[6].onmouseover = function() { hov(nav, "n_hover"); }
    nulL[6].onmouseout = function() { hov(nav, ""); }
    my_jd.onmouseover = function() { hov(nav, "n_hover"); }
    my_jd.onmouseout = function() { hov(nav, ""); }
    nulL[12].onmouseover = function() { hov(nav, "n_hover3"); }
    nulL[12].onmouseout = function() { hov(nav, ""); }
    fuwu.onmouseover = function() { hov(nav, "n_hover3"); }
    fuwu.onmouseout = function() { hov(nav, ""); }
    nulL[14].onmouseover = function() { hov(nav, "n_hover5"); }
    nulL[14].onmouseout = function() { hov(nav, ""); }
    daoh.onmouseover = function() { hov(nav, "n_hover5"); }
    daoh.onmouseout = function() { hov(nav, ""); }
    nulL[16].onmouseover = function() { hov(nav, "n_hover6"); }
    nulL[16].onmouseout = function() { hov(nav, ""); }
    erwei.onmouseover = function() { hov(nav, "n_hover6"); }
    erwei.onmouseout = function() { hov(nav, ""); }
    erwei_n.onmouseover = function() { hov(nav, "n_hover6"); }
    erwei_n.onmouseout = function() { hov(nav, ""); }


    for (var i = 0; i < did.length; i++) {
        if(sel.innerHTML == did[i].innerHTML){
            did[i].className = "active";
        }
        did[i].onclick = function() {
            sel.innerHTML = this.innerHTML;
            for (var j = 0; j < did.length; j++) {
                did[j].className = "";
            }
            this.className = "active";
        }
    }

    // banner 左侧菜单
    var index = 0;
    for (var i = 0; i < leftsid_li.length; i++) {
        leftsid_li[i].index = i;
        leftsid_li[i].onmouseover = function() {
            this.className = "li_active";
            submenu[this.index].style.display = "block";
            subnav.style.display = "block";
        }
        leftsid_li[i].onmouseout = function() {
            this.className = "";
            submenu[this.index].style.display = "none";
            subnav.style.display = "none";
        }
    }
    for (var i = 0; i < submenu.length; i++) {
        submenu[i].index = i;
        submenu[i].onmouseover = function() {
            leftsid_li[this.index].className = "li_active";
            this.style.display = "block";
            subnav.style.display = "block";
        }
        submenu[i].onmouseout = function() {
            leftsid_li[this.index].className = "";
            this.style.display = "none";
            subnav.style.display = "none";
        }
    }
    // banner 轮播
    
    var timer;
	// 封装style
    function h_style(anniu, tu ) {
        for (var j = 0; j < anniu.length; j++) {
            anniu[j].style.background = "#fff";
        }
        anniu[index].style.background = "#f10215";
        for (var k = 0; k < tu.length; k++) {
            tu[k].style.zIndex = "0";
            tu[k].style.opacity = "0";
        }
        tu[index].style.zIndex = "1";
        tu[index].style.opacity = "1";
    }
    //轮播封装
    function hu_lun(anniu, lr_an) {
        //下面原点
        for (var i = 0; i < anniu.length; i++) {
            anniu[0].style.background = "#f10215";
            anniu[i].index = i;
            anniu[i].onmouseover = function() {
                index = this.index;
                h_style(boxSp, boxLi);
            }
        }
        //左右点击事件
        lr_an[0].onclick = function() {
            index--;
            if (index < 0) {
                index = anniu.length - 1;
            }
            h_style(boxSp, boxLi);
        }
        lr_an[1].onclick = function() {
            index++;
            if (index > anniu.length - 1) {
                index = 0;
            }
            h_style(boxSp, boxLi);
        }

        function play() {
            timer = setInterval(lr_an[1].onclick, 5000);
        }
        play();
        box.onmouseover = function() { clearInterval(timer) };
        box.onmouseout = play;
    }
    hu_lun(boxSp, btn_a);

    //移动红块
    s_nava[0].onmouseover = function(){
        liner.style.left = "0px";
        cs_contentUl[0].style.display = "block";
        cs_contentUl[1].style.display = "none"
    }
    s_nava[1].onmouseover = function(){
        liner.style.left = "58px";
        cs_contentUl[0].style.display = "none";
        cs_contentUl[1].style.display = "block"
    }
    

    //banner 右侧 选项卡
    for(var j=0;j<bom_s_i.length;j++){
        bom_s_i[j].style.backgroundPosition =0+"px "+j*-24+"px";
    }
    //box上移 对应box
    for(var i=0;i<4;i++){
        bom_s_a[i].index = i;
        bom_s_a[i].onmouseover = function(){
            for( var j=0;j<4;j++){
                bom_s_a[j].style.top = "-28px";
                bom_s_sp[j].style.borderTop = "2px solid #fff";
                bom_s_sp[j].style.color = "#999";
                cb_box[j].style.display = "none";
            }
            bom_s_sp[this.index].style.borderTop = "2px solid #f10215";
            bom_s_sp[this.index].style.color = "#f10215";
            bom_box.style.top = "27px";
            cb_box[this.index].style.display = "block";
        }
    }
    //关闭
    cha.onclick = function(){
        for( var j=0;j<4;j++){
                bom_s_a[j].style.top = "12px";
                bom_s_sp[j].style.borderTop = "2px solid #fff";
                bom_s_sp[j].style.color = "#999";

            }
        bom_box.style.top = "210px";
    }
    //box里的选项卡
    function box_x(b_boxLi,b_boxa,b_boxsp){
        for(var i=0;i<b_boxLi.length;i++){ 
            b_boxLi[i].index = i;
            b_boxLi[i].onmouseover = function(){
                for(var j=0;j<b_boxLi.length;j++){
                    b_boxLi[j].style.background = "#fff";
                    b_boxa[j].style.color = "#999";
                    b_boxsp[j].style.borderTopColor = "#fff";
                }
                b_boxLi[this.index].style.background = "#f10215";
                b_boxa[this.index].style.color = "#fff";
                b_boxsp[this.index].style.borderTopColor = "#f10215";
            }
        }
    }
    box_x(b_box1Li,b_box1a,b_box1sp);
    box_x(b_box2Li,b_box2a,b_box2sp);
    box_x(b_box3Li,b_box3a,b_box3sp);
    box_x(b_box4Li,b_box4a,b_box4sp);

    console.log(con_boxul.style.width);
    console.log(con_boxul);
    //下面选项卡
   con_boxul.style.width = con_boxli[0].offsetWidth*con_boxli.length+"px";
   index = 0;
   con_boxi[0].onclick = function(){
        index--;
        if(index<0){
            con_boxul.style.transition = "all 0s";
            con_boxul.style.left = -con_boxli[0].offsetWidth*5*4 +"px";
            index = 3;
        }
        con_boxul.style.left = -con_boxli[0].offsetWidth*5*index +"px";
        con_boxul.style.transition = "all 0.5s";
   }
   con_boxi[1].onclick = function(){
        index++;
        if(index>4){
            con_boxul.style.transition = "all 0s";
            con_boxul.style.left = 0 +"px";
            index = 1;
        }
        con_boxul.style.left = -con_boxli[0].offsetWidth*5*index +"px";
        con_boxul.style.transition = "all 0.5s";
   }

   //倒计时
   
   function bl(num){
        return num<10?"0"+num:num;
   }
   function shi(){
    var newt = new Date();
       var newts = newt.getTime();
       var endt = new Date("2017/5/1");
       var endts = endt.getTime();
       var sheng = endts - newts;
       var hour = Math.floor(sheng/1000/60/60%24);
       var min = Math.floor(sheng/1000/60%60);
       var ses = Math.floor(sheng/1000%60);

       
       hour = bl(hour);
       ses = bl(ses);
       min = bl(min);

       spansj[0].innerHTML = hour;
       spansj[1].innerHTML = min;
       spansj[2].innerHTML = ses;
   }
   shi();
   setInterval(shi,1000);
   
}
