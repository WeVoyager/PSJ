$(function () {
    var about = '';
    about += '<div class="introduce">';
    about += '<div class="cont">';
    about += '<div class="my-self">';
    // about += '<h1>안녕하세요, 프론트엔드 개발자 박성준입니다.</h1>';
    about += '<div class="profile"></div><p class="name">박성준 / 1999.01.21</p>'
    about += '<p class="my-skills"><span>기본적이고 필수적인 태그들의 기능과 속성들을 정확히 알고 마크업, 페이지 콘텐츠의 구조화 등을 수월히 할 수 있습니다.</span>'
    about += '<span>표현영역에서 css를 제대로 구현하여 반응형 페이지를 수월히 만들 수 있습니다. 콘텐츠 페이지의 각종 스타일링, 폼 요소 작성, 텍스트 스타일링, 박스 스타일링을 수월하게 할 수 있습니다.</span>'
    about += '<span>텝 베이직, 아코디언, 슬라이드 화면 구현, 모달 팝업, 네비게이션 항목 구성을 할 수 있습니다. jQuery문법과 혼합하여 동적 기능 구현을 할 수 있습니다.</span>' 
    about += '<span>jQuery 라이브러리를 사용하여 각종 이벤트를 메서드 체인 형식으로 동적 화면 구현하는데 사용할 수 있습니다.</span>'
    about += '<span>todoList, 회원인증 API, SPA을 구현할 수 있고 원리를 잘 이해하고 있습니다.</span></p><p class="contact"><span>Contact Number : 010 4878 1520</span><span>E-mail : wiop05114@gmail.com</span></p></div>'
    about += '<div class="chart">';
    about += '<canvas class="skills" id="skills" width="500" height="500"></canvas></div></div></div>';



    $('.my-page').on('click', About);

    function About() {
        $('.my-page').off('click', About)
        if ($('.my-page').text() == 'About') {
            aboutPage();
            history.pushState({ page: 'about' }, '', 'about');
        } else {
            back();
            history.pushState(null, '', 'index.html')
        }

        setTimeout(function () {
            $('.my-page').on('click', About);
        }, 1500);
    }

    function visible() {
        var ctx = document.getElementById('skills').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'radar',
            data: {
                datasets: [{
                    data: [80, 70, 40, 60, 70],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.3)',

                    ],
                }],
                labels: ["HTML / CSS", "Javascript", "React", "SCSS", "jQuery"],
            },
            options: {
                responsive: false,
                // maintainAspectRatio: true,
                scale: {
                    ticks: {
                        maxTicksLimit: 10,
                        backdropColor: 'rgba(0,0,0,0)',
                        fontColor: 'rgba(255,255,255,0.3)',
                        z: 0,
                        max: 100,
                        min: 0,
                        stepsize: 10,
                        fontFamily: 'MapoDPPA'
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.3)'
                    },
                    pointLabels: {
                        fontFamily: 'MapoDPPA',
                        fontSize: 14,
                        fontColor: 'rgba(255,255,255,0.5)'
                    },
                },
                legend: {
                    display: false
                }
            }
        });

        setTimeout(function () {
            $('.my-self').css('opacity', 1)
            $('.skills').css('opacity', 1)
        }, 300)
    }

    function aboutPage() {
        $('body').css('overflow', 'hidden');
        $('.about').css('transition', '1s');
        setTimeout(function () {
            $('.about').addClass('active');
            setTimeout(function () {
                $('.about').attr('style', 'width:100%; height:100%; border-radius: 0px;')
                $('.about').html(about);
                visible();
            }, 500)
        }, 500)
        $('.my-page').text('Project');
        $('.my-page').addClass('Project');
    }

    function back() {
        $('.my-self').css('opacity', 0);
        $('.skills').css('opacity', 0);
        setTimeout(function () {
            $('.about').removeAttr('style');
            $('.my-page').removeClass('Project');
            $('.my-page').text('About');
        }, 300)
        setTimeout(function () {
            $('.about').html('');
            $('.about').attr('style', 'transition:1s');
            $('.about').removeClass('active');
        }, 500);

        if($('.home').hasClass('project-page')){
            $('body').css('overflow-y','auto');
        }
    }

    $(window).on('popstate', function () {
        if (history.state == null) {
            back();
        } else if (history.state.page == 'about') {
            aboutPage();
        }
    });

    var check = sessionStorage.getItem('intro');

    if ($('.top-cover').hasClass('mark')) {
        sessionStorage.setItem('intro', 'true');
    }
})