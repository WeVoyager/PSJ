$(function () {
    /* $(window).on('wheel', wheelEvent)
    $(window).off('wheel', wheelEvent) */

    $('.home .project').css('background', 'url("../img/netflix_bg.jpg") no-repeat center / 1920px 937px');

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
                $('.home .project').css('background', 'url("../img/netflix_bg.jpg") no-repeat center / 1920px 937px');
                $('.home .project-shadow').css({
                    background: '#000'
                });
                $('.home .title').html('NETFLIX');
            } else {
                $('.home .project').css('background', 'url("../img/bdo_bg.jpg") no-repeat center / 1920px 937px');
                $('.home .project-shadow').css({
                    background: 'url("../img/bdo_shadow_bg.jpg") no-repeat center / 1920px 937px'
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
            $('.project-shadow.first').css({
                transform: 'translate(' + e.clientX * -0.01 + 'px,' + e.clientY * -0.02 + 'px)'
            })
        }, 100)

        setTimeout(function () {
            $('.project-shadow.second').css({
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
        $('.home > .container .project').css({
            transform: 'translate(0,0)',
            transition: '.5s'
        })
        $('.home > .container .project-shadow.first').css({
            transform: 'translate(0,0)',
            transition: '.5s'
        })
        $('.home > .container .project-shadow.second').css({
            transform: 'translate(0,0)',
            transition: '.5s'
        })
        $('#detail-page').attr('style', 'opacity: 1; transform: scale(1);');
        $('.shadow-box').attr('style', 'transform: scale(1);');
        $('.shadow-box2').attr('style', '=transform: scale(1);');
        $('.footer').css('opacity', 0)
        $('.home .title').addClass('active');

        setTimeout(function () {
            $('.home .project').css('clip-path', 'circle(100%)');

            setTimeout(function () {
                $('.logo,.my-page').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                loading();
            }, 1000)
        }, 1000);
        $(window).off('mousemove', movingObject)
        $(window).off('wheel', wheelEvent)
        $('.home .title').off({
            'mouseenter': scaleUp,
            'mouseleave': removeScale
        })
    }

    function getData(){
        $.ajax({
            url: "js/detail-data.json",
            type: "GET",
            success: function (data) {
                var cognition = '', imgSrc = '', funcName = '', funcCont = '';
                if (pageIdx == 1) {
                    cognition = data.NETFLIX
                } else {
                    cognition = data.BLACK_DESERT
                }

                cognition.skills.forEach(function (el) {
                    $('.use-skill').append('<span>' + el + '</span>')
                })
                $('.period').append('<span>' + cognition.period + '</span>');
                $('.summary').append('<span>' + cognition.summary + '</span>');
                $('.right-cont').append('<p class="visit"><a href=' + cognition.address + '>VISIT SITE</a></p>');

                cognition.function.name.forEach(function (el, idx) {
                    $('.function').append('<div class="fun' + (idx + 1) + '"><p><strong>' + el + '</strong><span>' + cognition.function.content[idx] + '</p><div class="fun' + (idx + 1) + '-img"><img src="img/' + cognition.imgSrc[idx + 1] + '.jpg" alt="' + cognition.imgSrc[idx + 1] + '"</div></div>')
                })
                $('.nf-home').append('<img src="img/' + cognition.imgSrc[0] + '.jpg" alt="' + cognition.imgSrc[0] + '">');
                $('.next-project .project').css('background', 'url("' + cognition.nextProject.img + '") no-repeat center / 1920px 937px');
                $('.next-project .middle-content').append('<p class="title">' + cognition.nextProject.name + '</p>');

                container = $('.next-project .container');
                middleText = $('.next-project .middle-content');

                $(window).resize(function () {
                    domH = window.innerHeight;
                    $('.home .container .project').height(domH);
                    $('.next-project').height(domH);
                })

                $(window).on('scroll', fadeInOut);
                $('.next-project .middle-content').on('click',next);
            }
        });
    }

    function next(){
        var docBot = $(document).height() - window.innerHeight;
        window.scrollTo({top: docBot, behavior:'smooth'});
    }

    var pageDetail = '', domW = window.innerWidth, domH = window.innerHeight, prevPage = '', prevText = '';
    var container = $('.home > .container'), middleText = $('.home > .middle-content');
    function loading() {
        pageDetail = '';
        pageDetail = '<div class="scroll-down">';
        pageDetail += '<span class="scroll-text">Scroll Down</span><span class="scroll-img"/></div>';
        pageDetail += '<div class="info"><div class="left-cont"><p class="use-skill">';
        pageDetail += '<strong>활용 기술</strong></p><p class="period"><strong>제작 기간</strong></p></div>';
        pageDetail += '<div class="right-cont"><p class="summary"><strong>개요</strong></p><p class="visit"/></div></div>';
        pageDetail += '<div class="nf-home"></div><div class="function"><h1 class="f-title">Function</h1></div>'
        pageDetail += '<div class="next-project"><div class="container"><div class="project"></div></div><div class="shadow-box"><div class="project-shadow first"></div></div>'
        pageDetail += '<div class="shadow-box2"><div class="project-shadow second"></div></div><div class="middle-content"></div></div>'
        

        $('.home').html(container);
        // $('.home').append(container);
        $('.home > .container .project').append(middleText);
        if($('.home > .container .project .middle-content').hasClass('main-title') != true){
            $('.home > .container .project .middle-content').addClass('main-title');
            $('.home > .container .project .middle-content .title').attr('style','transform: rotate(0deg) translateY(0px); opacity: 0.9;')
        }
        $('.home').css('clip-path', 'none');
        $('.home').addClass('project-page');
        $('.home .container').css({
            transform: 'scale(1)',
            opacity: 1
        })
        $('.home > .container .project').height(domH);
        $('.home > .container').css('position', 'relative');
        $('.home > .container .project').css('transition', 'cubic-bezier(.46,.17,.15,.94) 1s');
        setTimeout(function () {
            $('.home').append(pageDetail);
            pageDetail = '';
            for (var i = 0; i < 4; i++) {
                $('.scroll-img').append('<span></span>');
            }
            if (pageIdx == 2) {
                $('.project-shadow').css('background', '#000');
            }
            $('.next-project').height(domH);

            getData();

            sdH = $('.scroll-down').height();
            setTimeout(function () {
                $('.home > .container .project').css({
                    transform: 'translateY(-' + sdH * 2 + 'px)'
                })
                setTimeout(function () {
                    $('.scroll-down').css({
                        opacity: 1,
                        transform: 'translate(-50%,-150%)'
                    });
                    setTimeout(function () {
                        $('.scroll-down').addClass('active');
                        $('body').css('overflow-y', 'auto')
                        // $('body').height('initial');
                    }, 500);
                }, 1000)
            }, 500)
        }, 500);
    }

    var inH = 0, scY = 0, blen=true;
    function fadeInOut(e) {
        inH = window.innerHeight, scY = window.pageYOffset;
        var nfHome = $('.nf-home'), fun1 = $('.fun1-img img'), fun2 = $('.fun2-img img'), fun3 = $('.fun3-img img');

        if (nfHome.offset().top - inH < scY) {
            nfHome.css({ opacity: 1 })
            $('.nf-home img').css('transform', 'scale(1)')
        }

        if (fun1.offset().top - inH - (fun1.height() * 0.2) < scY) {
            fun1.css({ opacity: 1, transform: 'scale(1)' })
        }

        if (fun2.offset().top - inH - (fun2.height() * 0.2) < scY) {
            fun2.css({ opacity: 1, transform: 'scale(1)' })
        }

        try {
            if (fun3.offset().top - inH - (fun3.height() * 0.2) < scY) {
                fun3.css({ opacity: 1, transform: 'scale(1)' })
            }
        } catch { }
        
            
            if (scY ==  $(document).height() - inH && blen) {
                blen=false;
                $('body').css('overflow-y', 'hidden');

                setTimeout(function () {
                    $('.next-project .title').addClass('active');

                    setTimeout(function () {
                        $('.next-project .container .project').css('clip-path', 'circle(100%)');

                        var nextPage = setTimeout(function () {
                            $(window).off('scroll', fadeInOut);

                            if (pageIdx == 1) { pageIdx = 2 } else { pageIdx = 1 };
                            loading();
                            
                            blen=true;
                        }, 1000);
                    }, 1000)
                }, 500)
            }
        


    }

    var introControl = '';
    function intro() {
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
                        $('.home').css({
                            'clip-path': 'circle(100% at 50% 50%)',
                            transition: '1s'
                        });

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
                            $('.home .title').on('click', changeDisplay);
                            sessionStorage.setItem('intro', false);

                            setTimeout(function () {
                                introControl = $('.intro').detach();
                            }, 500)
                        }, 1000)
                    }, 2500)

                }, 800)

            }, 800)

        }, 500)
    }

    if (sessionStorage.getItem('recognition') != 'true') {
        sessionStorage.setItem('intro', true)
    };
    if (sessionStorage.getItem('intro') == 'true') {
        intro();
    } else {
        introControl = $('.intro').detach();
        $('.home').css('clip-path', 'circle(100% at 50% 50%)');
        $('.home .container').css({
            transition: 0,
            transform: 'scale(1)',
            opacity: 1
        })
        $('.home .shadow-box').css({
            transform: 'scale(1)',
            opacity: 1
        })


        $('.home .shadow-box2').css({
            transform: 'scale(1)',
            opacity: 1
        })



        $('.home .title').css({
            transform: 'rotate(0deg) translateY(0)',
            opacity: .5
        })


        $('.top-cover').css({
            transition: 0,
            opacity: 1
        })
        $('.footer').css({
            transition: 0,
            opacity: 1
        })

        $(window).on('mousemove', movingObject);
        $(window).on('wheel', wheelEvent);
        $('.home .title').on({
            'mouseenter': scaleUp,
            'mouseleave': removeScale
        });
        $('.home .title').on('click', changeDisplay);
    }

    $(window).on('beforeunload', function () {
        sessionStorage.setItem('intro', false)
        sessionStorage.setItem('recognition', true);
    })
})