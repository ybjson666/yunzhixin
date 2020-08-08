import React,{ Component }from 'react';
import echarts from 'echarts'
import './home.less'


export default class Home extends Component{


    componentDidMount=()=>{
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '近一月代付走势',left:'30%' },
            tooltip: {},
            grid:{
                width:"90%",
                left:0,
                top:100
            },
            xAxis: {
                data: ["08.01", "08.02", "08.03", "08.04", "08.05", "08.06","08.07","08.08","08.09","08.10"]
            },
            yAxis: {},
            series: [{
                name: '日期',
                type: 'line',
                smooth: true,
                symbol:"circle",
                symbolSize:6,
                areaStyle:{color:"#96dbcd"},
                lineStyle:{
                    color:"#2eb79c",
                },
                itemStyle:{
                    color:"#2eb79c"
                },
                data: [5, 20, 36, 10, 10, 20,8,9,15,13]
            }]
        });
    }

    render(){
        return(
            <div className="home-container">
                <div className="datas-block">
                    <div className="balance-item">
                        <p>账户余额</p>
                        <p>2584411.45</p>
                    </div>
                    <div className="charge-item">
                        <p>今日充值</p>
                        <p>200.00</p>
                    </div>
                    <div className="pay-item">
                        <p>今日代付</p>
                        <p>20015.00</p>
                    </div>
                </div>
                <div id="main" style={{height:400}}></div>
            </div>
        )
    }
}