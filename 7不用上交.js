# loop循环1，for循环
var fruits=[];
for(i=1;i<10;i++){
  fruits[i]=prompt("Enter fruits:");
}
alert("fruits contain" + fruits);

# 循环2for it循环
var movie2 = ["Avengers", "Captain Marvel", "Black Panther", "Spiderman"];
movie2.forEach(function(movie){
  alert(movie);
});

# 循环3 for of循环
for(var movie of movie2){
  console.log(movie)
}

#循环完整版，有就显示
var movieDetails = [{title: "Avengers",  time:"12pm",  status: "available"},{title: "Captain Marvel",  time:"2pm",  status: "unavailable"},{title: "Black Panther",  time:"4pm",  status: "available"},{title: "Spiderman",  time:"6pm",  status: "available"}];
for(var movie of movieDetails){
  if(movie.status ==="available"){
    console.log("The movie "+ movie.title + " plays at " + movie.time + " is available")
  }
  else{
    console.log("Sorry, the movie  " + movie.title + " is sold out")
  }
};
