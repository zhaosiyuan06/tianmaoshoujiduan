$(function(){
    var mySwiper = new Swiper ('.banner_box .swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.banner_box .swiper-pagination',
    })

    var swiper = new Swiper(' .lunbo2 .swiper-container', {
        pagination: '.lunbo2 .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });
    var swiper = new Swiper(' .lunbo .swiper-container', {
        pagination: '.lunbo .swiper-pagination',
        direction: 'vertical',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
    setInterval(move,100)
    function move(){
        var stop=document.body.scrollTop;
        if(stop>100){
            $('.top_box').addClass('colors')
        }else{
            $('.top_box').removeClass('colors')
        }
    }
   $('.top_box .left').on('click',function(){
       $('.zhezhao').css({display:"block"});
       $('.cebian').addClass('cebian1');
   })
    $('.zhezhao').on('click',function(){
        $('.cebian').removeClass('cebian1');
        $(this).css({display:"none"});
        // $(this).animate({display:"none"},500)
    })

    var aa=$('.fen1 .f2');
    $('.fen1').on('click',function () {
        for(var j=0;j<aa.length;j++){
            $('.f2').css({display:"none"});
            $('.fen1').css({background:"#eeeeee"})
            $('.fen1').css({color:"#9b9b9b"})
        }
       $(this).children('.f2').css({display:"block"})
        $(this).css({background:"white"})
        $(this).css({color:"black"})
    })
    // var f1=$('.fen1 .f2')
    // $('.fen1').on('click',function(){
    //     // console.log($('.f1'))
    //
    //    f1.removeClass('active').eq($(this).index()).addClass('active');
    // })
})