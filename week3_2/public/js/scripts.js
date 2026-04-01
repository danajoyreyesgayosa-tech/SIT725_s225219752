const clickMe = () => {
    alert("Welcome to this page! Have a good day!")
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(()=>{
        clickMe();
    })
  });