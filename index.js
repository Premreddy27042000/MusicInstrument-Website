
var numOfBtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("I got Clicked");

        //  this.style.color = "black";
        //var audio = new Audio("sounds/tom-2.mp3");

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimate(buttonInnerHtml);

    })



}


//document.querySelectorAll("button")[1].addEventListener("click",click)

//function click(){
//    alert("helllllloooo buddddy");
//}

document.addEventListener("keypress",function (event){
    
    makeSound(event.key);
    buttonAnimate(event.key);
    //alert("Key is pressed");
})


function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio(["https://newmp3ringtones.net/assets/sass/Ringtones/SuryaWebSeriesBgmRingtone2006873372.mp3"])
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

      default:
    }

}


function buttonAnimate(currentkey){

    var activeButton = document.querySelector("."+currentkey);

     activeButton.classList.add("pressed");


     setTimeout(function(){
         activeButton.classList.remove("pressed");
     },200);
}