var myChart = echarts.init(document.getElementById('echarts-01'));
option = {
tooltip: {
  trigger: 'axis'
},
legend: {
  x: 'center',
  data:[]
},
radar: [
  {
      indicator: [
          {text: '弹唱', max: 100},
          {text: '左手', max: 100},
          {text: '简谱', max: 100},
          {text: '右手', max: 100}
      ],
      center: ['50%','50%'],
      radius: 80
  }
],
series: [
  {
      type: 'radar',
       tooltip: {
          trigger: 'item'
      },
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [
          {
              value: [50,50,0,0],
              name: '钢琴弹唱'
          }
      ]
  }
]
};
myChart.setOption(option);

$(window).resize(function(){
myChart.resize();
});