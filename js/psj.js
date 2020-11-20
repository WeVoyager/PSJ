$(function () {
    /* $(window).on('wheel', wheelEvent)
    $(window).off('wheel', wheelEvent) */

    var pageIdx = 1;

    function wheelEvent(e) {
        $(window).off('wheel', wheelEvent);
        $('.title').off({
            'mouseenter': scaleUp,
            'mouseleave': removeScale
        })
        setTimeout(function () {
            $(window).on('wheel', wheelEvent)
            $('.title').on({
                'mouseenter': scaleUp,
                'mouseleave': removeScale
            })
        }, 750);
        $('.project-num').css('opacity', '1');
        setTimeout(function () {
            $('.project-num').removeAttr('style');
        }, 700);

        if (e.originalEvent.deltaY > 0) {
            if (pageIdx == 1) {
                pageIdx++
            } else {
                pageIdx = 1;
            }
        } else if (e.originalEvent.deltaY < 0) {
            if (pageIdx == 2) {
                pageIdx--
            } else {
                pageIdx = 2;
            }
        }
        $('.project-num code').html(pageIdx);

        circleEffect()
    }

    function circleEffect() {
        console.log(pageIdx)
        $('.home .title').removeAttr('style')

        $('.home .container').removeAttr('style')

        setTimeout(function () {
            $('.home .shadow-box').removeAttr('style')
        }, 100)
        setTimeout(function () {
            $('.home .shadow-box2').removeAttr('style')
        }, 200)

        setTimeout(function () {
            if (pageIdx == 1) {
                $('.home .project-bg').attr('src','img/netflix_bg.jpg');
                $('.home .project-shadow').css({
                    background: '#000'
                });
                $('.home .title').html('NETFLIX');
            } else {
                $('.home .project-bg').attr('src','img/bdo_bg.jpg');
                $('.home .project-shadow').css({
                    background: 'url("../img/bdo_shadow_bg.jpg") no-repeat center /  1920px 937px'
                });
                $('.title').html('BLACK DESERT');
            }
            $('.home .container').css({
                transform: 'scale(1)',
                opacity: 1
            })
            setTimeout(function () {
                $('.home .shadow-box').css({
                    transform: 'scale(1)',
                    opacity: 1
                })
            }, 30)
            setTimeout(function () {
                $('.home .shadow-box2').css({
                    transform: 'scale(1)',
                    opacity: 1
                })
            }, 50)
            setTimeout(function () {
                $('.home .title').css({
                    transform: 'rotate(0deg) translateY(0)',
                    opacity: .5
                })
            }, 200)
        }, 500)
    }

    /* $(window).on('mousemove', movingObject)
    $(window).off('mousemove', movingObject) */

    function movingObject(e) {
        $('.project').css({
            transform: 'translate(' + e.clientX * -0.01 + 'px,' + e.clientY * -0.02 + 'px)'
        })

        setTimeout(function () {
            $('.project-shadow').eq(2).css({
                transform: 'translate(' + e.clientX * -0.01 + 'px,' + e.clientY * -0.02 + 'px)'
            })
        }, 100)

        setTimeout(function () {
            $('.project-shadow').eq(3).css({
                transform: 'translate(' + e.clientX * -0.01 + 'px,' + e.clientY * -0.02 + 'px)'
            })
        }, 200)
    }

    function scaleUp() {
        $('.home .title').css('opacity', .9)
        $('.home .container').css('transform', 'scale(1.05)');
        setTimeout(function () {
            $('.home .shadow-box').css('transform', 'scale(1.05)');
        }, 100)
        setTimeout(function () {
            $('.home .shadow-box2').css('transform', 'scale(1.05)');
        }, 200)
    }

    function removeScale() {
        $('.home .title').css('opacity', .5);
        $('.home .container').css('transform', 'scale(1)');
        setTimeout(function () {
            $('.home .shadow-box').css('transform', 'scale(1)');
        }, 100)
        setTimeout(function () {
            $('.home .shadow-box2').css('transform', 'scale(1)');
        }, 200)
    }

    function changeDisplay() {
        $('.home .project').css({transform:'translate(0,0)',transition:'.5s'})
        $('.home .project-shadow').eq(2).css({transform:'translate(0,0)',transition:'.5s'})
        $('.home .project-shadow').eq(3).css({transform:'translate(0,0)',transition:'.5s'})
        $('.footer').css('opacity',0)
        $('.home .title').addClass('active');

        setTimeout(function(){
            $('.home .project').css('clip-path','circle(100%)');

            setTimeout(function(){
                $('.logo,.my-page').css('opacity','1');
            },500);
            setTimeout(function(){
                if(pageIdx == 1){
                    location.href = 'netflix.html';
                }else{
                    location.href = 'bdo.html';
                }
            },1000)
        },1000);
        $(window).off('mousemove', movingObject)
        $(window).off('wheel', wheelEvent)
        $('.home .title').off({
            'mouseenter': scaleUp,
            'mouseleave': removeScale
        })
    }

    /* setTimeout(function(){
        $('.home').css('clip-path','circle(100% at 50% 50%)');
    },1500) */

    setTimeout(function () {
        $('.intro .shadow-box2').css('transform', 'scale(1)')
        setTimeout(function () {
            $('.intro .shadow-box').css('transform', 'scale(1)')
        }, 300)

        setTimeout(function () {
            $('.intro .container').css('transform', 'scale(1)')

            setTimeout(function () {
                $('.intro .title').css({
                    transform: 'rotate(0)',
                    opacity: .5
                })

                setTimeout(function () {
                    $('.intro .container').removeAttr('style')
                    setTimeout(function () {
                        $('.intro .shadow-box').removeAttr('style')
                    }, 100)

                    setTimeout(function () {
                        $('.intro .shadow-box2').removeAttr('style')
                        $('.intro .title').removeAttr('style')
                    }, 200)
                }, 1500);

                setTimeout(function () {
                    $('.home').css('clip-path', 'circle(100% at 50% 50%)');

                    setTimeout(function () {
                        $('.home .container').css({
                            transform: 'scale(1)',
                            opacity: 1
                        })
                        setTimeout(function () {
                            $('.home .shadow-box').css({
                                transform: 'scale(1)',
                                opacity: 1
                            })
                        }, 30)

                        setTimeout(function () {
                            $('.home .shadow-box2').css({
                                transform: 'scale(1)',
                                opacity: 1
                            })
                        }, 50)

                        setTimeout(function () {
                            $('.home .title').css({
                                transform: 'rotate(0deg) translateY(0)',
                                opacity: .5
                            })
                        }, 200)

                        $('.top-cover').css('opacity', 1)
                        $('.footer').css('opacity', 1)

                        $(window).on('mousemove', movingObject);
                        $(window).on('wheel', wheelEvent);
                        $('.home .title').on({
                            'mouseenter': scaleUp,
                            'mouseleave': removeScale
                        });
                        $('.home .title').on('click',changeDisplay);
                    }, 1000)
                }, 2500)

            }, 800)

        }, 800)

    }, 500)
})