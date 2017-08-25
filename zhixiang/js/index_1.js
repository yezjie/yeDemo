    var ban_b = document.getElementById("ban_b");
    var banneri = ban_b.getElementsByTagName("div");
    var baimg = ban_b.getElementsByTagName("img");
    var baspan = ban_b.getElementsByTagName("span");
    var banner_img = document.getElementsByClassName("banner-img");
    var ap_box = document.getElementById("ap_box");
    var ap_img = ap_box.getElementsByTagName("img");
    var v_close = document.getElementById("v_close");
    var e_shi = document.getElementById("e_shi");
    var v_btn = document.getElementById("v_btn");
    var video_q = document.getElementById("video_q");
    var v_clq = document.getElementById("v_clq");
    var com_conx = document.getElementById("com_conx");
    var header = document.getElementById("header");
    in_img
    var in_img = document.getElementById("in_img");
    //header
    window.onscroll = function() {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        var max = in_img.offsetHeight;
        if (scrolltop >= max) {
            header.style.position = "fixed";
        } else {
            header.style.position = "relative";
        }
    }

    //播放视频
    v_btn.onclick = function() {
        e_shi.style.display = "block";
        e_shi.style.width = "100%";
        v_close.style.display = "block"
        v_clq.style.display = "none";
        e_shi.style.height = video_q.offsetWidth * 0.52 + "px";
    }
    v_close.onclick = function() {
        e_shi.style.display = "none";
        e_shi.style.width = "604px";
        v_close.style.display = "none";
        v_clq.style.display = "block";
    }

    //中间的图片无缝滚动
    ap_box.innerHTML += ap_box.innerHTML;
    ap_box.style.width = ap_img[1].offsetWidth * ap_img.length + "px";
    var speed = 1;
    var timer;

    function stars() {
        timer = setInterval(function() {
            if (ap_box.offsetLeft <= -ap_box.offsetWidth / 2) {
                ap_box.style.left = 0;
            }
            ap_box.style.left = ap_box.offsetLeft - speed + "px";
        }, 30);
    }
    stars();
    ap_box.onmouseover = function() {
        clearInterval(timer);
    }
    ap_box.onmouseout = function() {
            stars();
        }
        //轮播的按钮
    var i_c = document.getElementById("i_c");
    var i_btn = document.getElementsByTagName("i");
    var com_hover = document.getElementById("com_hover");
    var cw = document.documentElement.clientWidth;
    var bol = true;
    if (cw >= 755) {
        i_c.onclick = function() {
            if (bol) {
                com_hover.style.width = "65%";
                com_hover.style.height = "100%";
                i_btn[0].style.opacity = "0"
                i_btn[2].style.opacity = "0"
                com_hover.className = "active";
                com_conx.style.display = "block";
                com_con.style.display = "block";
                bol = false;
            } else {
                com_hover.style.width = "100px";
                com_hover.style.height = "100px";
                i_btn[0].style.opacity = "1"
                i_btn[2].style.opacity = "1"
                com_hover.className = "";
                com_conx.style.display = "none";
                com_con.style.display = "none";
                bol = true;
            }
        }
    } else if (cw < 755 && cw >= 535) {
        com_hover.style.display = "block";
        i_c.onclick = function() {
            if (bol) {
                com_hover.style.width = "100%";
                com_hover.style.height = "100%";
                i_btn[0].style.opacity = "0"
                i_btn[2].style.opacity = "0"
                com_hover.className = "active";
                com_con.style.display = "block";
                bol = false;
            } else {
                com_hover.style.width = "100px";
                com_hover.style.height = "100px";
                i_btn[0].style.opacity = "1"
                i_btn[2].style.opacity = "1"
                com_hover.className = "";
                com_con.style.display = "none";
                bol = true;
            }
        }
    } else if (cw < 535) {
        com_hover.style.display = "none";
    }
    banner_img[0].style.height = baimg[0].offsetHeight + "px";
    banneri[0].style.height = baimg[0].offsetHeight + "px";
    window.onresize = function() {
        var cw = document.documentElement.clientWidth;
        banneri[0].style.height = baimg[0].offsetHeight + "px";
        banner_img[0].style.height = baimg[0].offsetHeight + "px";
        e_shi.style.height = e_shi.offsetWidth * 0.52 + "px";
        if (cw >= 755) {
            if (bol) {
                com_conx.style.display = "none";
            } else {
                com_conx.style.display = "block";
                com_hover.style.width = "65%";
            }
            i_c.onclick = function() {
                if (bol) {
                    com_hover.style.width = "65%";
                    com_hover.style.height = "100%";
                    i_btn[0].style.opacity = "0"
                    i_btn[2].style.opacity = "0"
                    com_hover.className = "active";
                    com_conx.style.display = "block";
                    com_con.style.display = "block";
                    bol = false;
                } else {
                    com_hover.style.width = "100px";
                    com_hover.style.height = "100px";
                    i_btn[0].style.opacity = "1"
                    i_btn[2].style.opacity = "1"
                    com_hover.className = "";
                    com_conx.style.display = "none";
                    com_con.style.display = "none";
                    bol = true;
                }
            }
        } else if (cw < 755 && cw >= 535) {
            com_hover.style.display = "block";
            if (bol) {
                com_conx.style.display = "none";
            } else {
                com_conx.style.display = "block";
                com_hover.style.width = "100%";
            }
            com_conx.style.display = "none";
            i_c.onclick = function() {
                if (bol) {
                    com_hover.style.width = "100%";
                    com_hover.style.height = "100%";
                    i_btn[0].style.opacity = "0"
                    i_btn[2].style.opacity = "0"
                    com_hover.className = "active";
                    com_con.style.display = "block";
                    bol = false;
                } else {
                    com_hover.style.width = "100px";
                    com_hover.style.height = "100px";
                    i_btn[0].style.opacity = "1"
                    i_btn[2].style.opacity = "1"
                    com_hover.className = "";
                    com_con.style.display = "none";
                    bol = true;
                }
            }
        } else if (cw < 535) {
            com_hover.style.display = "none";
        }
    }

    function lunb(Img, btn, box) {
        var index = 0;
        Img[0].className = "active";
        btn[0].className = "active";
        for (var i = 0; i < btn.length; i++) {
            btn[i].index = i;
            btn[i].onmouseover = function() {
                index = this.index;
                for (var j = 0; j < btn.length; j++) {
                    btn[j].className = "";
                    Img[j].className = "";
                }
                this.className = "active";
                Img[this.index].className = "active";
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
                    Img[j].className = "";
                }
                Img[index].className = "active";
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
    lunb(baimg, baspan, banneri);