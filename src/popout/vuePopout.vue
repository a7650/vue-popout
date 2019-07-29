<template>
    <div class="popout">
        <animation :animationName="filterAnimation">
            <div class="filter" @click="close" v-if="is_active" :style="{'background-color':`rgba(0,0,0,${filterOpacity})`}"></div>
        </animation>
        <animation :animationName="contentAnimation">
            <div  class="popout-content" :class="{'text-alert':textNode}" @click="textNode&&close()"  v-if="is_active">
                <alert v-if="textNode" :alertType="alertType">
                    <!-- <template #[alertType]> -->
                       <slot></slot>
                    <!-- </template> -->
                </alert>
                <div v-else @click.stop="">
                    <slot></slot>
                </div>
            </div>
        </animation>
    </div>
</template>

<script>
/* eslint-disable */
import animation from './animation'
import alert from './alert/alert'
export default {
name:"vuePopout",
inheritAttrs:false,
components:{animation,alert},
data(){
    return{

    }
},
props:{
    name:{
        type:String,
        default:"default"
    },
    stack:{
        type:Array,
        default(){
            return []
        }
    },
    type:{
        type:String,
        default:"default"
    },
    contentAnimation:{
        type:String,
        default:"fade"
    },
    filterAnimation:{
        type:String,
        default:"fade"
    },
    filterOpacity:{
        type:String,
        default:"0.6"
    }
},
computed:{
    in_stack(){
        return this.stack.unshift("root")
    },
    is_active(){
        return this.$route.query.popout===this.name
    },
    textNode(){
        return ["ordinary","warn","error"].includes(this.type)
    },
    alertType(){
        if(["ordinary","warn","error"].includes(this.type)){
            return `${this.type}`
        }else{
            return "default"
        }
    },
    alertMes(){
        return "alertMes"
    }
},
directives:{
    stop:{
        inserted(el){
            el.addEventListener("touchstart",function(e){
                e.stopPropagation();
            })
        }
    }
},
methods:{
    close(){
        this.$router.back()
    }
}
}
</script>

<style scoped>
.popout{
    color: #fff;
}
.filter{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
}
.popout-content{
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.popout-content.text-alert{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
