/**
 * vue-popout v1.0.0
 * (c) 2019 zzp
 */

/* eslint-disable */

import vuePopout from './popout/vuePopout.vue';
import * as fun from './popout/popout.js'

export default {
    install(Vue,options){

        Vue.component("popout",vuePopout);

        Vue.prototype.popout = fun.popout
    }
}
