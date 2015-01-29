$(document).scroll(function(){
        t = (100 - $(this).scrollTop())/100;
        if(t<0)t=0;
        $('.first').css({opacity: t})
    })