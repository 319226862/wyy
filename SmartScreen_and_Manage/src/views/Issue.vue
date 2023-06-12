<template>
    <div id="issue">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="发布主题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="发布类型">
                <el-radio-group v-model="form.resource">
                <el-radio label="政务发布"></el-radio>
                <el-radio label="宣传发布"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="发布内容">
                <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
                <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" @save="save" style="min-height: 500px"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即发布</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                    content:'',
                    html:'',
                    name: '',
                }
            },
        components: {
            mavonEditor
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                var formdata = new FormData();
                formdata.append('file', $file);
                this.$axios({
                    url: '/common/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((url) => {
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            change(value, render){
                // render 为 markdown 解析后的结果
                this.html = render;
            },
            save(value, render){
                // value是纯文本的值，render是编辑后的html文件，但是不包含布局，只有标签；
                // 如果是图片的话，value里面是图片名，render里面是图片的base64编码
                console.log(value, render)
            }
        }
    }
</script>
<style lang="scss" scoped>
#issue{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .el-form{
        width: 90%;
    }
}
</style>