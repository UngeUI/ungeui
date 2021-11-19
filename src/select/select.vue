<template>
    <div 
        ref="selectRef"
        @click="toggleState" 
        :class="['u-select', {'u-select-checked':showState},selectSize]" 
    >
        <div class="u-select-text">{{placeholder ? placeholder : '请选择'}}</div>
        <div class="u-select-icon">
            <u-icon :size="25" color="#bbb">
                <CDown />
            </u-icon>
        </div>
        <teleport to="body">
            <transition
                enter-active-class="animate__animated animate__fadeInUp"
                leave-active-class="animate__animated animate__fadeOut"
            >
                <div
                    @click.stop="close" 
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
export default defineComponent({
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
        }
    },
    setup(props, { slots }) {
        const selectRef = ref(null);

        const showState = ref(false)
        const toggleState = () => {
            showState.value = !showState.value
        }
        const close = () => {
            showState.value = false
        }
        onClickOutside(selectRef, (event) => close())

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
        const onSelectChange = () => {
            console.log('选择改变');
        };

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
            close
        };
    },
});
</script>
