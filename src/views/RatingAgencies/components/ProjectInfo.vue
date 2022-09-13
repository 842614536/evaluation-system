<template>
  <div>
    <el-collapse v-model="active">
      <el-collapse-item id="1" title="基本信息" name="1">
        <div style="padding-left: 60px">
          <Form :disabled="true" labelWidth="250px" :queryItems="queryItems1"/>
        </div>
        <div style="padding: 0 20px">
          <div class="mt20 block-shadow issue-block-title">
            建设单位
          </div>
          <br>
          <Table :columns="columns1" :dataList="dataList1" :isShowPagination="false" />
        </div>
        <div style="padding: 0 20px">
          <div class="mt20 block-shadow issue-block-title">
            设计单位
          </div>
          <br>
          <Table :columns="columns1" :dataList="dataList2" :isShowPagination="false" />
        </div>
        <div style="padding: 0 20px">
          <div class="mt20 block-shadow issue-block-title">
            施工单位
          </div>
          <br>
          <Table :columns="columns1" :dataList="[]" :isShowPagination="false" />
        </div>


        <div style="padding: 0 20px">
          <div class="mt20 block-shadow issue-block-title">
            物业管理单位
          </div>
          <br>
          <Table :columns="columns1" :dataList="[]" :isShowPagination="false" />
        </div>
        <div style="padding: 0 20px">
          <div class="mt20 block-shadow issue-block-title">
            咨询单位
          </div>
          <br>
          <Table :columns="columns1" :dataList="[]" :isShowPagination="false" />
        </div>
      </el-collapse-item>
      <el-collapse-item id="2" title="关键评价指标" name="2">
        <div style="padding-left: 60px">
          <Form :disabled="true" labelWidth="250px" :queryItems="queryItems2"/>
        </div>
      </el-collapse-item>
      <el-collapse-item id="3" title="增量成本" name="3">
        <div style="padding-left: 60px">
          <Form :disabled="true" labelWidth="250px" :queryItems="queryItems3"/>
        </div>
        <div style="padding: 0 20px">
          <el-table :data="zengliangchengbenList">
            <el-table-column
              prop="cuoshi"
              label="实现绿建采取的措施"
              width="360">
              <el-table-column
                prop="name"
                label="名称"
                width="120">
              </el-table-column>
              <el-table-column
                prop="price"
                label="单价"
                width="120">
              </el-table-column>
              <el-table-column
                prop="num"
                label="应用量"
                width="120">
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="biaozhuncuoshi"
              label="标准建筑采用的常规措施">
              <el-table-column
                prop="name1"
                label="名称"
                width="120">
              </el-table-column>
              <el-table-column
                prop="price1"
                label="单价"
                width="120">
              </el-table-column>
              <el-table-column
                prop="num1"
                label="应用量"
                width="120">
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="chengben"
              label="增量成本">
            </el-table-column>
            <el-table-column
              prop="beizhu"
              label="备注">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item id="4" title="工程概括" name="4">
        <div style="padding: 0 20px">
          <el-form label-width="150px">
            <el-form-item class="textarea-wrap" label="工程概括:">
              <el-input disabled type="textarea" v-model="textarea.a"/>
            </el-form-item>
            <el-form-item label="项目效果图:">
              <div class="tal" style="padding-left: 32px">
                <el-upload
                  action=""
                  disabled
                  list-type="picture-card"
                  :file-list="fileList"
                >
                  <i class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="tal" style="padding-left: 32px;color: #999">申报对象为部分时，应在整体中标示申报范围；请上传至多5张效果图，每张图片大小不超过500KB，支持.jpg/.png</div>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item id="5" title="主要技术措施" name="5">
        <div style="padding: 0 20px">
          <el-form label-width="150px">
            <el-form-item class="textarea-wrap" label="安全耐久:">
              <el-input disabled type="textarea" v-model="textarea.b"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="健康舒适:">
              <el-input disabled type="textarea" v-model="textarea.c"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="生活便利:">
              <el-input disabled type="textarea" v-model="textarea.d"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="资源节约:">
              <el-input disabled type="textarea" v-model="textarea.e"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="环境宜居:">
              <el-input disabled type="textarea" v-model="textarea.f"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="提高与创新:">
              <el-input disabled type="textarea" v-model="textarea.g"/>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item id="6" title="项目创新点、推广价值和综合效益（含碳减排效益）分析" name="6">
        <div style="padding: 0 20px">
          <el-form label-width="150px">
            <el-form-item class="textarea-wrap" label="项目创新点:">
              <el-input disabled type="textarea" v-model="textarea.h"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="项目推广价值:">
              <el-input disabled type="textarea" v-model="textarea.i"/>
            </el-form-item>
            <el-form-item class="textarea-wrap" label="综合效益分析:">
              <el-input disabled type="textarea" v-model="textarea.j"/>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item id="7" title="申报单位概况" name="7">
        <div style="padding: 0 20px">
          <el-form label-width="150px">
            <el-form-item class="textarea-wrap" label="申报单位概况:">
              <el-input disabled type="textarea" v-model="textarea.k"/>
            </el-form-item>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item id="8" title="项目主要参加人员" name="8">
        <div style="padding: 0 20px">
          <div class="mt20 block-shadow issue-block-title">
            项目主要参加人员
          </div>
          <br>
          <Table :columns="columns3" :dataList="canhuirenyuanList" :isShowPagination="false" />
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="timeline-wrap">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="curIdx === index ? '#00AA91' : ''"
          :size="activity.size"
          :timestamp="activity.timestamp">
          <a @click="curIdx = index" :href="`#${activity.id}`">{{activity.content}}</a>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import {
  basicInfo,
  evaluationIndex,
  incrementalCost
} from '@/assets/constants/projectInfo.js'
export default {
  data () {
    return {
      curIdx: 0,
      activities: [
        {
          content: '基本信息',
          id: '1'
        },
        {
          content: '关键评价指标',
          id: '2'
        },
        {
          content: '增量成本',
          id: '3'
        },
        {
          content: '工程概括',
          id: '4'
        },
        {
          content: '主要技术措施',
          id: '5'
        },
        {
          content: '项目创新点、推广价值和综合效益（含碳减排效益）分析',
          id: '6'
        },
        {
          content: '申报单位概况',
          id: '7'
        },
        {
          content: '项目主要参加人员',
          id: '8'
        }
      ],
      textarea: {
        a: `工程性质：小学用地（A33a）
工程投资：14485.31万元
用地面积：38696.9m2
建筑面积：27866.69m2，结构形式：桩基础+框架结构体系`,
        b: `4.1.1场地避开滑坡、泥石流等地质危险地段，易发生洪涝地区有可靠的防洪涝基础设施；场地无危险化学品、易燃易爆危险源的威胁，无电磁辐射、含氡土壤的危害。
4.1.2建筑结构满足承载力和建筑使用功能要求。建筑外墙、屋面、门窗、幕墙及外保温等围护结构满足安全、耐久和防护的要求。
4.1.3外遮阳、太阳能设施、空调室外机位、外墙花池等外部设施与建筑主体结构统一设计、施工，具备安装、检修与维护条件。
4.1.4建筑内部的非结构构件、设备及附属设施等连接牢固并能适应主体结构变形。
4.1.5建筑外门窗安装牢固，其抗风压性能和水密性能符合国家现行有关标准的规定。
4.1.6卫生间、浴室的地面设置防水层，墙面、顶棚设置防潮层。
4.1.7走廊、疏散通道等通行空间满足紧急疏散、应急救护等要求，且保持畅通。
4.1.8具有安全防护的警示和引导标识系统。
4.2.2采取措施提高阳台、外窗、窗台、防护栏杆等安全防护水平；建筑物出入口均设外墙饰面、门窗玻璃意外脱落的防护措施，并与人员通行区域的遮阳、遮风或挡雨措施结合。
4.2.3采用具有安全防护功能的玻璃；采用具备防夹功能的门窗。
4.2.4建筑出入口及平台、公共走廊、电梯门厅、厨房、浴室、卫生间等设置防滑措施，防滑等级不低于现行行业标准《建筑地面工程防滑技术规程》JGJ/T 331规定的Bd、BW级；建筑室内外活动场所采用防滑地面，防滑等级达到现行行业标准《建筑地面工程防滑技术规程》JGJ/T 331规定的Ad、AW级；建筑坡道、楼梯踏步防滑等级达到现行行业标准《建筑地面工程防滑技术规程》JGJ/T 331 规定的Ad、AW级或按水平地面等级提高一级，并采用防滑条等防滑构造技术措施。
4.2.5采取人车分流措施，且步行和自行车交通系统有充足照明。
4.2.7使用耐腐蚀、抗老化、耐久性能好的管材、管线、管件。
4.2.9采用耐久性好的外饰面材料；采用耐久性好的防水和密封材料；采用耐久性好、易维护的室内装饰装修材料。`,
        c: `5.1.1室内空气中的氨、甲醛、苯、总挥发性有机物、氡等污染物浓度符合现行国家标准《室内空气质量标准》GB/T 18883的有关规定。建筑室内和建筑主出入口处禁止吸烟，并在醒目位置设置禁烟标志。
5.1.2餐厅、卫生间、地下车库等区域设机械排风系统；防止厨房、卫生间的排气倒灌。
5.1.3生活饮用水水质满足现行国家标准《生活饮用水卫生标准》GB 5749的要求；未设置生活储水设施；使用构造内自带水封的便器，且其水封深度不小于50mm；非传统水源管道和设备设置明确、清晰的永久性标识。
5.1.4室内噪声级满足现行国家标准《民用建筑隔声设计规范》GB 50118中的低限要求；外墙、隔墙、楼板和门窗的隔声性能满足现行国家标准《民用建筑隔声设计规范》GB 50118中的低限要求。
5.1.5照明数量和质量符合现行国家标准《建筑照明设计标准》GB 50034的规定；人员长期停留的场所采用符合现行国家标准《灯和灯系统的光生物安全性》 GB/T 20145规定的无危险类照明产品；选用LED照明产品的光输出波形的波动深度满足现行国家标准《LED 室内照明应用技术要求》GB/T 31831的规定。
5.2.1氨、甲醛、苯、总挥发性有机物、氡等污染物浓度低于现行国家标准《室内空气质量标准》GB/T 18883规定限值的20%。
5.2.2选用的装饰装修材料满足国家现行绿色产品评价标准中对有害物质限量的要求的装饰装修材料达到5类以上。
5.2.3除生活饮用水供水系统外，未设置其他供水系统。
5.2.4未设置生活饮用水储水设施。
5.2.5所有给排水管道、设备、设施设置明确、清晰的永久性标识。
5.2.6噪声级达到现行国家标准《民用建筑隔声设计规范》GB 50118中的高要求标准限值。
5.2.7构件及相邻房间之间的空气声隔声性能达到现行国家标准《民用建筑隔声设计规范》GB 50118中的高要求标准限值；楼板的撞击声隔声性能达到现行国家标准《民用建筑隔声设计规范》GB 50118中的高要求标准限值。
5.2.8室内主要功能空间至少60%面积比例区域的采光照度值不低于采光要求的小时数平均不少于4h/d；主要功能房间有眩光控制措施。
5.2.10过渡季典型工况下主要功能房间平均自然通风换气次数不小于2次/h的面积比例为100%。`,
        d: `6.1.1建筑、室外场地、公共绿地、城市道路相互之间设置连贯的无障碍步行系统。
6.1.2场地人行出入口500m内设有公共交通站点。
6.1.3停车场具有电动汽车充电设施或具备充电设施的安装条件，并合理设置电动汽车和无障碍汽车停车位。
6.1.4自行车停车场所位置合理、方便出入。
6.1.5建筑设备管理系统具有自动监控管理功能。
6.1.6建筑设置信息网络系统。
6.2.1场地出入口到达公共交通站点的步行距离不超过500m；场地出入口步行距离800m范围内设有不少于2条线路的公共交通站点。
6.2.2建筑室内公共区域、室外公共活动场地及道路均满足无障碍设计要求；设有可容纳担架的无障碍电梯。
6.2.3建筑内至少兼容2种面向社会的公共服务功能；建筑向社会公众提供开放的公共活动空间；电动汽车充电桩的车位数占总车位数的比例不低于10%。
6.2.4场地出入口到达中型多功能运动场地的步行距离不大于500m。
6.2.5室外健身场地面积不少于总用地面积的0.5%；设置宽度不少于1.25m 的专用健身慢行道，健身慢行道长度不少于用地红线周长的1/4且不少于100m；室内健身空间的面积不少于地上建筑面积的0.3% 且不少于60 m2；楼梯间具有天然采光和良好的视野，且距离主入口的距离不大于15m。
6.2.6：设置分类、分级用能自动远传计量系统，且设置能源管理系统实现对建筑能耗的监测、数据分析和管理。
6.2.8：设置用水量远传计量系统，能分类、分级记录、统计分析各种用水情况；利用计量数据进行管网漏损自动检测、分析与整改，管道漏损率低于5%。
6.2.9具有家电控制、照明控制、安全报警、建筑设备控制等至少3种类型的服务功能；具有接入智慧城市（城区、社区）的功能。`,
        e: `7.1.1结合场地自然条件和建筑功能需求，对建筑的体形、平面布局、空间尺度、围护结构等进行节能设计，符合国家有关节能设计的要求。
7.1.2区分房间的朝向细分供暖、空调区域，并对系统进行分区控制；空调冷源的部分负荷性能系数（IPLV）符合现行国家标准《公共建筑节能设计标准》GB50189的规定。 
7.1.3根据建筑空间功能设置分区温度，合理降低室内过渡区空间的温度设定标准。
7.1.4主要功能房间的照明功率密度值不高于现行国家标准《建筑照明设计标准》GB 50034规定的现行值；公共区域的照明系统采用分区、定时、感应等节能控制；采光区域的照明控制独立于其他区域的照明控制。
7.1.5冷热源、输配系统和照明等各部分能耗进行独立分项计量。
7.1.6垂直电梯采取群控、变频调速节能措施。
7.1.7按使用用途、付费或管理单元，分别设置用水计量装置；用水点处水压大于0.2MPa的配水支管应设置减压设施，并满足给水配件最低工作压力的要求；用水器具和设备满足节水产品的要求。 
7.1.8未采用建筑形体和布置严重不规则的建筑结构。
7.1.9装饰性构件造价与建筑总造价的比例不大于1%。
7.1.10 500km以内生产的建筑材料重量占建筑材料总重量的比例大于60%；现浇混凝土采用预拌混凝土，建筑砂浆采用预拌砂浆。 
7.2.1集约利用土地，项目容积率满足高得分要求。
7.2.3地面停车占地面积与其总建设用地面积的比率小于8%。
7.2.4围护结构热工性能比国家现行相关建筑节能设计标准规定的提高幅度达到10%。
7.2.5供暖空调系统的冷、热源机组能效均优于现行国家标准《公共建筑节能设计标准》GB 50189的规定以及现行有关国家标准能效限定值的要求。
7.2.6通风空调系统风机的单位风量耗功率比现行国家标准《公共建筑节能设计标准》GB 50189的规定低20%，未设置集中供暖空调系统。
7.2.7主要功能房间的照明功率密度值达到现行国家标准《建筑照明设计标准》GB 50034规定的目标值；照明产品、三相配电变压器、水泵、风机等设备满足国家现行有关标准的节能评价值的要求。
7.2.10全部卫生器具的用水效率等级达到1级。
7.2.11采用节水灌溉系统，设置土壤湿度感应器、雨天自动关闭装置等节水控制措施；空调冷却系统无蒸发耗水量。
7.2.12项目未设置景观水体。
7.2.13绿化灌溉、车库及道路冲洗、洗车用水采用非传统水源的用水量占其总用水量的比例大于30%。本项目未使用冷却水。
7.2.14建筑所有区域实施土建工程与装修工程一体化设计及施工。
7.2.15 400MPa级及以上强度等级钢筋应用比例达到85%。
7.2.17可再循环材料比例达到10%。
7.2.18绿色建材应用比例不低于30%。`,
        f: `8.1.1建筑规划布局满足日照标准，且不得降低周边建筑的日照标准。
8.1.2室外热环境满足国家现行有关标准的要求。
8.1.3配建的绿地符合所在地城乡规划的要求，合理选择绿化方式，植物种植适应当地气候和土壤，且无毒害、易维护，种植区域覆土深度和排水能力满足植物生长需求，并采用复层绿化方式。
8.1.4场地的竖向设计有利于雨水的收集或排放，有效组织雨水的下渗、滞蓄或再利用。
8.1.5建筑内外均设置便于识别和使用的标识系统。
8.1.6场地内无排放超标的污染源。
8.1.7生活垃圾分类收集，垃圾容器和收集点的设置合理并与周围景观协调。
8.2.2场地年径流总量控制率达到55%。
8.2.3绿地向公众开放。
8.2.4项目执行全校禁烟的规定。在校园内不设置室外吸烟区，并设置禁止吸烟标识。
8.2.6环境噪声值小于等于2类声环境功能区标准限值。
8.2.7玻璃幕墙的可见光反射比及反射光对周边环境的影响符合《玻璃幕墙光热性能》GB/T 18091的规定；室外夜景照明光污染的限制符合现行国家标准《室外照明干扰光限制规范》GB/T 35626和现行行业标准《城市夜景照明设计规范》JGJ/T 163的规定。
8.2.8场地内风环境有利于室外行走、活动舒适和建筑的自然通风。`,
        g: `无`,
        h: `1）采用高效节水卫生器具，节约水资源。
2）采用高效照明灯具
3）采用节能电梯
4）大面积的采用高强度钢并合理地采用了可再循环材料。
5）选用绿色装饰装修材料`,
        i: '高效照明灯具及节能控制措施，创造绿色的室内光环境。采用节水器具、利用非传统水源，极大的节约了水资源，利用绿化地面渗透雨水，降低了市政雨水管负荷。项目中所用混凝土全部采用预拌混凝土，减少施工现场噪声和粉尘污染，节约能源，资源，减少材料损耗。本项目依据《绿色建筑评价标准》(GB/T 50378--2019)中相关条文的规定，从安全耐久、健康舒适、生活便利、资源节约、环境宜居五大评价指标体系出发，重点解决用地指标、室外环境、公共交通、透水地面、地下空间利用、建筑本体节能设计、高效节能设备和系统、水系统合理规划、高效节水措施、非传统水源利用、绿化节水灌溉、预拌混凝土利用、天然采光、围护结构保温隔热设计、室内空气品质等技术问题，力求营造绿色舒适的人居环境，环保、社会效益突出，故具有很高推广价值。',
        j: `经济效益：节省能源和水，减少废物，改善室内空气质量等。使居住者感到舒适，减少居民的健康费用，降低运行费用和维护费用。 
社会效益：最大程度的利用现有的资源满足人们的生活需求，保证居民的生活水平。
环境效益：高强度钢和可再循环材料的合理使用，节约资源；地下空间的合理运用，减少对土地的需求量，缓解土地危机。`,
        k: `为了缓解县城教育资源紧缺的现状，确保我县顺利通过教育现代化评估验收，2015年如东县教育局反复研究论证，形成了“十三五”县城学校布局规划初步方案。县委县政府、县人大对此高度重视，邀请相关部门视察了县城学校现状，对方案进行会商，确定在解放路东侧、东环路绿化带以西、闽江路以南、龙腾路北侧新建一所解放路小学。
解放路小学项目基本情况：该项目列入县重点项目之一，占地面积约58亩。学校规模为6轨36个班，主要建设内容包括新建普通教室、专用教室及辅助用房、公共教学用房及辅助用房、教师办公用房、生活服务用房及其配套设施（300米标准跑道操场和地下车库等），总建筑面积约28000平方米，总投资约19000万元。`
      },
      active: ['1', '2', '3', '4', '5', '6', '7', '8'],
      fileList: [
        {
          url: require('../../../assets/images/upload1.jpg')
        },
        {
          url: require('../../../assets/images/upload2.jpg')
        },
        {
          url: require('../../../assets/images/upload3.jpg')
        },
      ],
      queryItems1: JSON.parse(JSON.stringify(basicInfo)),
      queryItems2: JSON.parse(JSON.stringify(evaluationIndex)),
      queryItems3: JSON.parse(JSON.stringify(incrementalCost)),
      columns1: [
        {
          label: '单位名称',
          prop: 'name',
          width: 180
        },
        {
          label: '通讯地址',
          prop: 'chuanzheng'
        },
        {
          label: '联系人',
          prop: 'area'
        },
        {
          label: '传真',
          prop: 'chuanzhen'
        },
        {
          label: '邮编',
          prop: 'youbian'
        },
        {
          label: '电话',
          prop: 'tel'
        },
        {
          label: '手机',
          prop: 'phone'
        },
        {
          label: '邮箱',
          prop: 'mail'
        },
        {
          label: '负责人',
          prop: 'people'
        },
        {
          label: '负责人电话',
          prop: 'tel1',
          width: 100
        },
        {
          label: '负责人手机',
          prop: 'phone1',
          width: 100
        }
      ],
      columns3: [
        {
          label: '姓名',
          prop: 'name',
          width: 240
        },
        {
          label: '单位',
          prop: 'unit',
          width: 240
        },
        {
          label: '职务/职称',
          prop: 'zhiwu',
          width: 240
        },
        {
          label: '承担主要工作',
          prop: 'work',
          width: 270
        },
      ],
      dataList1: [
        {
          name: '绿城大连深蓝中心'
        },
        {
          name: '绿城大连深蓝中心'
        }
      ],
      dataList2: [
        {
          name: '东南大学建筑设计研究院有限公司'
        },
        {
          name: '东南大学建筑设计研究院有限公司'
        }
      ],
      dataList3: [
        {
          name: 'xxx'
        },
        {
          name: 'xxx'
        }
      ],
      canhuirenyuanList: [
        {
          name: '谭亮',
          unit: '东南大学建筑设计研究院有限公司',
          zhiwu: '建筑负责人',
          work: '建筑设计'
        }
      ],
      zengliangchengbenList: [
        {
          name: '节能电梯',
          price: '150万/台',
          num: '1台',
          name1: '电梯',
          price1: '120万/台',
          num1: '1台',
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
          let ids = ['1', '2', '3', '4', '5', '6', '7', '8']
          this.curIdx = ids.map(item => {
            return {
              top: document.getElementById(item).getBoundingClientRect().top,
              idx: item
            }
          }).filter(v => v.top > 0).sort((a, b) => a.top - b.top)[0].idx * 1 - 1
        } catch (error) {
          
        }
      }, 200)
    })
  }
}
</script>
<style lang="less" scoped>
.issue-block-title{
  display: flex;
  justify-content: space-between;
}
.icons-wrap{
  padding-right: 24px;
  i{
    margin-left: 10px;
    cursor: pointer;
    font-size: 24px;
  }
}
/deep/ .el-textarea__inner{
  width: 600px!important;
  height: 200px;
} 
/deep/ .textarea-wrap .el-form-item__content{
  width: 600px!important;
  display: inline-block;
  height: 200px;
  margin-left: 0!important;
  transform: translateX(-120px);
}
/deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/ .el-upload:hover {
  border-color: #409EFF;
}
/deep/ .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 140px;
  height: 140px;
  line-height: 140px;
  text-align: center;
}
/deep/ .avatar {
  width: 140px;
  height: 140px;
  display: inline-block;
}
.example{
  width: 140px;
  height: 140px;
  display: inline-block;
}
// /deep/ .upload-container > div{
//   text-align: ;
// }
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