<template>
    <teleport to="body" v-show="visible">
        <div :class="['u-dialog']">
            <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut">
                <div v-show="visible" :class="['u-dialog-mask']" @click="closeMask"></div>
            </transition>
            <transition 
            :enter-active-class="fullEnterClass"
            :leave-active-class="fullLeaveClass"
            @after-enter="clickLock = true">
                <div 
                    :class="['u-dialog-core']"
                    :style="dialogCoreWidth"
                    v-show="visible"
                >
                    <div :class="['u-dialog-core-header']">
                        <div>{{title}}</div>
                        <div 
                            class="u-dialog-core-header-icon"
                            @click="$emit('close',$event), closeMask($event)"
                        >
                            <slot name="icon">
                                <IconClose />
                            </slot>
                        </div>
                    </div>
                    <div 
                        :class="['u-dialog-core-body']"
                        :style="dialogBodyMaxHeight"
                    >
                        <slot></slot>
                    </div>
                    <div :class="['u-dialog-core-footer']">
                        <slot name="footer">
                            <u-button @click="$emit('cancel',$event), closeMask($event)">取消</u-button>
                            <u-button deep @click="$emit('confirm',$event),closeMask($event)">确定</u-button>
                        </slot>
                    </div>
                </div>
            </transition>
        </div>
    </teleport >
</template>

<script>
import { defineComponent, ref,computed, onMounted } from 'vue'
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
        },
        enterClass: {
            type: String,
            default: 'bounceIn'
        },
        leaveClass: {
            type: String,
            default: 'bounceOut'
        },
        width:{
            type: [Number, String],
            default: '512px'
        },
        bodyMaxHeight:{
            typeof: [Number, String],
            default: '400px'
        }
    },
    emits:['update:visible','cancel','confirm','close'],
    setup(props,{emit}) {

        const fullEnterClass = computed(() => {
            return `animate__animated animate__${props.enterClass}`
        })
        const fullLeaveClass = computed(() => {
            return `animate__animated animate__${props.leaveClass}`
        })

        const dialogCoreWidth = computed(() => {
            return {
                width:  typeof props.width == 'string' ? 
                props.width : props.width + 'px'
            }
        })
        const dialogBodyMaxHeight = computed(() => {
            return {
                maxHeight:  typeof props.bodyMaxHeight == 'string' ? 
                    props.bodyMaxHeight : props.bodyMaxHeight + 'px'
            }
        })

        const clickLock = ref(false)  //Lock click event
        const closeMask = () => {
            if(clickLock.value) {
                emit('update:visible', !props.visible)
            }
            clickLock.value = false
        }
        return {
            closeMask,
            clickLock,
            fullEnterClass,
            fullLeaveClass,
            dialogCoreWidth,
            dialogBodyMaxHeight
        }
    }
})

export default dialog
</script>


