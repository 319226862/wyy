<template>
    <div id="monitor">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" id="monitorTree"></el-tree>
        <video id="monitorVideo" src="../../../assets/video1.mp4" autoplay></video>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                data: [{
                    label: '保康县',
                    children: [
                        {
                            label: '小沟村',
                                children: [
                                    {
                                        label: '监控点1'
                                    },{
                                        label:'监控点2'
                                    }]
                        },
                        {
                            label: '九皇山村',
                                children: [
                                    {
                                        label: '监控点1'
                                    },{
                                        label:'监控点2'
                                    }]
                        },
                    ]}, 
                ]
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
        }
    }
</script>
<style lang="scss" scoped>
#monitor{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
#monitorTree{
    width: 20%;
    height: 100%;
}
#monitorVideo{
    width: 75%;
    height: fit-content;
}
</style>