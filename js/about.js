$(function () {
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
                    /* suggestedMin: 0,
                    suggestedMax: 100, */
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
    })

    setTimeout(function(){
        $('.my-self').css('opacity',1)
        $('.skills').css('opacity',1)
    },1000)
})