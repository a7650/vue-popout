<template>
    <div class="popout">
        <animation :animationName="in_filterAnimation">
            <div class="filter" @click="close" v-if="is_active" :style="{'background-color':`rgba(0,0,0,${in_filterOpacity})`}"></div>
        </animation>
        <animation :animationName="in_contentAnimation">
            <div  class="popout-content" :class="{'text-alert':textNode}" @click="close()"  v-if="is_active">
                <alert v-if="textNode" :alertType="in_type">
                       <slot></slot>
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
import {rootComponent} from './mixin/mixin' 
export default {
mixins:[rootComponent],
name:"vuePopout",
inheritAttrs:false,
components:{animation,alert},
data(){
    return{
        is_active:false
    }
},
computed:{
    // is_active(){
    //     // return this.$route.query.popout===this.name
    //     return this.popout.currentStack.includes(this.name)
    // },
    textNode(){
        return this.in_type!=="default"
    },
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
        this.popout.back()
    }
},
watch:{
    "$route.query"(newVal){
        setTimeout(()=>{
            let popoutVal = newVal.popout;
            if(!popoutVal){
                this.is_active = false;
                return
            }
            if(this.popout.stackKeyMap()[newVal.popout]===this.name){
                this.is_active = true
            }else if(!this.popout.currentStack().includes(this.name)){
                this.is_active = false;
            }
        })
    }
}
}
</script>

<style scoped>
.popout{
    
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
