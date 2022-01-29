google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    let data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [50,7],[60,8],[70,8],[80,9],[90,9],[100,9],
      [110,10],[120,11],[130,14],[140,14],[150,15]
      ]);
    // Set Options
    let options = {
      title: 'House Prices vs Size',
      hAxis: {title: 'Square Meters'},
      vAxis: {title: 'Price in Millions'},
      legend: 'none'
    };
    // Draw Chart
    let chart = new google.visualization.BarChart(document.getElementById('chart-id'));
    chart.draw(data, options);
    let chart2 = new google.visualization.LineChart(document.getElementById('chart-id1'));
    chart2.draw(data, options);
    let chart3 = new google.visualization.ColumnChart(document.getElementById('chart-id2'));
    chart3.draw(data, options);
    let chart4 = new google.visualization.AreaChart(document.getElementById('chart-id3'));
    chart4.draw(data, options);
    let chart5 = new google.visualization.ScatterChart(document.getElementById('chart-id4'));
    chart5.draw(data, options);
    };