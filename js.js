$(window).scroll(function(){

    
    let pgheight = $(document).height();
    let scrollammount = $(document).scrollTop();
    let scrollpercent = (scrollammount/pgheight)*100;

    console.log(scrollpercent);

    $('.progress-bar').css("height", scrollpercent+"%");

})