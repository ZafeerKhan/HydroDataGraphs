var allHydroData;
var allCostData;
var allSiteNames = [];

var powerArr = [];
var costArr = [];

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();

client.get('http://localhost:3000/hydro', function(response) {
    responseArray = JSON.parse(response)
    allHydroData = responseArray;

    for (let i = 0; i < allHydroData.length; i++) {
        allSiteNames.push(allHydroData[i].eng)
    }
    console.log("Done fetching hydro data");
    console.log(allSiteNames);

    startAutocomplete();
})

client.get('http://localhost:3000/cost', function(response) {
    responseArray = JSON.parse(response)
    allCostData = responseArray;
    console.log("Done fetching cost data")
})



function searchSite() {
    let input = document.getElementById('searchSites');
    //console.log(input);
    let site = input.value;
    console.log(site)
    let powerDBData = allHydroData.find(object => object.eng === site);
    let costDBData = allCostData.find(object => object.eng === site);

    let powerChartData = [
        powerDBData.Jan,
        powerDBData.Feb,
        powerDBData.Mar,
        powerDBData.Apr,
        powerDBData.May,
        powerDBData.June,
        powerDBData.July,
        powerDBData.Aug,
        powerDBData.Sept,
        powerDBData.Oct,
        powerDBData.Nov,
        powerDBData.Dec
    ];

    let costChartData = [
        costDBData.Jan,
        costDBData.Feb,
        costDBData.Mar,
        costDBData.Apr,
        costDBData.May,
        costDBData.June,
        costDBData.July,
        costDBData.Aug,
        costDBData.Sept,
        costDBData.Oct,
        costDBData.Nov,
        costDBData.Dec
    ];

    let plotBandsData = checkChange(powerChartData, costChartData)

    powerArr = [{name: site, data: powerChartData}]
    costArr = [{name: site, data: costChartData}]

    drawHydroGraph(powerArr, plotBandsData);
    drawCostGraph(costArr, plotBandsData);
}

function addSite() {
    var input = document.getElementById('searchSites');
    var site = input.value;
    var powerDBData = allHydroData.find(object => object.eng === site);
    var costDBData = allCostData.find(object => object.eng === site);

    let powerChartData = [
        powerDBData.Jan,
        powerDBData.Feb,
        powerDBData.Mar,
        powerDBData.Apr,
        powerDBData.May,
        powerDBData.June,
        powerDBData.July,
        powerDBData.Aug,
        powerDBData.Sept,
        powerDBData.Oct,
        powerDBData.Nov,
        powerDBData.Dec
    ];

    let costChartData = [
        costDBData.Jan,
        costDBData.Feb,
        costDBData.Mar,
        costDBData.Apr,
        costDBData.May,
        costDBData.June,
        costDBData.July,
        costDBData.Aug,
        costDBData.Sept,
        costDBData.Oct,
        costDBData.Nov,
        costDBData.Dec
    ];

    let plotBandsData = null

    powerArr.push({name: site, data: powerChartData});
    costArr.push({name: site, data: costChartData})

    drawHydroGraph(powerArr, plotBandsData);
    drawCostGraph(costArr, plotBandsData);
}