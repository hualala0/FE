const Chart = require('./chart');

class Chart4 extends Chart{
    setChart(){
        let that = this;
        this.myChart.setOption({
            title: {
                text: '年度课程指标点得分\n'
            },
            xAxis: {type:'category'},
            yAxis: {type:'value'},
            dataset: {source:that.data},
            series: [{
                type: 'line'
            }]
        });
    }
    setData(data, data2){
        let url1 = 'http://47.116.70.195/apis' + '/specialties/软件工程/targets/'+data2+'/courses/'+data;
        let that = this;
        let myAjax = new XMLHttpRequest();
        myAjax.onreadystatechange = function(){
            if (myAjax.readyState == 4 && myAjax.status == 200){
                that.data = JSON.parse(myAjax.responseText);
            }
        }
        myAjax.open("GET", url1, false);
        myAjax.send();
    }
}

module.exports = Chart4;