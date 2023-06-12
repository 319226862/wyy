<template>
    <div>
        <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" @save="save" style="min-height: 500px"/>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        data() {
            return {
                content:'',
                html:''
            }
        },
        components: {
            mavonEditor
        },
        methods: {
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