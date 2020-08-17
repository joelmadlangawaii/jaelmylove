var numberOfButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i < numberOfButtons; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "m":
        var rainRain = new Audio('sounds/Rain Rain.mp3');
        rainRain.play();
        break;


      case "y":
      var headShoulders = new Audio('sounds/Head Shoulders.mp3');
      headShoulders.play();
      break;

      case "l":
      var babyShark = new Audio('sounds/Baby Shark.mp3');
      babyShark.play();
      break;

      case "o":
      var followMe = new Audio('sounds/Follow Me.mp3');
      followMe.play();
      break;

      case "v":
      var happy = new Audio('sounds/Happy.mp3');
      happy.play();
      break;

      case "e":
      var animalDance = new Audio('sounds/Animal Dance.mp3');
      animalDance.play();
      break;

      case "💕":
      var sunShine = new Audio('sounds/You Are My Sunshine.mp3');
      sunShine.play();
      break;


      default: console.log(buttonInnerHTML);


    }

  });

}
