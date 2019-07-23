var powerDBData = [2710, 2710, 2777, 1238, 1235, 1511, 1529, 1638, 1648, 1241, 1241, 1240];
var costDBData = [284.44, 284.44, 316.69, 144.6, 149.32, 233.74, 245.82, 241.37, 266.19, 153.04, 160, 188.9];
var site = 'A0142'
var seriesData = [{name: site, data: powerDBData}]

client.get('http://localhost:3000/hydro', function(response) {
    //console.log(JSON.parse(response))
    responseArray = JSON.parse(response)

    var siteData = responseArray.find(object => object.eng === site);
    console.log(siteData)
    powerDBData = [siteData.Jan, siteData.Feb, siteData.Mar, siteData.Apr, siteData.May, siteData.June, siteData.July, siteData.Aug, siteData.Sept, siteData.Oct, siteData.Nov, siteData.Dec];
    console.log(powerDBData)
})

function search() {
    location.href = document.getElementById('searchInput').value;
    console.log(location.href)
}

var plotBandsData = checkChange(powerDBData, costDBData)

Highcharts.chart('powerContainer', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Power Consumption for Site ' + site + " in 2018"
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
        }
    },
    series: seriesData
});