var cardChart1 = new Chart($('#main-chart'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Opportunity (dalam juta)',
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(0, 123, 255, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            data: [-5, 59, 84, 84, 51, 55, 40]
        }]
    },
    options: {
        // maintainAspectRatio: false,
        // legend: {
        //     display: true
        // },
        // scales: {
        //     xAxes: [{
        //         gridLines: {
        //             color: 'transparent',
        //             zeroLineColor: 'transparent'
        //         },
        //         ticks: {
        //             fontSize: 2,
        //             fontColor: 'transparent'
        //         }
        //     }],
        //     yAxes: [{
        //         display: true,
        //         ticks: {
        //             display: true,
        //             min: 35,
        //             max: 89
        //         }
        //     }]
        // },
        // elements: {
        //     line: {
        //         borderWidth: 1
        //     },
        //     point: {
        //         radius: 4,
        //         hitRadius: 10,
        //         hoverRadius: 4
        //     }
        // }
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Revenue'
                },
                ticks: {
                    display: true,
                    min: -5,
                    max: 100
                }
            }]
        }
    }
});