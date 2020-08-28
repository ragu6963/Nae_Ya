var ctxSc = document.getElementById('sun_chart').getContext('2d');
var scatterData = {
    datasets: [{
        borderColor: 'rgba(99,0,125, .2)',
        backgroundColor: 'red',
        label: '일조량별 한강 이용객수',
        data: [{
            x: 3.4,
            y: 3008543,
        }, {
            x: 4,
            y: 2908749,
        }, {
            x: 3.9,
            y: 4563720,
        }, {
            x: 4.7,
            y: 8242222,
        }, {
            x: 3.2,
            y: 6551307,
        }, {
            x: 6.7,
            y: 6084170,
        }, {
            x: 6.8,
            y: 6003831,
        }, {
            x: 7.1,
            y: 6298113,
        }, {
            x: 4.9,
            y: 6414526,
        }, {
            x: 3.3,
            y: 7437783,
        }, {
            x: 4.3,
            y: 4095622,
        }, {
            x: 3.4,
            y: 2876513,
        }, {
            x: 3.9,
            y: 2705168,
        }, {
            x: 4.5,
            y: 2781299,
        }, {
            x: 2.8,
            y: 4314813,
        }, {
            x: 5,
            y: 6213826,
        }, {
            x: 4.1,
            y: 7770685,
        }, {
            x: 5.6,
            y: 5371905,
        }, {
            x: 7,
            y: 6804488,
        }, {
            x: 5.6,
            y: 13203727,
        }, {
            x: 3.8,
            y: 8161326,
        }, {
            x: 2.8,
            y: 8699644,
        }, {
            x: 6.6,
            y: 1490229,
        }, {
            x: 4.1,
            y: 1074235,
        }, {
            x: 4,
            y: 3438959,
        }, {
            x: 3.7,
            y: 3442621,
        }, {
            x: 3.6,
            y: 5115738,
        }, {
            x: 4.8,
            y: 4747476,
        }, {
            x: 4.6,
            y: 7366536,
        }, {
            x: 5.3,
            y: 7848587,
        }, {
            x: 7.2,
            y: 8228965,
        }, {
            x: 4.6,
            y: 9415349,
        }, {
            x: 5.8,
            y: 7239130,
        }, {
            x: 5.3,
            y: 7948495,
        }, {
            x: 4.7,
            y: 2348018,
        }, {
            x: 4.7,
            y: 2438536,
        }, {
            x: 3.5,
            y: 3800036,
        }, {
            x: 2.8,
            y: 3777735,
        }, {
            x: 3.9,
            y: 5709099,
        }, {
            x: 4.4,
            y: 7837088,
        }, {
            x: 3.9,
            y: 8153353,
        }, {
            x: 4.7,
            y: 7290739,
        }, {
            x: 7.9,
            y: 7153941,
        }, {
            x: 7,
            y: 7842999,
        }, {
            x: 4.2,
            y: 8725489,
        }, {
            x: 4.5,
            y: 6899096,
        }, {
            x: 4.2,
            y: 4556537,
        }, {
            x: 3.9,
            y: 4008958,
        }, {
            x: 4.3,
            y: 3766842,
        }, {
            x: 3.9,
            y: 3508933,
        }, {
            x: 5.2,
            y: 4792541,
        }, {
            x: 4.7,
            y: 9514699,
        }, {
            x: 5.4,
            y: 6931330,
        }, {
            x: 5.9,
            y: 6783118,
        }, {
            x: 5.1,
            y: 6517501,
        }, {
            x: 5.8,
            y: 6780946,
        }, {
            x: 5.1,
            y: 6989508,
        }, {
            x: 3.7,
            y: 7428243,
        }, {
            x: 4,
            y: 4427552,
        }, {
            x: 3.8,
            y: 3535685,
        }, {
            x: 3.1,
            y: 3650518,
        }, {
            x: 4.8,
            y: 3492400,
        }, {
            x: 4.7,
            y: 4967892,
        }, {
            x: 4.9,
            y: 10823440,
        }, {
            x: 3.8,
            y: 7763028,
        }, {
            x: 5.4,
            y: 6819316,
        }, {
            x: 7.2,
            y: 5870990,
        }, {
            x: 5.6,
            y: 6774275,
        }, {
            x: 6.6,
            y: 6217109,
        }, {
            x: 4.2,
            y: 6915114,
        }, {
            x: 4.1,
            y: 3894836,
        }, {
            x: 4.4,
            y: 3346762,
        }]
    }]
}

var config1 = new Chart.Scatter(ctxSc, {
    data: scatterData,
    options: {
        title: {
            display: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'white',
                    beginAtZero: true
                }
            }],
            xAxes: [{

                ticks: {
                    fontColor: 'white',
                    beginAtZero: true
                }
            }]
        }
    }
});