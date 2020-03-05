const echarts = require('echarts');

class Chart{
    constructor(path, dom){
        this.url = 'http://47.116.70.195/apis' + path;
        this.myChart = echarts.init(document.getElementById(dom));
        let that = this;
        let myAjax = new XMLHttpRequest();
        myAjax.onreadystatechange = function(){
            if (myAjax.readyState == 4 && myAjax.status == 200){
                that.data = JSON.parse(myAjax.responseText);
            }
        }
        myAjax.open("GET", this.url, false);
        myAjax.send();
        console.log(this.data);
    }
    changeApi(url){
        let that = this;
        let myAjax = new XMLHttpRequest();
        myAjax.onreadystatechange = function(){
            if (myAjax.readyState == 4 && myAjax.status == 200){
                that.data = JSON.parse(myAjax.responseText);
            }
        }
        myAjax.open("GET", url, false);
        myAjax.send();
    }
    //get data(){return this.data;}
    //set data(data){this.data = data;}
    setChart(){}
}

module.exports = Chart;