//app.title = '嵌套环形图';
var peiNest = echarts.init(document.getElementById('pei-nest'),'dark');
optionPeiNest = {
    backgroundColor: '#034769',
    title : {
        text: '发电机组类型'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        top:'10%',
        data: ['水电','常规','抽水蓄能','潮汐','火电','燃煤','燃气','燃油','核电','风电','太阳能','其他']
    },

    series: [
        {
            name:'发电类型',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],
           center: ['40%', '50%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:679, name:'水电'},
                {value:1679, name:'火电'},
                {value:48, name:'核电'},
                {value:179, name:'风电'},
                {value:148, name:'太阳能'},
                {value:279, name:'其他'},

            ]
        },
        {
            name:'发电类型',
            type:'pie',
            radius: ['65%', '85%'],
            center: ['40%', '50%'],
            label: {
                normal: {
                   // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                   formatter: "{b}: {d}%",
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'常规'},
                {value:110, name:'抽水蓄能'},
                {value:234, name:'潮汐'},
                {value:135, name:'燃煤'},
                {value:1048, name:'燃气'},
                {value:496, name:'燃油'},
                {value:48, name:'核电'},
                {value:179, name:'风电'},
                {value:148, name:'太阳能'},
                {value:279, name:'其他'}
            ]
        }
    ]
};
peiNest.setOption(optionPeiNest);