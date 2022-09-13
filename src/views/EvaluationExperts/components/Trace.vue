<template>
  <div class="wrap">
    <div class="left">
      <div class="block-shadow issue-block-title">
        绿城大连深蓝中心
        <el-tag class="ml-default" size="small" type="success">住宅建筑</el-tag>
        <el-tag class="ml-default" size="small">2019 预评价</el-tag>
        <el-tag class="ml-default" size="small" type="danger">专家初审中</el-tag>
        <span style="margin-left: 440px"></span>
        <el-button size="small" type="primary">进入详情</el-button>
      </div>
      <div class="mt20 block-shadow">
        <el-table
          :data="dataList"
          style="width: 100%"
          max-height="1000">
          <el-table-column
            fixed
            prop="column"
            label=""
            width="80">
          </el-table-column>
          <el-table-column
            fixed
            prop="kongzhixiang"
            label="控制项"
            align="center"
            width="80">
            <el-table-column
              fixed
              prop="Q0"
              label="Q0"
              align="center"
              width="80">
            </el-table-column>
          </el-table-column>
          <el-table-column
            fixed
            prop="pingfenxiang"
            label="评分项"
            width="550"
            align="center">
            <el-table-column
              fixed
              prop="Q1"
              label="安全耐久,Q1"
              width="110"
              align="center">
            </el-table-column>
            <el-table-column
              fixed
              prop="Q2"
              label="健康舒适,Q2"
              width="110"
              align="center">
            </el-table-column>
            <el-table-column
              fixed
              prop="Q3"
              label="生活便利,Q3"
              width="110"
              align="center">
            </el-table-column>
            <el-table-column
              fixed
              prop="Q4"
              label="资源节约,Q4"
              width="110">
            </el-table-column>
            <el-table-column
              fixed
              prop="Q5"
              label="环境宜居,Q5"
              width="110"
              align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column
            fixed
            prop="jiafenxiang"
            label="加分项"
            align="center">
            <el-table-column
              fixed
              prop="Qa"
              label="提高与创新,Qa"
              width="120"
              align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column
            fixed
            prop="zongdefen"
            label="总得分"
            width="200"
            align="center">
            <el-table-column
              fixed
              prop="Q"
              label="Q"
              align="center">
            </el-table-column>
            <el-table-column
              fixed
              prop="dengji"
              label="等级"
              align="center">
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
      <div class="mt20 block-shadow pd20">
        <el-input v-model="searchInput" size="small" class="input" suffix-icon="el-icon-search" placeholder="请输入内容"></el-input>
        <el-tabs v-model="activeName">
          <el-tab-pane label="形式审查" name="first">
            <Table :columns="columns1" :dataList="dataList1" :isShowPagination="false">
              <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                  <el-button size="mini" type="primary">查看</el-button>
                  <el-button size="mini" type="primary">受理</el-button>
                  <el-button size="mini" type="danger">驳回</el-button>
                </template>
              </el-table-column>
            </Table>
          </el-tab-pane>
          <el-tab-pane label="专家评审" name="second">
            <Table :columns="columns2" :dataList="dataList2" :isShowPagination="false">
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button size="mini" type="primary">查看</el-button>
                </template>
              </el-table-column>
            </Table>
          </el-tab-pane>
        </el-tabs>
        <br>
      </div>
    </div>
    <div class="right block-shadow">
        <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      searchInput: '',
      activeName: 'second',
      activities: [
        {
          content: '2022-09-01 专家初审中',
          timestamp: '专家已分配完成，进入专家评审开始初审',
          color: '#00AA91'
        },
        {
          content: '2022-09-01 分配初审',
          timestamp: '评审专家形式审查通过，等待评价机构分配专业专家',
          color: '#00AA91'
        },
        {
          content: '2022-09-01 形式审查中',
          timestamp: '项目已提交，请进入项目填报查看并下载详细资料',
          color: '#00AA91'
        },
        {
          content: '2022-09-01 未提交',
          timestamp: '项目创建成功，等待提交',
          color: '#00AA91'
        },
        {}
      ],
      dataList: [
        {
          column: '理论满分',
          Q0: '400',
          Q1: '100',
          Q2: '100',
          Q3: '70',
          Q4: '200',
          Q5: '100',
          Qa: '100',
          Q: '-',
          dengji: '-'
        },
        {
          column: '自评得分',
          Q0: '400',
          Q1: '52',
          Q2: '71',
          Q3: '47',
          Q4: '109',
          Q5: '50',
          Qa: '0',
          Q: '73',
          dengji: '二星级'
        },
        {
          column: '评审得分'
        }
      ],
      columns1: [
        {
          label: '审核人',
          prop: 'name'
        },
        {
          label: '审查意见',
          prop: 'opinion'
        },
        {
          label: '执行结果',
          prop: 'result'
        }
      ],
      dataList1: [
        {
          name: '住建部01',
        }
      ],
      columns2: [
        {
          label: '评审阶段',
          prop: 'stage'
        },
        {
          label: '评审结果',
          prop: 'result'
        },
        {
          label: '审核人',
          prop: 'name'
        },
        {
          label: '评审进度',
          prop: 'progress',
          width: 300
        },
        {
          label: '开始时间',
          prop: 'time',
          width: 200
        }
      ],
      dataList2: [
        {
          stage: '初审',
          progress: '条文完成 0 / 共 111 条，专业完成 0 / 共 7 类',
          time: '2022-10-01 12:00'
        }
      ]
    }
  },
  methods: {
    setTraceActive (activeName) {
      this.activeName = activeName
    },
    review () {
      this.$router.push({
        path: '/login',
        query: {
          from: 'rating'
        }
      })
    }
  }
}
</script>

<style style="less" scoped>
.wrap{
  display: flex;
}
.left{
  display: inline-block;
  width: 1000px;
}
.right{
  display: inline-block;
  width: 180px;
  margin-left: 20px;
  padding: 40px 0px 0 20px;
}
.input{
  width: 200px;
  transform: translate(380px, 30px);
  z-index: 99;
}
</style>