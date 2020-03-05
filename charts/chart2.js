const Chart = require('./chart');

class Chart1 extends Chart{
    setChart(){
        let d = this.data;
        /*let m = d[0]['course'];
        let dataset = [];
        dataset.push({});
        dataset[0]['course'] = d[0]['course'];
        dataset[0][d[0]['target']] = d[0]['course_point'];
        let j = 0;
        for(let i=1; i<d.length; i++){
            if(d[i]['course'] == m){
                dataset[j][d[i]['target']] = d[i]['course_point'];
            }
            else{
                m = d[i]['course'];
                dataset.push({});
                dataset[++j]['course'] = d[i]['course'];
                dataset[j][d[i]['target']] = d[i]['course_point'];
            }
        }
        let ser = [];
        for (let i in dataset){ser.push({type: 'bar'});}
        console.log(dataset);*/
        this.myChart.setOption({
            title: {
                text: '课程指标点得分\n'
            },
            xAxis: {type:'category'},
            yAxis: {max:1},
            dataset: {source:d},
            series: {
                type: 'bar',
                encode: {
                    x: 'course',
                    y: 'course_point'
                }
            }
        });
    }
}

module.exports = Chart1;