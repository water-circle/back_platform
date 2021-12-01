<template>
  <div class="main">
    <el-row :getter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="top">
            <img :src="userImg" alt="" />
            <div class="userinfo">
              <p class="user_title">Admin</p>
              <p class="user_text">超级管理员</p>
            </div>
          </div>
          <div class="bottom">
            <div class="time">
              <div class="title">上次登录时间：</div>
              <div class="title">上次登录地点：</div>
            </div>
            <div class="location">
              <div class="value">2021-11-11</div>
              <div class="value">广东广州</div>
            </div>
            <!-- <p>上次登录地点:<span>广州</span></p> -->
          </div>
        </el-card>
        <el-card
          shadow="hover"
          style="margin-top: 20px; overflow: auto; height: 470px"
        >
          <el-table :data="tableData" style="width: 100%">
            <!-- prop用于对应标题和内容，index拿到的是tableLabel的键，item拿到的是tableLabel的值，也就是说tableData的键要与tableLabel的键一样 -->
            <el-table-column
              show-overflow-tooltip
              v-for="(item, index) in tableLabel"
              :key="index"
              :prop="index"
              :label="item"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="cards">
          <el-card
            v-for="(item, index) in cardData"
            :key="index"
            class="the_el-card"
            :body-style="{ 'display':'flex', padding: 0 }"
          >
            <div
              style="width: 35%; height: 100%"
              :style="{ background: item.color }"
            >
              <i class="icon" :class="'el-icon-' + item.icon"></i>
            </div>
            <!-- <img :src="item.image" alt=""> -->
            <div class="detail" style="width: 65%">
              <p class="num">{{ item.money }}</p>
              <p class="name">{{ item.title }}</p>
            </div>
          </el-card>
        </div>
        <el-card class="chart" shadow="hover">
          <echart
            :chartData="echartData.order"
            style="height: 280px"
            id="chart"
          ></echart>
        </el-card>
        <div class="two_chart">
          <el-card shadow="hover">
            <echart
              :chartData="echartData.user"
              style="height: 240px"
              id="chart"
            ></echart>
          </el-card>
          <el-card shadow="hover">
            <echart
              :chartData="echartData.vedio"
              style="height: 240px"
              :isxAxisChart="false"
              id="chart"
            ></echart>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getHome } from '../../api/data'
// import * as echarts from 'echarts'
import Echart from '@/components/EChart.vue'
export default {
  components: {
    Echart
  },
  data () {
    return {
      userImg: require('../../assets/defaul.jpg'),
      card_img: require('../../assets/user1.png'),
      tableData: [
        // {
        //   course: 'Java',
        //   today_buy: '124.9',
        //   month_buy: '4539.9',
        //   sum: 995
        // }, {
        //   course: 'C++',
        //   today_buy: '124.9',
        //   month_buy: '4539.9',
        //   sum: 995
        // }, {
        //   course: '小程序开发与设计',
        //   today_buy: '124.9',
        //   month_buy: '4539.9',
        //   sum: 995
        // }, {
        //   course: 'JavaScript',
        //   today_buy: '124.9',
        //   month_buy: '4539.9',
        //   sum: 995
        // }, {
        //   course: 'BootStrap',
        //   today_buy: '124.9',
        //   month_buy: '4539.9',
        //   sum: 100
        // }
      ],
      // 名称要相同，如上面的是course，下面也要是course
      tableLabel: {
        course: '课程',
        today_buy: '本日购买',
        month_buy: '本月购买',
        sum: '总量'
      },
      cardData: [
        { title: '今日支付订单', icon: 's-ticket', money: '￥1234', color: '#29bfc1' },
        { title: '今日发货订单', icon: 'circle-check', money: '￥1234', color: '#ffb075' },
        { title: '今日收藏订单', icon: 'star-off', money: '￥1234', color: '#4ea8ec' },
        { title: '今日未支付订单', icon: 's-help', money: '￥1234', color: '#29bfc1' },
        { title: '今日未发货订单', icon: 'picture', money: '￥1234', color: '#ffb075' },
        { title: '今日未收藏订单', icon: 'picture-outline-round', money: '￥1234', color: '#4ea8ec' }
      ],
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        vedio: {
          series: []
        }
      }
    }
  },
  methods: {
    getTable () {
      getHome().then((res) => {
        console.log(res)
        this.tableData = res.data.tableData

        // 折线图的实现
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        console.log('--------', this.echartData.order.xData)
        const keyArray = Object.keys(order.data[0])
        keyArray.forEach((key) => {
          this.echartData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: 'line'
          })
        })

        // 柱状图的实现
        this.echartData.user.xData = res.data.userData.map((item) => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: res.data.userData.map((item) => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: res.data.userData.map((item) => item.active),
          type: 'bar'
        })

        // 饼图的实现
        this.echartData.vedio.series.push({
          name: '手机品牌',
          data: res.data.vedioData,
          type: 'pie'
        })
      })
    },
    drawPid (id) {
      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById(id));
      // 使用刚指定的配置项和数据显示图表。
      // myChart.setOption(this.echartData.order);
    },
    canvas () {
      const node = document.getElementById('chart')
      console.log(node)
      node.children[0].setAttribute('style', 'margin: 0 auto !important')
    }
  },
  watch: {

  },
  updated () {
    this.canvas()
  },
  mounted () {
    //   this.$http.get('/user?ID=12345')
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // this.canvas()
    // getMenu().then((res) => {
    //   console.log(res);
    // });
    this.getTable()
    // this.$nextTick(function () {
    //   this.drawPid("chart");
    // });
  }
}
</script>

<style lang="scss" scoped>
.main {
  line-height: 30px;
}
.top {
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .userinfo {
    display: flex;
    flex-direction: column;
    p {
      margin: 0px;
      padding: 0px;
      line-height: 28px;
      font-size: 14px;
    }
    .user_title {
      font-size: 30px;
      text-align: left;
    }
    .user_text {
      color: #999999;
      text-align: left;
      font-size: 15px;
    }
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding-bottom: 20px;
    margin-right: 40px;
  }
}
.bottom {
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .time,
  .location {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-around;
    text-align: left;
    .title {
      width: 150px;
      color: #999999;
      font-size: 16px;
      line-height: 28px;
      margin-right: 40px;
      text-align: left;
      // margin-left: 10%;
    }
    .value {
      display: inline-block;
      // margin-left: 100px;
      color: #666666;
      text-align: left;
    }
  }
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  padding: 0px;
  justify-content: space-between;
  .the_el-card {
    // 这里因为el-card默认是有1px的border的，所以减去的是66px而不是60px
    width: calc((100% - 66px) / 3);
    margin: 0px 0px 20px 20px;
  }
  .the_el-card {
    ::v-deep .el-card__body {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 108px;
      [class*="el-icon-"]::before {
        padding: 36px 0;
        display: block;
      }
      i {
        width: 40%;
        height: 100%;
        font-size: 40px;
        color: #fff;
      }
      .detail {
        .num {
          font-size: 35px;
          padding: 0;
          margin: 20px 0 10px 0;
        }
        .name {
          padding: 0;
          margin: 0 0 20px 0;
        }
      }
    }
  }
}
.chart,
.two_chart {
  height: 260px;
  margin-left: 20px;
}
.chart {
}
.two_chart {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  .el-card {
    width: 48%;
    // margin-right: 20px;
  }
}
</style>
