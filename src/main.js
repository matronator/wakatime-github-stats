Chart.register(ChartDataLabels);

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'Time used in %',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        plugins: {
            datalabels: {
                display: 'auto',
                formatter: function(value, context) {
                    return context.chart.data.labels[context.dataIndex];
                },
                anchor: 'end',
                color: '#000',
                backgroundColor: '#ffffffaa',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#000',
                textStrokeColor: '#fff',
                textStrokeWidth: 1,
                font: {
                    size: 14,
                    weight: 'bold',
                }
            }
        }
    }
}

$.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@matronator/e82489b7-4184-4d5c-b677-482b9e79bd18.json',
    dataType: 'jsonp',
    success: function(response) {
        console.log(response.data);
        data.datasets[0].data = response.data.map((item) => item.percent);
        data.datasets[0].backgroundColor = response.data.map((item) => item.color);
        data.labels = response.data.map((item) => item.name);

        var myChart = new Chart(
            document.getElementById('chart'),
            config
        );
    },
});
