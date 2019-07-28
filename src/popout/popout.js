/**
 * vue-popout v1.0.0
 * (c) 2019 zzp
 */

/* eslint-disable */
// import * as debug from "../util/debug.js"
import { isUndef , extend ,urlParam } from "../util/lang.js"

/** 
 @prototype
 */
export function popout(name) {
    this.$router.push(urlParam(this.$route.fullPath,{popout:name}))
}



/**
 @mixin
 */








