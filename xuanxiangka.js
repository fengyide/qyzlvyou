/*
* @Author: 123
* @Date:   2018-09-09 16:16:34
* @Last Modified by:   123
* @Last Modified time: 2018-09-09 16:17:59
*/
window.onload=function(){
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