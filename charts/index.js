const Chart1 = require('./chart1');
const Chart2 = require('./chart2');
const Chart3 = require('./chart3');
const Chart4 = require('./chart4');


let chart1 = new Chart1('/specialties/软件工程/years/2010/classes', 'first');
chart1.setChart();
let chart2 = new Chart2('/specialties/软件工程/years/2010/targets', 'second');
chart2.setChart();
let data2 = chart2.data[0]['target'];
let chart3 = new Chart3('/specialties/软件工程/years/2010/targets/'+data2, 'third');
chart3.setChart();
let data3 = chart3.data[0]['course'];
let chart4 = new Chart4('/specialties/软件工程/targets/'+data2+'/courses/'+data3, 'forth');
chart4.setChart();
chart2.myChart.on('click',  function (params) {
    console.log(params);
    chart3.setData(params.name);
    console.log(chart3.data);
    chart3.setChart();
    //console.log(chart4.data);
    console.log(chart3.data[0]['course']);
    chart4.setData(chart3.data[0]['course'], params.name);
    data2 = params.name;
    console.log(chart4.data);
    chart4.setChart();
});
chart3.myChart.on('click',  function (params) {
    console.log(params);
    chart4.setData(params.name,data2);
    chart4.setChart();
});