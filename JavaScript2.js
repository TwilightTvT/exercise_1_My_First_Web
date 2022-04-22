function inputAnwser(){
 var response = prompt("请问ABCD的面积是多少？(不需要单位）");
 if (response === "40"){
				alert("恭喜你，"+ response +"平方厘米是正确答案！");
      }else{
				alert("很遗憾，"+ response +"平方厘米不是正确答案，需要提示请点击下方按钮。");
			}
}

function hint(){
 alert("设EC为a，三角形PEC与三角形PDA是相似三角形");
}

function showTopic(){
  var x=document.getElementById('demo');
  x.style.foutSize="25xp";
  x.style.color="white";
  x.innerHTML = "剩余提示0/1";
}

function rightAnwser(){
   alert("正确答案是40。");
}
