$(window).scroll(function(){

    
    let pageHeight = $(document).height() - $(window).height();
    let amountScrolled = $(document).scrollTop();
    
    let scrollPercent = (amountScrolled / pageHeight) * 100;
    
    $('.progress-bar').css("height", scrollPercent + "%");

    console.log(scrollPercent);

    if(scrollPercent >= 100)
    {
        $('.progress-bar').fadeOut("slow");
        $('.progress-container').css("background-color", "aqua");
    }
    else{

        $('.progress-container').css("background-color", "transparent");

        $('.progress-bar').fadeIn("10");

        $('.progress-bar').css("background-image", "linear-gradient(rgb(46, 213, 222), rgb(9, 107, 73) , rgb(4, 172, 94))");

    }

})