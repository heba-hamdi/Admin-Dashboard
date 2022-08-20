
let ctx = document.getElementById("chart");

// create a new chart
let myChart = new Chart(ctx, {
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
        },
    }
});

// show or hide sidebar
const menuBtn= document.querySelector('#menu-btn');
const closeBtn= document.querySelector('#close-btn');
const sideBar= document.querySelector('aside');

menuBtn.addEventListener('click', ()=>{
    sideBar.style.display="block";
})
closeBtn.addEventListener('click', ()=>{
    sideBar.style.display="none";
})

//change theme
const themeBtn= document.querySelector('.theme-btn');

themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
})

themeBtn.querySelector('span:first-child').classList.toggle('active');
themeBtn.querySelector('span:last-child').classList.toggle('active');
