<template>
    <td 
        :style="tdStyle"
        :class="['u-table-head-td',fixDirection]"
    >
        <slot>
            {{content}}
        </slot>
    </td>
</template>

<script>
import { defineComponent,computed } from 'vue'

const tableBodyTd = defineComponent({
    name: 'tableBodyTd',
    props:{
        content: {
            type: [String, Number,Boolean,Object]
        },
        align: {
            type: [String],
            default: 'left'
        },
        fixed: {
            type: [String]
        }
    },
    setup(props,{slots}) {
        console.log(props.align,'flexed')
        const fixDirection = computed(() => {
            return 'u-table-body-td-fixed-' + props.fixed
        })
        const tdStyle = computed(() => {
            return {
                'text-align': props.align
            }
        })
        return {
            tdStyle,
            fixDirection
        }
    }
})

export default tableBodyTd
</script>

