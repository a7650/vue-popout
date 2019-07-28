<template functional>
    <div class="popout-alert">
        <span v-if="props.alertType==='default'" class="default content"><slot name="default"></slot></span>
        <span v-if="props.alertType==='ordinary'" class="ordinary content"><slot name="ordinary"></slot></span>
        <span v-if="props.alertType==='warn'" class="warn content"><img class="icon" src="./warn.svg"><slot name="warn"></slot></span>
        <span v-if="props.alertType==='error'" class="error content"><img class="icon" src="./error.svg"><slot name="error"></slot></span>
    </div>
</template>

<style scoped>
/* .content{
    position: fixed;
    top: 
} */
.popout-alert{
    max-width: 80%;
    max-height: 50%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin-top: -50px;
    overflow-y: scroll;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    background-color: #fff;
    font-size: 16px;
}
.content{
    display: inline-block;
    height: 30px;
    line-height: 30px;
}
.icon{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    padding-right: 10px;
}
.ordinary{
    color: #000;
}
.warn{
    color: #000;
}
.error{
    color: #000;
}
</style>
