var powerDBData = [2710, 2710, 2777, 1238, 1235, 1511, 1529, 1638, 1648, 1241, 1241, 1240];
var costDBData = [284.44, 284.44, 316.69, 144.6, 149.32, 233.74, 245.82, 241.37, 266.19, 153.04, 160, 188.9];
var site = 'A0142';
var seriesData = [{name: site, data: costDBData}]

var plotBandsData = checkChange(powerDBData, costDBData)


Highcharts.chart('costContainer', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Cost for Site ' + site + " in 2018"
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
            text: 'Cost ($)'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' $'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: seriesData
});