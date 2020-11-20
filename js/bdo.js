$(function(){
    var domW = window.innerWidth, domH = window.innerHeight, sdH = $('.scroll-down').height();
    $('.bdo-img').height(domH);
    $('.next-project').height(domH);
    $(window).scrollTop(0);

    setTimeout(function(){
        // $(window).scrollTop(0);
        $('.bdo-img').css({
            transform: 'translateY(-'+sdH*2+'px)'
        })
        setTimeout(function(){
            $('.scroll-down').css({
                opacity: 1,
                transform: 'translate(-50%,-150%)'
            });
            setTimeout(function(){
                $('.scroll-down').addClass('active');
                $('body').css('overflow-y','auto')
            },500);
        },1000)
    },500)

    $(window).resize(function(){
        domH = window.innerHeight;
        $('.bdo-img').height(domH);
        $('.next-project').height(domH);
    })

    $(window).on('scroll', fadeInOut)

    function fadeInOut(e){
        var inH = window.innerHeight, scY = window.scrollY;
        var nfHome = $('.nf-home'), fun1 = $('.fun1-img img'), fun2 = $('.fun2-img img'), fun3 = $('.fun3-img img');

        if(nfHome.offset().top - inH < scY){
            nfHome.css({opacity: 1})
            $('.nf-home img').css('transform','scale(1)')
        }

        if(fun1.offset().top - inH+(fun1.height()/6) < scY){
            fun1.css({opacity: 1,transform: 'scale(1)'})
        }

        if(fun2.offset().top - inH+(fun2.height()/10) < scY){
            fun2.css({opacity: 1,transform: 'scale(1)'})
        }

        // if(scY - inH)
        if(scY  == $(document).height() - inH){
            $('body').css('overflow-y','hidden');

            setTimeout(function(){
                $('.next-project .title').addClass('active');

                setTimeout(function(){
                    $('.project .project-img').css('clip-path','circle(100%)');

                    setTimeout(function(){
                        location.href = 'netflix.html'
                    },1000);
                },1000)
            },500)
        }
    }
})