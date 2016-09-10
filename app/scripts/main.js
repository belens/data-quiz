document.getElementsByClassName("option1")[0].addEventListener("click", function(){
    document.getElementsByClassName("shell")[0].classList += " anwsered";
    console.log(document.getElementsByClassName("topbox")[0]);
    document.getElementsByClassName("topbox")[0].innerHTML = 'CORRECT!';
});
