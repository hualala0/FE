const Chart = require('./chart');

class Chart1 extends Chart{
    setChart(){
        let that = this;
        this.myChart.setOption({
            title: {
                text: '班级达成度\n'
            },
            xAxis: {type:'category'},
            yAxis: {max:1},
            dataset: {source:that.data},
            series: [{
                type: 'bar'
            }]
        });
    }
}

module.exports = Chart1;