<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    chartData: {
      type: Object,
      default () {
        return {
          xData: [],
          series: []
        }
      }
    },
    isxAxisChart: {
      type: Boolean,
      default: true // 默认的意思
    }
  },
  data () {
    return {
      hasxAxisData: {
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        gird: {
          left: '15%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#333'
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: ['#2ec7c9', '#b6a2de'],
        series: []
      },
      nohasxAxisData: {
        tooltip: {
          trigger: 'item'
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf'
        ],
        radius: '55%',
        series: []
      },
      echart: null
    }
  },
  methods: {
    initChart () {
      this.initChartData()
      // 设置echart的类型
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },

    // 根据是否有x轴做数据的处理
    initChartData () {
      if (this.isxAxisChart) {
        this.hasxAxisData.xAxis.data = this.chartData.xData
        this.hasxAxisData.series = this.chartData.series
      } else {
        this.nohasxAxisData.series = this.chartData.series
      }
    }
  },
  computed: {
    // 计算看是用那个data
    options () {
      return this.isxAxisChart ? this.hasxAxisData : this.nohasxAxisData
    }
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart()
      },
      deep: true // 重要，深度监听
    }
  }
}
</script>
