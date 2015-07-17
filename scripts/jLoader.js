function hideLoader(){
    $('#jLoader').css("background-image", "none");
    $(document.body).css({"overflow": "visible"});
    $('#jLoader').fadeOut(1000);
}

$(window).load(function() {
    hideLoader();    
})
