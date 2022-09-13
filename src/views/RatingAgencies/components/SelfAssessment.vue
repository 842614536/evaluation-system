<template>
  <div>
    <div class="block-shadow pd20 tar">
      <div>
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
            width="240"
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
              width="120"
              align="center">
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="mt20 block-shadow pd20">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-for="(item, idx) in score" :title="item.title" :id="item.id" :name="idx + 1 + ''">
          <Table :dataList="item.dataList" :columns="columns"/>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="timeline-wrap">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in score"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="curIdx === index ? '#00AA91' : ''"
          :timestamp="activity.timestamp">
          <a @click="curIdx = index" :href="`#${activity.id}`">{{activity.title}}</a>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import score from '@/assets/constants/score'
import Table from '@/components/Table.vue'
export default {
  components: { Table },
  data () {
    return {
      score,
      curIdx: 0,
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
        }
      ],
      activeNames: ['1', '2', '3', '4', '5', '6', '7'],
      columns: [
        {
          label: '条文编号',
          prop: 'number',
          width: 100
        },
        {
          label: '条文内容',
          prop: 'content',
          width: 750
        },
        {
          label: '条文总分',
          prop: 'total',
          width: 100
        },
        {
          label: '自评得分',
          prop: 'self',
          width: 100
        }
      ]
    }
  },
  timer: null,
  mounted () {
    document.addEventListener('scroll', () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        try {
          let ids = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
          this.curIdx = ids.map((item, idx) => {
            return {
              top: document.getElementById(item).getBoundingClientRect().top,
              idx
            }
          }).filter(v => v.top > 0).sort((a, b) => a.top - b.top)[0].idx
          console.log(this.curIdx)
        } catch (error) {
          
        }
      }, 200)
    })
  }
}
</script>

<style lang="less" scoped>
.upload-demo{
  text-align: left;
}
.timeline-wrap{
  position: fixed;
  width: 200px;
  height: 500px;
  background: #fff;
  right: 20px;
  top: 194px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
