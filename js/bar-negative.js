//app.title = '正负条形图'; 每日问题、隐患 新增 消除 总量 超期未整改
var barNeg = echarts.init(document.getElementById('barNeg'),'dark');
optionbarNeg = {
    backgroundColor: '#034769',
    title : {
        text: '发电企业隐患情况总览'
    },    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['今日新增', '今日消除', '超期未整改']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['台州厂','温二厂','温州厂','乌沙山','萧山厂','玉环厂','镇海厂','舟山厂','衢化厂','半燃厂','德能厂','华舜厂','蓝天厂','龙湾厂','黄水厂','紧水厂','石水厂']
        }
    ],
    series : [
        // {
        //     name:'隐患总数',
        //     type:'bar',
        //     //stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             position: 'insideRight'
        //         }
        //     },
        //     data:[20, 10, 30, 10, 30, 20, 9]
        // },
        {
            name:'超期未整改',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:[2, 1, 3, 0, 3, 2, 0 ,2, 1, 3, 0, 3, 2, 0,2, 1, 3]
        },
        {
            name:'今日新增',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:[2, 1, 2, 0, 2, 2, 2, 2, 1, 3, 0, 3, 2, 0,8, 1, 3]
        },
        {
            name:'今日消除',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideleft'
                }
            },
            data:[-1, -2, -1, 0, -1, -2, -2,-2, -1, -3, 0, -3, -2, 0,-2, -1, -3]
        }
    ]
};
barNeg.setOption(optionbarNeg);