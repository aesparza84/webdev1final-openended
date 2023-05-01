$(window).scroll(function(){

    
    let pageHeight = $(document).height() - $(window).height();
    let amountScrolled = $(document).scrollTop();
    
    let scrollPercent = (amountScrolled / pageHeight) * 100;
    
    $('.progress-bar').css("height", scrollPercent + "%");

    console.log(scrollPercent);

    if(scrollPercent >= 100)
    {
        $('.progress-bar').fadeOut("slow");
        $('.progress-container').css("background-color", "white");
    }
    else{

        $('.progress-container').css("background-color", "transparent");

        $('.progress-bar').fadeIn("10");

        $('.progress-bar').css("background-image", "linear-gradient(rgb(84, 222, 46), rgb(94, 107, 9) , rgb(172, 63, 4));");

    }
})

$(figcaption).fadeIn(slow);