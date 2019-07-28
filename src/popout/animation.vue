<template>
    <transition :name="animationName">
        <slot></slot>
    </transition>
</template>

<script>
export default {
props:{
    animationName:{
        type:String,
        default:"fade"
    },
    duration:String
}
}
</script>

<style scoped>
/* bottomToTop */
.bottomToTop-enter,.bottomToTop-leave-to{
    transform: translateY(100%);
}
.bottomToTop-enter-active,.bottomToTop-leave-active{
    transition: .3s;
}

/* fade */
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
    transition: .3s;
}

/* rightToLeft */
.rightToLeft-enter,.rightToLeft-leave-to{
      transform: translateX(100%);
}
.rightToLeft-enter-active,.rightToLeft-leave-active{
    transition: .3s;
}

/* bounce */
.bounce-enter-active{
    animation: bounce .3s;
}
@keyframes bounce {
  from,20%,53%,80%,to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }
  40%,43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

/* shrink */
.shrink-enter-active{
    animation: shrink .3s;
}
.shrink-leave-active{
    animation: shrink .2s;
    animation-direction: reverse;
}
@keyframes shrink{
    from {
        opacity: 0;
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* enlarge */
.enlarge-enter-active{
    animation: enlarge .3s;
}
.enlarge-leave-active{
    animation: enlarge .2s;
    animation-direction: reverse;
}
@keyframes enlarge{
    from {
        opacity: 0;
        transform: scale(.6);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
}
</style>
