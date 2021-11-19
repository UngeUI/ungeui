<template>
    <div 
        ref="selectRef"
        @click="toggleState" 
        :class="['u-select', {'u-select-checked':showState},selectSize]" 
    >
        <div :class="['u-select-text',{'u-select-text-checked': isChecked}]">{{selectLabel}}</div>
        <div :class="['u-select-icon',{'u-select-icon-checked':showState}]">
            <u-icon :size="25" color="#bbb">
                <CDown />
            </u-icon>
        </div>
        <teleport to="body">
            <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
            >
                <div 
                    v-show="showState" 
                    :class="['u-select-wrapper']" 
                    :style="selectWraperStyle"
                >
                    <slot></slot>
                </div>
            </transition>
        </teleport>
    </div>
</template>

<script>
import {
    ref,
    defineComponent,
    computed,
    provide,
    reactive,
    onMounted,
} from 'vue';
import { onClickOutside } from '@vueuse/core';
import UIcon from '../icon/index';
import CDown from './util/ChevronDown.vue';

const select = defineComponent({
    name: 'select',
    components: {
        UIcon,
        CDown,
    },
    props: {
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small', 'medium', 'large'].includes(value);
            },
        },
        placeholder:{
            type: [String,Number,Boolean],
            default: '请选择'
        },
        value:{
            type: [String,Number,Boolean,Object]
        }
    },
    emits:['update:value'],
    setup(props, { emit }) {
        const selectRef = ref(null);

        const showState = ref(false)
        const toggleState = (e) => {
            console.log(e)
            showState.value = !showState.value
        }

        const close = () => {
            showState.value = false
        }
        onClickOutside(selectRef, (event) => {
            close()
        })

        const selectWraperStyle = reactive({
            left: '50%',
            top: '50%',
            width: '100px',
        });
        onMounted(() => {
            selectWraperStyle.left = selectRef.value.offsetLeft + 'px';
            selectWraperStyle.top =
                selectRef.value.offsetTop +
                selectRef.value.offsetHeight +
                2 +
                'px';
            selectWraperStyle.width = selectRef.value.offsetWidth + 'px';
        });

        const selectLabel = ref(props.placeholder)
        const onSelectChange = (value,label) => {
            emit('update:value',value)
            selectLabel.value = label
        };
        
        const isChecked = computed(() => {
            return selectLabel.value ==  props.placeholder
        })

        provide(
            'selectContext',
            reactive({
                onSelectChange,
                props,
            }),
        );

        const selectSize = computed(() => {
            return 'u-select-size-' + props.size;
        });

        return {
            selectSize,
            selectRef,
            selectWraperStyle,
            toggleState,
            showState,
            close,
            selectLabel,
            isChecked
        };
    },
});

export default select
</script>
