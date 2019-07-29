function checkChange(powerData, costData) {
    let pwrDeltaList = [];
    let costDeltaList = [];
    let returnList = [];
    for (let i = 1; i < powerData.length; i++) {
        let pwrDelta = ((powerData[i] - powerData[i - 1]) / powerData[i - 1]) * 100;
        let costDelta = ((costData[i] - costData[i - 1]) / costData[i - 1]) * 100;

        pwrDeltaList.push(pwrDelta)
        costDeltaList.push(costDelta)
    }

    for (let i = 0; i < pwrDeltaList.length; i++) {
        let change = pwrDeltaList[i] - costDeltaList[i];
        if (change < 0) change *= -1;
        if (change > 15) {
            returnList.push({
                from: i,
                to: i + 1,
                color: 'rgba(255, 0, 0, .2)'
            })
        }
    }

    return returnList;
}