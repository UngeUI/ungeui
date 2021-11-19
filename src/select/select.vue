<template>
    <div 
        ref="selectRef"
        @click="toggleState" 
        :class="['u-select', selectSize]" 
    >
        <div class="u-select-text">请选择</div>
        <div class="u-select-icon">
            <u-icon :size="25" color="#bbb">
                <CDown />
            </u-icon>
        </div>
        <teleport to="body">
            <div
                @click="toggleState" 
                v-show="showState" 
                :class="['u-select-wrapper']" 
                :style="selectWraperStyle"
            >
                <slot></slot>
            </div>
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
import { useScroll } from '@vueuse/core';
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
                return ['small', 'meduim', 'large'].includes(value);
            },
        },
    },
    setup(props, { slots }) {
        const selectRef = ref(null);

        const showState = ref(false)
        const toggleState = () => {
            showState.value = !showState.value
        }

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
            showState
        };
    },
});
</script>
