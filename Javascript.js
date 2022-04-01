document.write("Hello, world!");

function sayHello(){
 var response= prompt("What is ypur name?");
 alert("Hello "+ response +", have a nice day!");
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(30,100));

function showTopic(){
  var x=document.getElementById('demo');
  x.style.foutSize="25xp";
  x.style.color="red";
}
document.getElementById('demo').interHTML="Let's change the paragraph";
