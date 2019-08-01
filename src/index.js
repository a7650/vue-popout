/**
 * vue-popout v1.0.3
 * (c) 2019 zzp
 */

/* eslint-disable */

import vuePopout from './popout/vuePopout.vue';
import { Popout } from './popout/popout.js'

export default {
    install(Vue){
        Vue.component("popout",vuePopout);
        Vue.prototype.popout = new Popout();
    }
}
