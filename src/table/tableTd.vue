<template>
    <td 
        :style="tdStyle"
        :class="['u-table-td',fixDirection,{'u-table-td-fixed':fixed}]"
    >
        <slot>
            {{content}}
        </slot>
    </td>
</template>

<script>
import { defineComponent,computed } from 'vue'

const tableTd = defineComponent({
    name: 'tableTd',
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

export default tableTd
</script>

