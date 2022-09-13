<template>
  <div>
    <el-form>
      <el-form-item label="申报资料:" label-width="100px">
        <el-upload
          class="upload-demo"
          action=""
          multiple
          :file-list="[{name: '绿城大连深蓝中心.rar'}]"
          :limit="3">
          <el-button size="small" type="primary">上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
          <div slot="tip" class="el-upload__tip">请上传申报资料，将申报资料打包为一份压缩文件上传，文件中包含XXXX支持扩展名：.rar .zip，大小不超过4G</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="汇报资料:" label-width="100px">
        <el-upload
          class="upload-demo"
          action=""
          multiple
          :file-list="[{name: '绿城大连深蓝中心.pdf'}]"
          :limit="3">
          <el-button size="small" type="primary">上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
          <div slot="tip" class="el-upload__tip">请上传汇报资料支持扩展名：.ppt .pdf，大小不超过100M</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.upload-demo{
  text-align: left;
}
</style>
