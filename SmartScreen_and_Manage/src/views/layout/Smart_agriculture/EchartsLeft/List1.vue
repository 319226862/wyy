<template>
    <div id="List1">
        <p>党员统计/政务/宣传发布</p>
        <div id="List1Echart" :style="{width: '100%', height: 'calc( 100% - 30px ) '}">
            <div class="List1Top">
                <div v-for="(item,index) in List1TopContent" :key="index" class="List1TopContent1">
                    <span>{{ item.data }}</span>
                    <span>{{ item.type }}</span>
                </div>
            </div>
            <div class="List1Bottom">
                <div v-for="(item,index) in List1BottomContent" :key="index" class="List1BottomContent1">
                    <img :src="item.img" style="width:90%;height:60%;" />
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            List1TopContentColor:["#104d8d","#057a58","#348395"],
            List1TopContent:[],
            List1TopContent1:[
                {
                    "data":"1",
                    "type":"书记"
                },
                {
                    "data":"9",
                    "type":"干部"
                },
                {
                    "data":"64",
                    "type":"党员"
                }
            ],
            List1TopContent2:[
                {
                    "data":"1",
                    "type":"书记"
                },
                {
                    "data":"19",
                    "type":"干部"
                },
                {
                    "data":"78",
                    "type":"党员"
                }
            ],
            List1BottomContent:[],
            List1BottomContent1:[
                {
                    "img":require("../../../../assets/people.png"),
                    "name":"书记"
                },
                {
                    "img":require("../../../../assets/people.png"),
                    "name":"干部"
                },
                {
                    "img":require("../../../../assets/people.png"),
                    "name":"干部"
                },
                {
                    "img":require("../../../../assets/people.png"),
                    "name":"干部"
                },
                {
                    "img":require("../../../../assets/people.png"),
                    "name":"干部"
                },
            ],
            List1BottomContent2:[
                {
                    "img":require("../../../../assets/cake.png"),
                    "name":"书记"
                },
                {
                    "img":require("../../../../assets/cake.png"),
                    "name":"干部"
                },
                {
                    "img":require("../../../../assets/cake.png"),
                    "name":"干部"
                },
                {
                    "img":require("../../../../assets/cake.png"),
                    "name":"干部"
                },
                {
                    "img":require("../../../../assets/cake.png"),
                    "name":"干部"
                },
            ]
        }
    },
    created(){
    },
    mounted(){
        this.drawList()
    },
    methods:{
        // 默认先进入小沟村，先运行一次
        drawList(){
            this.List1TopContent = this.List1TopContent1
            this.List1BottomContent = this.List1BottomContent1
        }
    },
    beforeDestroy() {
    },
    computed:{
        listenChange(){
            return this.$root.activateCountry
        }
    },
    watch:{
        listenChange(newVal){
            if(newVal==1){
                this.List1TopContent = this.List1TopContent1
                this.List1BottomContent = this.List1BottomContent1
            }
            if(newVal==2){
                this.List1TopContent = this.List1TopContent2
                this.List1BottomContent = this.List1BottomContent2
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#List1{
    width: 100%;
    height: 30%;
    position: relative;
    p{
        margin-left: 30px;
        margin-top: 10px;
        font-weight: 200;
        font-size: 18px;
        letter-spacing: 2px;
        color: white;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        width: 100%;
        display: inline-block;
        border-left: 3px rgba(40, 129, 200,1) solid;
        border-bottom: 1px solid rgba(178, 186, 188,0.3);
    }
}
#List1::before{
    display: block;
    position: absolute;
    top: -5px;
    left: -2px;
    background-image: url("~@/assets/border.png");
    transform: rotate(180deg);
    content: '';
    width: 111px;
    height: 35px;
}
#List1::after{
    display: block;
    position: absolute;
    bottom: -5px;
    right: -2px;
    background-image: url("~@/assets/border.png");
    content: '';
    width: 111px;
    height: 35px;
}
#List1Echart{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.List1Top{
    width: 100%;
    height: 35%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    div{
        width: 30%;
        height: 100%;
        border:1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        span:nth-child(2n+1){
            color:#00fcfd;
            text-shadow: 1px 1px 1px #00fcfd;
            font-size: 30px;
        }
        span:nth-child(2n){
            color:white;
            font-size: 18px;
        }
    }
    div:nth-child(1){
        border:1px solid #104d8d;
        background-color:rgba(40, 129, 200,0.2);
        box-shadow:  0 0 8px #104d8d;
    }
    div:nth-child(2){
        border:1px solid #057a58;
        background-color: rgba(5, 122, 90,0.2);
        box-shadow:  0 0 8px #057a58;
    }
    div:nth-child(3){
        border:1px solid #348395;
        background-color: rgba(51, 131, 149,0.2);
        box-shadow:  0 0 8px #348395;
    }
}
.List1Bottom{
    width: 100%;
    height: 73%;
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    .List1BottomContent1{
        margin-top: 10px;
        width: 18%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .List1BottomContent1Img{
        width: 80%;
        height: auto;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    img{
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>