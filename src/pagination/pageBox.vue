<template>
    <div :class="['u-pagination-box',boxSize,isChecked]">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent,computed } from 'vue'

const pageBox = defineComponent({
    name: 'pageBox',
    props:{
        size:{
            type: String,
            default: 'medium',
            validator(value) {
                return ['small','medium','large'].includes(value)
            }
        },
        isChecked: {
            type: Boolean
        }
    },
    setup(props) {
        const boxSize = computed(() => {
            return 'u-pagination-size-' + props.size
        })
        const isChecked = computed(() => {
            return props.isChecked ? 'u-pagination-box-checked' : ''
        })
        return {
            boxSize,
            isChecked
        }
    }
})

export default pageBox
</script>