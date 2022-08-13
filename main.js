const chart = document.getElementById('chart').getContext('2d');

// create a new chart

var ctx = document.getElementById("chart");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: "BTC",
                data: [27497, 270497, 54832, 31975, 63978, 94787, 75074, 83337, 18094, 97489],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: "ETH",
                data: [74937,97837,28978,30749,47983,47898,93787,23349,64946,47898],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive:true,
        scales: {
            y: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    }
});
