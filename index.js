// 跑动次数
var count = 0;
// 动画执行方向
var isgo = false;
// 定义计时器对象
var timer;

window.addEventListener('load', function () {
    // 获取图片元素
    var ul_img = document.getElementsByClassName('ul_img')[0];
    var li_img = document.getElementsByClassName('li_img')
    var arrow = document.getElementsByClassName('arrow')
    var div_btn = document.getElementsByClassName('div_btn')
    div_btn[0].style.backgroundColor = 'aqua';


    // 定义计时器，控制图片移动
    showtime();
    function showtime() {
        timer = setInterval(function () {
            if (isgo == false) {
                count++;
                ul_img.style.transform = "translate(" + -640 * count + "px)";
                if (count >= li_img.length - 1) {
                    count = li_img.length - 1;
                    isgo = true;
                }
            } else {
                count--;
                ul_img.style.transform = "translate(" + -640 * count + "px)";
                if (count <= 0) {
                    count = 0;
                    isgo = false;
                }
            }
            for (var i = 0; i < div_btn.length; i++) {
                div_btn[i].style.backgroundColor = 'aquamarine';
            }
            div_btn[count].style.backgroundColor = 'aqua';
        }, 2000)
    }
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].onmouseover = function () {
            clearInterval(timer)
        }
        arrow[i].onmouseout = function () {
            showtime();
        }
        arrow[i].onclick = function () {
            if (this.title == 0) {
                count++;
                if (count > 3) {
                    count = 0;
                }
            } else {
                count--;
                if (count < 0) {
                    count = 3;
                }
            }
            ul_img.style.transform = "translate(" + -640 * count + "px)";
            for (var i = 0; i < div_btn.length; i++) {
                div_btn[i].style.backgroundColor = 'aquamarine';
            }
            div_btn[count].style.backgroundColor = 'aqua';
        }
    }
    for (var b = 0; b < div_btn.length; b++) {
        div_btn[b].index = b;
        div_btn[b].onmouseover = function () {
            clearInterval(timer)
            // console.log(this.index);

            if (this.index == 3) {
                isgo = true;
            }
            if (this.index == 0) {
                isgo = false;
            }
            for (var a = 0; a < div_btn.length; a++) {
                div_btn[a].style.backgroundColor = 'aquamarine';
            }
            div_btn[this.index].style.backgroundColor = 'aqua';
            count = this.index;
            ul_img.style.transform = "translate(" + -640 * count + "px)";

        }
        div_btn[b].onmouseout = function () {
            showtime();
        }
    }




})