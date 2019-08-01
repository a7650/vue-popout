/**
 * vue-popout v1.0.4
 * (c) 2019 zzp
 */

/* eslint-disable */
import * as debug from "../util/debug.js"
import { isUndef, extend, urlPushParam, urlReplaceParam, storage } from "../util/lang.js"

/** 
 *  @Popout
 *  @prototype
 */

const URL_KEY = "popout_originUrl" 
const POPOUT_DATA = {  
    _currentStack: [],
    stackKeyMap: {},
    reverse_stackKeyMap: {}
}
let ACTIVE_CONTROL = false

Object.defineProperty(POPOUT_DATA, "currentStack", {
    enumerable: true,
    configurable: false,
    get() {
        return POPOUT_DATA._currentStack
    },
    set(newVal) {
        if (JSON.stringify(POPOUT_DATA._currentStack) === JSON.stringify(newVal)) {
            return
        }
        if (newVal.length > POPOUT_DATA._currentStack.length) { //insert
            let popoutVal = Math.random().toString(36).substring(2, 12);
            this.stackKeyMap[popoutVal] = newVal[newVal.length - 1];
            POPOUT_DATA.reverse_stackKeyMap[newVal[newVal.length - 1]] = popoutVal;
            location.href = urlReplaceParam(location.href, "popout", popoutVal);
        } else if (newVal.length < POPOUT_DATA._currentStack.length) {//delete
            let deleteData = POPOUT_DATA._currentStack.filter(item => {
                return newVal.indexOf(item) === -1
            })
            deleteData.forEach(item => {
                delete POPOUT_DATA.stackKeyMap[POPOUT_DATA.reverse_stackKeyMap[item]]
                delete POPOUT_DATA.reverse_stackKeyMap[item]
            })
            if (ACTIVE_CONTROL) {
                history.go(-deleteData.length);
            }
        }
        this._currentStack = newVal;
    }
})

function initData(){
    POPOUT_DATA.currentStack = [];
    POPOUT_DATA.stackKeyMap = {};
    POPOUT_DATA.reverse_stackKeyMap = {};
}

export class Popout {
    constructor() {
        this.init();
    }
    init() {
        this.originUrl = "";
        POPOUT_DATA.currentStack = [];
        POPOUT_DATA.stackKeyMap = {};
        POPOUT_DATA.reverse_stackKeyMap = {};
        window.onhashchange = function (e) {
            if (ACTIVE_CONTROL) {
                ACTIVE_CONTROL = false;
                return
            }
            let popoutVal = (new RegExp("[?|&]popout=([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, '%20') || null;
            let popoutName = POPOUT_DATA.stackKeyMap[popoutVal];
            if (!(popoutVal&&popoutName)){
                initData();
                return
            }
            let closeIndex = POPOUT_DATA.currentStack.indexOf(popoutName);
            if (closeIndex > -1) {
                POPOUT_DATA.currentStack = [...POPOUT_DATA.currentStack].splice(0, closeIndex + 1);
            }
        }
    }
    currentStack() {
        return POPOUT_DATA.currentStack
    }
    stackKeyMap() {
        return POPOUT_DATA.stackKeyMap
    }
    reverse_stackKeyMap() {
        return POPOUT_DATA.reverse_stackKeyMap
    }
    back() {
        ACTIVE_CONTROL = true;
        if (POPOUT_DATA.currentStack.length > 0) {
            POPOUT_DATA.currentStack = [...POPOUT_DATA.currentStack].splice(0, POPOUT_DATA.currentStack.length - 1);
        }
        return this
    }
    close(name, flag) {
        ACTIVE_CONTROL = true;
        let flagIndex = flag ? (flag === "next" ? 1 : (flag === "previous" ? -1 : 0)) : 0;
        if (name) {
            let closeIndex = POPOUT_DATA.currentStack.indexOf(name);
            if (closeIndex > -1) {
                POPOUT_DATA.currentStack = [...POPOUT_DATA.currentStack].splice(0, closeIndex + flagIndex);
            } else {
                debug.warn(`Window '${name}' does not exist or is not active`)
            }
        }
        return this
    }
    closeAll() {
        ACTIVE_CONTROL = true;
        initData();
        return this
    }
    open(name, duration) {
        ACTIVE_CONTROL = true;
        if (!name) {
            debug.warn("The 'open' function should pass in at least one name as a parameter");
            return this
        }
        if (POPOUT_DATA.reverse_stackKeyMap[name]) {
            debug.warn(`Window '${name}' is already open`);
            return this
        }
        if (POPOUT_DATA.currentStack.length === 0) {
            storage.set(URL_KEY, location.href);
            this.originUrl = location.href;
        }
        let _currentStack = [...POPOUT_DATA.currentStack];
        _currentStack.push(name);
        POPOUT_DATA.currentStack = _currentStack;
        //close
        let _duration = parseInt(duration);
        if (_duration > 0) {
            setTimeout(() => {
                this.close(name)
            }, _duration)
        }
        return this
    }
}


/**
 @mixin
 */








