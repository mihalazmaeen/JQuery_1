$(document).ready(function(){


//navbar bg color change
$(window).scroll(function(){
    $(".navbar").toggleClass('scrolled',$(this).scrollTop()>100);
});
//text effect starts here
let typed=new Typed('.titleMain',{
    strings:["First Title Goes Here","Second Title Goes Here","Third One Goes Here"],
    typeSpeed:100,
    loop:true
});

//ends here




//navbar bg color change ends here

});