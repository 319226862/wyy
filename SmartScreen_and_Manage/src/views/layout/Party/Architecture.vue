<template>
    <div id="Architecture">
        <TreeChart :json="treeData"></TreeChart>
    </div>
</template>

<script>
import TreeChart from 'vue-tree-chart'
    export default {
        components: {
            TreeChart
        },
        data() {
            return {
                treeData:{
                    name: '党支部书记'+'\n'+'',
                    image_url: require("../../../assets/people.png"),
                    class: ["rootNode"],
                    children: [
                    {
                        name: '支部委员'+'\n'+'',
                        image_url: require("../../../assets/people.png")
                    },
                    {
                        name: '支部委员'+'\n'+'',
                        image_url: require("../../../assets/people.png"),
                        children: [
                            {
                                name: '第一党小组'+'\n'+'',
                                image_url: require("../../../assets/people.png")
                            },
                            {
                                name: '第一党小组'+'\n'+'',
                                image_url: require("../../../assets/people.png")
                            },
                            {
                                name: '第一党小组'+'\n'+'',
                                image_url: require("../../../assets/people.png")
                            }
                        ]
                    },
                    {
                        name: '支部委员'+'\n'+'',
                        image_url: require("../../../assets/people.png")
                    }
                    ]
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style lang="scss" scoped>
#Architecture /deep/ .name{
    // 保留空白字符正常换行
    white-space: pre-wrap;
    height: 4rem !important;
}
#Architecture /deep/ .extend_handle{
    background-color: #10b9d3;
    border-radius: 50%;
    transform: translate3d(-10px,0,0);
}
</style>