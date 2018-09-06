/*
* @Author: 123
* @Date:   2018-09-06 11:37:32
* @Last Modified by:   123
* @Last Modified time: 2018-09-06 16:56:07
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

	
}