function hideLoader(){
    $('#jLoader').css("background-image", "none");
    $('#jLoader').fadeOut(1000);
}

$(window).load(function() {
    hideLoader();    
})
