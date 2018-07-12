//app.title = '正负条形图'; 每日问题、隐患 新增 消除 总量 超期未整改
var barNeggroup = echarts.init(document.getElementById('up2'),'dark');
optionbarNeggroup = {
    backgroundColor: '#034769',
    title : {
        text: '发电集团日报上报情况'
    },    
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data:['未报', '已报']
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
            data :  ['大唐', '华能', '浙能', '华润', '国电', '国华']
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
            name:'已报',
            type:'bar',
            stack: 'up',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data:[2, 1, 3, 6, 3, 2]
        },
        {
            name:'未报',
            type:'bar',
            stack: 'up',
            label: {
                normal: {
                    show: true,
                    position: 'insideleft'
                }
            },
            data:[-1, -2, -1, 0, -1, -2]
        }
    ]
};
barNeggroup.setOption(optionbarNeggroup);