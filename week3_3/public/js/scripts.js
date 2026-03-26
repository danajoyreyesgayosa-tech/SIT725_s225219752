const clickMe = () => {
    alert("Welcome! 🍽️ Discover delicious recipes—from creamy pasta and fluffy pancakes to rich, flavorful curry—all in one place")
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
  });