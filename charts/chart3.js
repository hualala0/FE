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
    setData(data){
        let url1 = 'http://47.116.70.195/apis/specialties/软件工程/years/2010/targets/'+data;
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

module.exports = Chart3;