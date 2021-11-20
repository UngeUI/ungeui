<template>
    <td 
        :style="tdStyle"
        :class="['u-table-body-td',fixDirection,{'u-table-td-fixed':fixed}]"
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
            type: [String],
            default: ''
        }
    },
    setup(props,{slots}) {
        console.log(props.align,'flexed')
        const fixDirection = computed(() => {
            return props.fixed ? 'u-table-td-fixed-' + props.fixed : ''
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

