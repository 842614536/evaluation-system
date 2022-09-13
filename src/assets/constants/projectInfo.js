
// {
//   type: '11111',
//   label: '111111',
//   prop: '111111',
// },
// explain: ''

// dateSingle
const basicInfo = [
  {
    type: 'text',
    label: '项目名称',
    prop: 'projectName',
    defaultValue: '项目名称',
    unit: ''
  },
  {
    type: 'cascader',
    label: '所在地区',
    prop: 'area',
    options: [
      {
        value: '辽宁省',
        label: '辽宁省',
        children: [
          {
            value: '大连市',
            label: '大连市',
          },
          {
            value: '沈阳市',
            label: '沈阳市',
          },
        ]
      }
    ],
    defaultValue: ['辽宁省', '大连市'],
    unit: ''
  },
  {
    type: 'text',
    label: '具体地址',
    prop: 'areaDetail',
    defaultValue: '辽宁省大连市',
    unit: ''
  },
  {
    type: 'select',
    label: '建筑类型',
    options: OPTIONS.jianzhuleixing,
    prop: 'architectureType',
    defaultValue: '公共建筑',
  },
  {
    type: 'select',
    label: '申报标识',
    prop: 'shenbaobiaoshi',
    options: OPTIONS.shenbaobiaoshi,
    defaultValue: '预评价',
    unit: ''
  },
  {
    type: 'select',
    label: '申报星级',
    options: OPTIONS.ranking,
    prop: 'shenbaoxingji',
    defaultValue: '★★'
  },
  {
    type: 'text',
    label: '楼栋数量',
    prop: 'loudongshuliang',
    defaultValue: '4',
    unit: ''
  },
  {
    type: 'text',
    label: '项目总用地面积',
    prop: 'yongdimianji',
    defaultValue: '38696.9',
    unit: 'm2'
  },
  {
    type: 'text',
    label: '项目总建筑面积',
    prop: 'zongjianzhumianji',
    defaultValue: '27866.69',
    unit: 'm2'
  },
  {
    type: 'text',
    label: '申报建筑面积',
    prop: 'shenbaojianzhumianji',
    defaultValue: '27866.69',
    unit: 'm2'
  },
  {
    type: 'text',
    label: '评价标准',
    prop: 'pingjiabiaozhun',
    options: OPTIONS.caiyongbiaozhun,
    defaultValue: '绿色建筑评价标准 2019',
    unit: ''
  },
  {
    type: 'dateSingle',
    label: '立项时间',
    prop: 'lixiangshijian',
    defaultValue: '2017-12-12'
  },
  {
    type: 'dateSingle',
    label: '图审时间',
    prop: 'tushenshijian',
    defaultValue: '2020/1/20',
    explain: '施工图通过审查时间早于开工时间'
  },
  {
    type: 'dateSingle',
    label: '开工时间',
    prop: 'kaigongshijian',
    defaultValue: '2020-4-2'
  },
  {
    type: 'dateSingle',
    label: '竣工时间',
    prop: 'jungongshijian',
    defaultValue: '2022-8-20'
  },
  {
    type: 'text',
    label: '土地使用证',
    prop: 'tudishiyongzheng',
    defaultValue: '选字第320623201900004号'
  },
  {
    type: 'text',
    label: '拥地规划许可证',
    prop: 'yongdiguihuaxvke',
    defaultValue: '/',
    unit: ''
  },
  {
    type: 'text',
    label: '工程规划许可证',
    prop: 'gongchengguihuaxvke',
    defaultValue: '建字第320623202000006号',
    unit: ''
  },
  {
    type: 'text',
    label: '施工许可证编号',
    prop: 'shigongxvkezhengno',
    defaultValue: '320623202004020101',
    unit: ''
  },
  {
    type: 'text',
    label: '竣工证书编号',
    prop: 'jvgongzhengshuno',
    defaultValue: '/',
    unit: ''
  },
  {
    type: 'select',
    label: '重大质量安全事故',
    options: OPTIONS.boolean,
    prop: 'zhongdazhilianganquanshigu',
    defaultValue: '否',
    unit: ''
  },
  {
    type: 'text',
    label: '评价机构',
    prop: 'pingjiajigou',
  }
]

// 关键评价指标
const evaluationIndex = [
  {
    type: 'text',
    label: '建筑运行碳排放强度',
    prop: '1',
    defaultValue: '/',
    unit: 'kgCO2/m2'
  },
  {
    type: 'text',
    label: '建筑建造阶段碳排放',
    prop: '2',
    defaultValue: '/',
    unit: 'kgCO2/m2'
  },
  {
    type: 'text',
    label: '建材生产及运输碳排放',
    prop: '3',
    defaultValue: '/',
    unit: 'kgCO2/m2'
  },
  {
    type: 'text',
    label: '全装修',
    prop: '4',
    defaultValue: '',
    unit: ''
  },
  {
    type: 'text',
    label: '容积率',
    prop: '5',
    defaultValue: '66.45',
    unit: '%'
  },
  {
    type: 'text',
    label: '绿地率',
    prop: '6',
    defaultValue: '35.1',
    unit: '%'
  },
  {
    type: 'text',
    label: '地下建筑面积',
    prop: '7',
    defaultValue: '2230㎡',
    unit: 'm2'
  },
  {
    type: 'text',
    label: '地下一层建筑面积与总用地面积比',
    prop: '8',
    defaultValue: '57.6%',
    unit: '%'
  },
  {
    type: 'text',
    label: '建筑总能耗',
    prop: '9',
    defaultValue: '936520.83',
    unit: 'GJ/a'
  },
  {
    type: 'text',
    label: '单位面积能耗',
    prop: '10',
    defaultValue: '9.31',
    unit: 'kWh/（m2·a）'
  },
  {
    type: 'text',
    label: '节能率',
    prop: '11',
    defaultValue: '65',
    unit: '%'
  },
  {
    type: 'text',
    label: '围护结构热工性能提高比例',
    prop: '12',
    defaultValue: '10',
    unit: '%'
  },
  {
    type: 'text',
    label: '暖空调负荷降低比例',
    prop: '13',
    defaultValue: '10',
    unit: '%'
  },
  {
    type: 'text',
    label: '严寒和寒冷地区住宅外窗传热系数降低比例',
    prop: '14',
    defaultValue: '/',
    unit: '%'
  },
  {
    type: 'text',
    label: '外窗气密、水密、抗风压性能',
    prop: '15',
    defaultValue: '',
    unit: ''
  },
  {
    type: 'text',
    label: '建筑能耗降低比例',
    prop: '16',
    defaultValue: '/',
    unit: '%'
  },
  {
    type: 'text',
    label: '内主要空气污染物浓度降低比例',
    prop: '17',
    defaultValue: '20',
    unit: '%'
  },
  {
    type: 'text',
    label: '建筑隔声性能',
    prop: '18',
    defaultValue: '',
    unit: 'dB'
  },
  {
    type: 'text',
    label: '室内PM2.5年均浓度',
    prop: '19',
    defaultValue: '/',
    unit: 'µg/m3'
  },
  {
    type: 'text',
    label: '室内PM10年均浓度',
    prop: '20',
    defaultValue: '/',
    unit: 'µg/m3'
  },
  {
    type: 'text',
    label: '选用绿色装饰装修材料数量',
    prop: '21',
    defaultValue: '5',
    unit: '类'
  },
  {
    type: 'text',
    label: '树调节遮阳设施的面积占外窗',
    prop: '22',
    defaultValue: '/',
    unit: '%'
  },
  {
    type: 'text',
    label: '透明部分比例',
    prop: '23',
    defaultValue: '/',
    unit: '%'
  },
  {
    type: 'text',
    label: '电动汽车充电桩比例',
    prop: '24',
    defaultValue: '10.87',
    unit: '%'
  },
  {
    type: 'text',
    label: '外健身场地与总用地面积比例',
    prop: '25',
    defaultValue: '21.41',
    unit: '%'
  },
  {
    type: 'text',
    label: '室内健身空问与地上建筑面积比例',
    prop: '26',
    defaultValue: '2.5',
    unit: '%'
  },
  {
    type: 'text',
    label: '装饰性构件造价比例',
    prop: '27',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '冷、热源机组能效提升幅度',
    prop: '28',
    defaultValue: '分体空调＞12%多联机＞16%',
    unit: '%'
  },
  {
    type: 'text',
    label: '可再生能源提供的热水量',
    prop: '29',
    defaultValue: '0',
    unit: 'm3/a'
  },
  {
    type: 'text',
    label: '建筑生活热水量',
    prop: '30',
    defaultValue: '/',
    unit: 'm3/a'
  },
  {
    type: 'text',
    label: '可再生能源提供的热水比例',
    prop: '31',
    defaultValue: '0',
    unit: 'm3/a'
  },
  {
    type: 'text',
    label: '项目总供冷供热量',
    prop: '32',
    defaultValue: '/',
    unit: 'GJ/a'
  },
  {
    type: 'text',
    label: '可再生能源提供的空调用冷量和热量',
    prop: '33',
    defaultValue: '0',
    unit: 'GJ/a'
  },
  {
    type: 'text',
    label: '可再生能源提供的空调用冷量和热量比例',
    prop: '34',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '可再生能源发电量',
    prop: '35',
    defaultValue: '0',
    unit: '万kWh/a'
  },
  {
    type: 'text',
    label: '建筑用电量',
    prop: '36',
    defaultValue: '/',
    unit: '万kWh/a'
  },
  {
    type: 'text',
    label: '可再生能源提供电量比例',
    prop: '37',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '建筑平均日用水量',
    prop: '38',
    defaultValue: '',
    unit: ''
  },
  {
    type: 'text',
    label: '用水总量',
    prop: '39',
    defaultValue: '/',
    unit: 'm3/a'
  },
  {
    type: 'text',
    label: '非传统水源用水量',
    prop: '40',
    defaultValue: '0',
    unit: 'm3/a'
  },
  {
    type: 'text',
    label: '非传统水源利用率',
    prop: '41',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '绿化灌溉、车库及道路冲洗、洗车用水非传统水源用水量比例',
    prop: '42',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '冲厕用水非传统水源用水量比例',
    prop: '43',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '冷却水补水非传统水源用水量比',
    prop: '44',
    defaultValue: '本项目无冷却水',
    unit: '%'
  },
  {
    type: 'text',
    label: '节水器具用水效率等级',
    prop: '45',
    defaultValue: '',
    unit: ''
  },
  {
    type: 'text',
    label: '400MPa级及以上高强度钢筋应用比例',
    prop: '46',
    defaultValue: '95.53',
    unit: '%'
  },
  {
    type: 'text',
    label: '不小于C50高强度混凝土应用比例',
    prop: '47',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: 'Q345及以上高强钢材用量比例',
    prop: '48',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '建筑材料总重量',
    prop: '49',
    defaultValue: '40499.71',
    unit: 't'
  },
  {
    type: 'text',
    label: '可再循环可再利用材料重量',
    prop: '50',
    defaultValue: '4496.63',
    unit: 't'
  },
  {
    type: 'text',
    label: '可再循环可再利用材料利用率',
    prop: '51',
    defaultValue: '11.1',
    unit: '%'
  },
  {
    type: 'text',
    label: '利废建材选用种类数及比例',
    prop: '52',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '工业化内装部品占比50%以上的部品种类数',
    prop: '53',
    defaultValue: '0',
    unit: '种'
  },
  {
    type: 'text',
    label: '绿色建材应用比例',
    prop: '54',
    defaultValue: '/',
    unit: '%'
  },
  {
    type: 'text',
    label: '场地年径流总量控制率',
    prop: '55',
    defaultValue: '55',
    unit: '%'
  },
  {
    type: 'text',
    label: '调蓄雨水功能面积占绿地面积比',
    prop: '56',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '透水铺装占硬质铺装面积比',
    prop: '57',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '场地遮阴面积比例',
    prop: '58',
    defaultValue: '0',
    unit: '%'
  },
  {
    type: 'text',
    label: '室内主要功能空间满足采光要求的面积比例',
    prop: '59',
    defaultValue: '（住宅建筑填写）',
    unit: '%'
  },
  {
    type: 'text',
    label: '通风开口面积与房间地板面积比例',
    prop: '60',
    defaultValue: '（住宅建筑填写）',
    unit: '%'
  },
  {
    type: 'text',
    label: '人均住宅用地面积',
    prop: '61',
    defaultValue: '（住宅建筑填写）',
    unit: 'm2/人'
  },
  {
    type: 'text',
    label: '人均集中绿地面积',
    prop: '62',
    defaultValue: '（住宅建筑填写）',
    unit: 'm2/人'
  },
  {
    type: 'text',
    label: '地下建筑面积与地上建筑面积比',
    prop: '63',
    defaultValue: '（住宅建筑填写）',
    unit: 'm2/人'
  }
]

const incrementalCost = [
  {
    type: 'text',
    label: '项目总投资',
    prop: '1',
    defaultValue: '14485.31',
    unit: '万元'
  },
  {
    type: 'text',
    label: '为实现绿色建筑而增加的初投资成本',
    prop: '2',
    defaultValue: '144.06',
    unit: '万元'
  },
  {
    type: 'text',
    label: '单位面积增量成本',
    prop: '3',
    defaultValue: '51.61',
    unit: '元/㎡'
  },
  {
    type: 'text',
    label: '绿色建筑可节约的运行费用',
    prop: '4',
    defaultValue: '200000',
    unit: '元/㎡'
  }
]






export {
  basicInfo,
  evaluationIndex, // 关键评价指标
  incrementalCost, // 增量成本
}


