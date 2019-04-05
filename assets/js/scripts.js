var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery', 'Node.js'],
        datasets: [{
            label: '# of Votes',
            data: [10, 15, 12, 11, 12, 1],
            backgroundColor: [
                'rgba(226, 76, 38, 0.2)',
                'rgba(86, 60, 190, 0.3)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(241, 224, 90, 0.2)',
                'rgba(31, 255, 93, 0.2)'
            ],
            borderColor: [
                'rgba(226, 76, 38, 1)',
                'rgba(86, 60, 190, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(241, 224, 90, 1)',
                'rgba(31, 255, 93, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var label = data.labels[tooltipItem.index];
                    return label;
                },
                scales: {

                },
            }
        }
    }
});