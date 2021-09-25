//
(function () {
    $('.tabs a').on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        $('.content').eq($(this).index()).show().siblings('.content').hide()
    })
    //
    //给marquee追加内容
    $('.marquee').each(function (i, ele) {
        var clonedata = $(ele).children().clone();
        $(ele).append(clonedata)

    })
})();
//饼形图模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    option = {
        radius: ['10%', '70%'],
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        series: [{
            label: {
                fontSize: 10
            },
            labelLine: {
                length: 6,
                length2: 8
            },
            name: '点位统计',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',

            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ]
        }]
    };
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
var item = {
    name: '',
    value: 1200,
    // 柱子颜色
    itemStyle: {
        color: '#254065'
    },
    // 鼠标经过柱子颜色
    emphasis: {
        itemStyle: {
            color: '#254065'
        }
    },
    // 工具提示隐藏
    tooltip: {
        extraCssText: 'opacity:0'
    },
};
//柱状图模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item',
        },
        grid: {
            top: '3%',
            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    // 不显示刻度
                    show: false,
                    alignWithLabel: false,
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }



        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

})();
// // 订单功能
(function () {
    var date = {
        day365: { orders: '20,301,987', amount: '99834' },
        day90: { orders: '301,987', amount: '9834' },
        day30: { orders: '1,987', amount: '3834' },
        day1: { orders: '987', amount: '834' }
    }


    $('.filter a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        // console.log(date.day365);
        // console.log($(this).attr('index'));
        var year = $(this).attr('index');
        var order = date[year];
        // console.log(order.orders);
        $('.order h4').eq(0).html(order.orders);
        $('.order h4').eq(1).html(order.amount);
    });
    //
    // var index = 0
    // var timer = setInterval(function () {
    //     index++
    //     if (index >= 4) {
    //         index = 0
    //     }

    //     $('.filter a').eq(index).click();
    // }, 1000)

})();
//折线图模块
(function () {
    //更换数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };


    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            type: 'category',
            boundaryGap: false,// 去除轴内间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']


        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }

        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                data: data.year[0],
                smooth: true,
            },

            {
                name: '实际销售额',
                type: 'line',
                data: data.year[1],
                smooth: true,
            },
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

    $('.sales').on('click', '.caption a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        //⭐点击后要重新給定时器指定索引号要-1
        index = $(this).index() - 1;
        //拿到a标签上定义好的flag值
        // console.log($(this).attr('flag'));
        //通过flag上取到的值来从data对象中获得相应的两条数据；
        // console.log(data[$(this).attr('flag')]);
        var change = data[$(this).attr('flag')];
        option.series[0].data = change[0];
        option.series[1].data = change[1];
        // 修改了option里面的选项需要重新调用它才可以生效。
        myChart.setOption(option);
    })
    //tab栏自动切换效果
    var index = 0
    var timer = setInterval(function () {
        index++;
        if (index >= 4) {
            index = 0
        }
        $('.sales a').eq(index).click()
    }, 1000);
    //关闭定时器
    $('.sales').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            index++;
            if (index >= 4) {
                index = 0
            }
            $('.sales a').eq(index).click()
        }, 1000);
    });

})();

//卫星图标模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    var dataBJ = [
        [90, 19, 56, 11, 34],

    ];

    var lineStyle = {

    };

    var option = {
        // backgroundColor: '#161627',

        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            center: ['50%', '50%'],
            // 外半径占据容器大小
            radius: '65%',
            shape: 'circle',
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
        },
        series: [
            {
                name: '北京',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                data: dataBJ,
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                }
            },

        ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

})();
//半圆模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));

    var option = {
        series: [
            {
                name: '销售进度',
                type: 'pie',
                radius: ['130%', '150%'],
                hoverOffset: 0,

                center: ['48%', '80%'],
                labelLine: {
                    show: false
                },
                //生长角度
                startAngle: 180,
                data: [
                    {
                        value: 150, itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    },
                    {
                        value: 50,
                        itemStyle: { color: '#12274d' }
                    },
                    { value: 200, itemStyle: { color: 'transparent' } },

                ]
            }
        ]
    };
    // 3. 把数据和配置给实例对象
    myChart.setOption(option);
})();

//各省销售模块
(function () {
    var hotData = [
        {
            city: '北京',  // 城市
            sales: '25, 179',  // 销售额
            flag: true, //  上升还是下降
            brands: [   //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ]
    //第二步：根据数据渲染各省热销 sup 模块内
    //删掉原先自带小li
    //遍历数据 $.each()
    //拼接字符串把数据渲染到 li 的span 里面
    //追加给.sup 盒子

    var supHTML = "";
    $.each(hotData, function (index, item) {
        // console.log(item);
        supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    $(".sup").html(supHTML);
    //第三步：当数据进入 tab 的时候
    //激活当前的tab样式，删除其他tab的样式
    //渲染各省热销 sub 模块 
    //注意鼠标进入tab， 只遍历 当前索引号对应的 城市对象里面的 brands 
    //拼接html格式字符串，进行渲染



    //渲染函数
    function up(that) {
        that.addClass('active').siblings().removeClass();
        var index = that.index();
        var subhtml = '';
        $.each(hotData[index].brands, function (i, ele) {
            subhtml += `<li><span>${ele.name}</span><span>${ele.num}<s class=${ele.flag ? "icon-up" : "icon-down"}></s></span></li>`
        });
        $('.sub').html(subhtml);
    };

    //经过显示功能
    $('.province .sup').on('mouseenter', 'li', function () {
        //⭐⭐bug
        //这里给fall重新定义索引号，原因是定时器在走时遵循的是fall的索引，当鼠标经过时，样式会到鼠标经过的索引号，这时如果移开鼠标会造成定时器索引号和我鼠标经过的索引号不一样情况，画面上会造成错乱。这时需要在鼠标经过这里提前给fall赋上经过的索引，让其统一
        fall = $(this).index()
        up($(this))
    });

    //自动播放功能
    var lis = $('.province .sup li');
    lis.eq(0).mouseenter();
    var fall = 0
    var timer = setInterval(function () {
        fall++;
        if (fall >= 5) {
            fall = 0
        }

        up(lis.eq(fall))
    }, 1000);

    //开启/关闭定时器功能
    $('.province .sup').hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(function () {
            fall++;
            if (fall >= 5) {
                fall = 0
            }
            up(lis.eq(fall))
        }, 1000);
    });
})();

