import Mock from 'mockjs'

const List = []
export default {
  getData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅猪: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 2000,
      data: {
        // 饼图
        vedioData: [
          {
            name: '小米',
            value: 2999
          },
          {
            name: '苹果',
            value: 5999
          },
          {
            name: 'oppo',
            value: 1999
          },
          {
            name: 'vivo',
            value: 2500
          },
          {
            name: '魅猪',
            value: 3999
          },
          {
            name: '三星',
            value: 4999
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 80,
            active: 1000
          },
          {
            date: '周六',
            new: 100,
            active: 1500
          },
          {
            date: '周日',
            new: 180,
            active: 1900
          }
        ],
        // 折线图
        orderData: {
          date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
          data: List
        },

        tableData: [{
          course: 'Java',
          today_buy: '124.9',
          month_buy: '4539.9',
          sum: 995
        }, {
          course: 'C++',
          today_buy: '124.9',
          month_buy: '4539.9',
          sum: 995
        }, {
          course: '小程序入门开发与设计',
          today_buy: '124.9',
          month_buy: '4539.9',
          sum: 995
        }, {
          course: 'JavaScript',
          today_buy: '124.9',
          month_buy: '4539.9',
          sum: 995
        }, {
          course: 'BootStrap',
          today_buy: '124.9',
          month_buy: '4539.9',
          sum: 100
        }],
        user: [
          { id: 1, username: 'admin', password: '111' },
          { id: 2, username: 'normal', password: '222' },
          { id: 3, username: 'wsy', password: '123' },
          { id: 4, username: 'whm', password: '234' }
        ]
      }
    }
  }
}
