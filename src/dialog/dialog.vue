<template>
    <teleport to="body" v-show="visible">
        <div :class="['u-dialog']">
            <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
                <div v-show="visible" :class="['u-dialog-mask']" @click="closeMask"></div>
            </transition>
            <transition 
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp"
            @after-enter="clickLock = true">
                <div 
                    :class="['u-dialog-core']"
                    v-show="visible"
                >
                    <div :class="['u-dialog-core-header']">
                        <div>{{title}}</div>
                        <div 
                            class="u-dialog-core-header-icon"
                            @click="$emit('close',$event), closeMask($event)"
                        >
                            <IconClose />
                        </div>
                    </div>
                    <div :class="['u-dialog-core-body']">
                        <slot></slot>
                    </div>
                    <div :class="['u-dialog-core-footer']">
                        <u-button @click="$emit('cancel',$event), closeMask($event)">取消</u-button>
                        <u-button deep @click="$emit('confirm',$event),closeMask($event)">确定</u-button>
                    </div>
                </div>
            </transition>
        </div>
    </teleport >
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import UButton from '../button/index.js'
import IconClose from './util/iconClose.vue'
const dialog = defineComponent({
    name: 'dialog',
    components:{
        UButton,
        IconClose
    },
    props:{
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '基础弹窗'
        }
    },
    emits:['update:visible','cancel','confirm','close'],
    setup(props,{emit}) {
        const clickLock = ref(false)  //Lock click event
        const closeMask = () => {
            if(clickLock.value) {
                emit('update:visible', !props.visible)
            }
            clickLock.value = false
        }
        return {
            closeMask,
            clickLock
        }
    }
})

export default dialog
</script>


