<template>
    <td 
        :style="tdStyle"
        :class="[
            'u-table-td',
            fixDirection,
            {'u-table-td-fixed':fixed}
        ]"
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
        },
        arrivedState: {
            type: Object
        }
    },
    setup(props,{slots}) {
        console.log(props.align,'flexed')
        const fixDirection = computed(() => {
            if(props.fixed == 'left') {
                return props.arrivedState.left ? '' : 'u-table-td-fixed-left'
            } else if(props.fixed == 'right') {
                return props.arrivedState.right ? '' : 'u-table-td-fixed-right'
            }
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

