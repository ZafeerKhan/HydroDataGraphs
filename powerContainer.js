function drawHydroGraph(seriesData, plotBandsData) {
    //var seriesData = [{name: site, data: powerChartData}]
    let site = seriesData.name
    Highcharts.chart('powerContainer', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Power Consumption in 2018'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            title: {
              text: 'Months'
            },
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'June',
                'July',
                'Aug',
                'Sept',
                'Oct',
                'Nov',
                'Dec'
            ]
            ,
            plotBands: plotBandsData
        },
        yAxis: {
            title: {
                text: 'Power Consumption (kWh)'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' kWh'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            },
            series: {
                connectNulls: true
            }
        },
        series: seriesData
    });
}


