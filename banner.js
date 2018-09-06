/*
* @Author: 123
* @Date:   2018-09-06 21:04:36
* @Last Modified by:   123
* @Last Modified time: 2018-09-06 21:24:32
*/
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