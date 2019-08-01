﻿/**
 * vue-popout v1.0.3
 * (c) 2019 zzp
 */

/* eslint-disable */
import * as debug from "../util/debug.js"
import { isUndef , extend , urlPushParam , urlReplaceParam , storage} from "../util/lang.js"

/** 
 *  @Popout
 *  @prototype
 */

const URL_KEY = "popout_originUrl"
let ACTIVE_CONTROL = false

export class Popout {
    constructor(){
        this.init();
    }
    init(){
        //初始化时应使所有窗口为关闭状态，且当前url设置为originurl。
        this._currentStack = [];
        this.originUrl = "";
        this.stackKeyMap = {};
        this.reverse_stackKeyMap = {};
        let self = this;
        Object.defineProperty(this,"currentStack",{
            enumerable: true,
            configurable: false,
            get(){
                return this._currentStack
            },
            set(newVal){
                if(JSON.stringify(this._currentStack)===JSON.stringify(newVal)){
                    return
                }
                if(newVal.length>this._currentStack.length){ //insert
                    let popoutVal = Math.random().toString(36).substring(2,12);
                    this.stackKeyMap[popoutVal] = newVal[newVal.length-1];
                    this.reverse_stackKeyMap[newVal[newVal.length-1]] = popoutVal;
                    location.href = urlReplaceParam(location.href,"popout",popoutVal);
                }else if(newVal.length<this._currentStack.length){//delete
                    let deleteData = this._currentStack.filter(item=>{
                        return newVal.indexOf(item) === -1
                    })
                    deleteData.forEach(item => {
                        delete this.stackKeyMap[this.reverse_stackKeyMap[item]]
                        delete this.reverse_stackKeyMap[item]
                    })
                    if(ACTIVE_CONTROL){
                        history.go(-deleteData.length);
                    }
                }
                this._currentStack = newVal;
            }
        })
        window.onhashchange = function(e) {
            if(ACTIVE_CONTROL){
                ACTIVE_CONTROL = false;
                return
            }
            let popoutVal = (new RegExp("[?|&]popout=([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, '%20') || null;
            if(!popoutVal){
                self.currentStack = [];
            }else{
                let popoutName = self.stackKeyMap[popoutVal];
                let closeIndex = self.currentStack.indexOf(popoutName);
                if(closeIndex>-1){
                    self.currentStack = [...self.currentStack].splice(0,closeIndex+1);
                }
            }
        }
    }
    back(){
        ACTIVE_CONTROL = true;
        if(this.currentStack.length>0){
            this.currentStack = [...this.currentStack].splice(0,this.currentStack.length-1);
        }
        return this
    }
    close(name,flag){
        ACTIVE_CONTROL = true;
        let flagIndex = flag ? (flag==="next"?1:0) : 0;
        if(name){
            let closeIndex = this.currentStack.indexOf(name);
            if(closeIndex>-1){
                this.currentStack = [...this.currentStack].splice(0,closeIndex+flagIndex);
            }else{
                debug.warn(`Window '${name}' does not exist or is not active`)
            }
        }
        return this
    }
    closeAll(){
        ACTIVE_CONTROL = true;
        this.currentStack = [];
        return this
    }
    open(name,duration){
        ACTIVE_CONTROL = true;
        if(!name){
            debug.warn("The 'open' function should pass in at least one name as a parameter");
            return this
        }
        if(this.reverse_stackKeyMap[name]){
            debug.warn(`Window '${name}' is already open`);
            return this
        }
        if(this.currentStack.length===0){
            storage.set(URL_KEY,location.href);
            this.originUrl = location.href;
        }
        let _currentStack = [...this.currentStack];
        _currentStack.push(name);
        this.currentStack = _currentStack;
        //close
        let _duration = parseInt(duration);
        if(_duration>0){
            setTimeout(()=>{
                this.close(name)
            },_duration)
        }
        return this
    }
}


/**
 @mixin
 */








