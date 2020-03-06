const Chart = require('./chart');

class Chart1 extends Chart{
    setChart(){
        let d = this.data;
        let m = d[0]['course'];
        let dataset = [];
        dataset.push({});
        dataset[0]['course'] = d[0]['course'];
        dataset[0][d[0]['target']] = d[0]['course_point'];
        let j = 0;
        for(let i=1; i<100; i++){
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
        let TL = [], OT = [] ;
        for (let i of dataset){
            let j = i.course;
            TL.push(j);
            delete i.course;
            OT.push({xAxis: [{data: Object.keys(i)}],title: {text: j},series: [{data: Object.values(i)}]})
        }
        console.log(OT);
        console.log(TL);
        this.myChart.setOption(
            {
                baseOption: {
                    timeline: {
                        axisType: 'category',
                        show: true,
                        autoPlay: true,
                        playInterval: 2000,
                        data: TL
                    },
                    label: {
                        fontSize:8
                    },
                    grid: {},
                    xAxis: [{type: 'category'}],
                    yAxis: [{type:'value'}],
                    series: [
                        { // 系列一的一些其他配置
                            type: 'bar',
                        }
                    ]
                },
                options: OT
            }
        );
    }
}

module.exports = Chart1;