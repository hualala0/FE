const Chart = require('./chart');

class Chart3 extends Chart{
    setChart(){
        let data1 = [], data2 = [];
        for(let i=0; i<this.data.length; i++){
            data1.push({text:this.data[i]['course'],max:1});
            data2.push(this.data[i]['course_point']);
        }
        console.log(data1);
        console.log(data2);
        this.myChart.setOption({
            title: {
                text: '课程指标点得分\n'
            },
            radar: {
                indicator: data1,
                radius: 80,
                center: ['50%', '60%'],
                shape: 'circle',
                triggerEvent:true
            },
            series: [{
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                data: [{value:data2}]
            }]
        });
        //myChart.on('click', cb);
    }
    //cb(params){}
}

module.exports = Chart3;