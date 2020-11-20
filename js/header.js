$(function () {
    $('.my-page').on('click', function () {
        if ($('.my-page').text() == 'About') {
            $('body').css('overflow', 'hidden');
            $('.logo').css('opacity', .5);
            $('.my-page').css('opacity', .5);
            setTimeout(function () {
                $('.about').css({
                    transition: '1.5s',
                    width: '200vw',
                    height: '200vw'
                })
            }, 500)
            setTimeout(function () {
                location.href = 'about.html';
            }, 1800);
        } else {
            $('.my-self').removeAttr('style');
            $('.skills').removeAttr('style');
            setTimeout(function(){
                location.href = 'index.html';
            },1000)
        }
    })

    var check = sessionStorage.getItem('intro');

    if ($('.top-cover').hasClass('mark')) {
        sessionStorage.setItem('intro', 'true');
    }else{
        console.log(check);
        if(check == true){
            $('.about').css({
                width: '200vw',
                height: '200vw'
            })

            setTimeout(function () {
                $('.about').css({
                    transition: '1.5s',
                    width: '0',
                    height: '0'
                },1000)
            })
    
            setTimeout(function () {
                sessionStorage.setItem('intro', 'false');
            }, 1000)
        }
    }
})