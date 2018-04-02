$(".button2").click(function(){
  var circleWidth = Math.floor(Math.random() * 15);
  var circleColor = Math.floor(Math.random() * 10);
  console.log(circleWidth);

  $(".scalecircle").css("height", circleWidth + "0.1px" );
  $(".scalecircle").css("width", circleWidth + "0.1px" );
  $(".circle1").css("backgroundColor", circleColor="white");
  $(".circle2").css("backgroundColor", "white");
  $(".circle3").css("backgroundColor", "white");
  $(".circle4").css("backgroundColor", "white");
  $(".circle5").css("backgroundColor", "white");
  $(".scalesquare").css("backgroundColor", "blue");
});

$(document).ready(function(){

  $(".button1").click(function(){
    randomColor();
  });

  function randomColor(){
    // something happens here when you click the button
    console.log('you clicked the button');

    // Three variables for RGB, each one has to be a random number 0 -> 255
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    console.log("red: " + red);
    console.log("green: " + green);
    console.log("blue: " + blue);

    // Hopefully this outputs something like rgb(0,255,20);
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";

    $(".scalesquare1").css("background-color", rgb);
    $(".scalesquare2").css("background-color", rgb);
    $(".button1").css("background", rgb);
  }

  randomColor();

});
