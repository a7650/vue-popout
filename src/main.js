import Vue from 'vue'

Vue.component("popout",{
    functional:true,
    inheritAttrs:false,
    props:{
        name:{
            type:String,
            default:"default"
        }
    },
    render(createElement, context) {
        
        return createElement()
    }
})