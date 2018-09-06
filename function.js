window.onload=function () {
//     let imgs=document.querySelectorAll("img");
//     let dots=document.querySelectorAll('li');
//     let banner=document.querySelectorAll('.banner')[0];
//     console.log(imgs)
//img:需要轮播的图片集合
//dots轮播点的集合
//banners:放轮播图的盒子"元素"!!!!加[0]
//number:轮播点的个数
//activeclass:伦比点选中时的类名
//time:时间
    function Lbt(img,dot,banners,number,activeclass,time){
        // let imgs=document.querySelectorAll(img);
        // let dots=document.querySelectorAll(li);
        // let banner=document.querySelectorAll(banners)[0];
        // console.log(imgs)
        img[0].style.opacity='1';
        dot[0].classList.add(activeclass);
        let num=0;
        //定义初始值
        for(let i=0;i<dot.length;i++){
            dot[i].onmouseover=function(){
                for(let j=0;j<dots.length;j++){
                    img[j].style.opacity="0";
                    dot[j].classList.remove(activeclass);
                }
                img[i].style.opacity='1';
                dot[i].classList.add(activeclass);
                num=i;
            }
        }

        let t;
        function move(){
            num++;
            if(num==number){
                num=0;
            }
            for(let j=0;j<dot.length;j++){
                img[j].style.opacity='0';
                dot[j].classList.remove(activeclass);
            }
            img[num].style.opacity='1';
            dot[num].classList.add(activeclass);

        }
        banner.onmouseover=function(){
            clearInterval(t);
        }
        banner.onmouseout=function(){
            t=setInterval(move,time);
        }
    }

    // Lbt('img','li','.banner',5,"active",1000);
// }








//左右轮播函数
//imgs:需要轮播的图片集合
//dots:轮播点的集合
//banner:放轮播图的盒子"元素"!!!!加[0]
//leftBtn：左箭头 "元素"!!!!加[0]
//rightBtn：右箭头  "元素"!!!!加[0]
//widths：轮播图的宽度整数
//activeclass:伦比点选中时的类名
//time:时间
function banner_lr(imgs,dots,banner,leftBtn,rightBtn,widths,activeclass="active",time=2000){
    imgs[0].style.left=0;
    dots[0].classList.add(activeclass);
    let now=0;
    let next=0;
    //开关:控制快速点击时图片会快速轮播的现象
    //定义开关,默认开关打开， flag=true,可以点击左右箭头
    let flag=true;
    //
    //   now            next
    //  0               0
    //                  ++
    // left:0           left:1226;
    // left:1226        left:0;

    let t=setInterval(move,2000);
    function move(){
        next++;
        if(next==imgs.length){
            next=0;
        }
        //确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        dots[now].classList.remove(activeclass);
        dots[next].classList.add(activeclass);
        now=next;
    }
    function moveLeft(){
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function(){
            flag=true;
        });
        dots[now].classList.remove(activeclass);
        dots[next].classList.add(activeclass);
        now=next;
    }
    leftBtn.onclick=function(){
        //判断开关是否开启
        //如果开关开启，则!flag=false,不执行return,执行flag=false和move,move执行完flag=true
        //开关关闭时，不要点击
        //flag=false !flag=true  执行return，结束函数。
        if(!flag){
            return;
        }
        flag=false;
        moveLeft();
    }
    rightBtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function() {
        t=setInterval(move,time);
    }
    //鼠标移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove("active");
                imgs[j].style.left=-widths+"px";
            }
            dots[i].classList.add("active");
            imgs[i].style.left=0;
            now=i;
            next=i;
        }
    }
    //窗口失去焦点时，停止时间间隔函数
    window.onblur=function(){
        clearInterval(t);
    }
    //窗口获得焦点时，继续时间间隔函数
    window.onfocus=function(){
        t=setInterval(move,time);
    }
}


//透明度轮播
////imgs:需要轮播的图片集合
//dots:轮播点的集合
//banner:放轮播图的盒子"元素"!!!!加[0]
//number:轮播点的个数
//leftBtn：左箭头 "元素"!!!!加[0]
//rightBtn：右箭头  "元素"!!!!加[0]
//widths：轮播图的宽度整数
//activeclass:伦比点选中时的类名
//time:时间
function tmdLb(imgs,dots,banner,number="5",leftBtn,rightBtn,activeclass="active",time="2000"){
    dots[0].classList.add(activeclass);
    imgs[0].style.opacity='1';
    let num=0;
      let t;
      for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function(){
            for(let j=0;j<dots.length;j++){
                imgs[j].style.opacity="0";
                dots[j].classList.remove(activeclass);
            }
            imgs[i].style.opacity="1";
            dots[i].classList.add(activeclass);
            num=i;
        }
      }
      
        function move(){
            num++;
            if(num==number){
                num=0;
            }
            for(let j=0;j<imgs.length;j++){
                imgs[j].style.opacity='0';
                dots[j].classList.remove(activeclass);
            }
            imgs[num].style.opacity='1';
            dots[num].classList.add(activeclass);
        }
         function moveL(){
            num--;
            if(num<0){
                num=imgs.length-1;
            }
            for(let j=0;j<imgs.length;j++){
                imgs[j].style.opacity='0';
                dots[j].classList.remove(activeclass);
            }
            imgs[num].style.opacity='1';
            dots[num].classList.add(activeclass);
        }
    leftBtn.onclick=function(){
        moveL();
    }
    rightBtn.onclick=function(){
        move();
    }
        
        banner.onmouseover=function(){
            clearInterval(t);
        }
        banner.onmouseout=function(){
            t=setInterval(move,time);
        }
}
}
