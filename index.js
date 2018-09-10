/*
* @Author: 123
* @Date:   2018-09-06 11:37:32
* @Last Modified by:   123
* @Last Modified time: 2018-09-10 08:39:02
*/


window.onload=function(){

	// let tops=document.querySelector("li");
	// let bottoms=document.querySelectorAll(".yc");
	// console.log(tops,bottoms);
	// for(let i=0;i<bottoms.length;i++){
	// 	tops.onmouseenter=function(){
	// 		bottoms[i].style.display="block";
	// 	}
	// }
	// 
	// 
	// //返回顶部
	let backs=document.querySelector(".back");
	console.log(backs);
	
	window.onscroll=function(){
		let h=document.body.scrollTop || document.documentElement.scrollTop;
		if(h>600){
			backs.style.height="50px";
		}
		else if(h<600){
			backs.style.height=0;
		}
		backs.onclick=function(){
			animate(document.body,{scrollTop:0},600);
			animate(document.documentElement,{scrollTop:0},600);
		}
	}

	//选项卡标题移入移出
	let jdbox=document.querySelectorAll(".jdbox");
	let jdText=document.querySelectorAll(".jdText");
	console.log(jdbox,jdText);
	for(let i=0;i<jdbox.length;i++){
		jdbox[i].onmouseenter=function(){
			for(let j=0;j<jdText.length;j++){
				jdbox[j].classList.remove("activeWhite");
				jdText[j].classList.remove("activeRED");
			}
			jdbox[i].classList.add("activeWhite");
			jdText[i].classList.add("activeRED");
		}
	}
	let moveBox=document.querySelectorAll(".moveBox");
	console.log(moveBox);
	moveBox[0].style.display="block";
	for(let i=0;i<jdbox.length;i++){
		jdbox[i].onclick=function(){
			for(let j=0;j<jdText.length;j++){
				jdbox[j].classList.remove("activeWhite");
				jdText[j].classList.remove("activeRED");
				moveBox[j].style.display="none";
			}
			jdbox[i].classList.add("activeWhite");
			jdText[i].classList.add("activeRED");
			moveBox[i].style.display="block";
		}	
	}
}