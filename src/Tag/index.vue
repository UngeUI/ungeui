<template>
    <div
        v-if="visibility"
        :class="['u-tag', themeType, size, isRound, isDisabled]"
        :style="customColor"
    >
        <div>
            <slot></slot>
        </div>
        <i
            v-if="closable"
            class="u-tag-close" 
            @click="closeTag">
            <IconClose />
        </i>
    </div>
</template>

<script setup>
import { ref, useSlots, useAttrs, computed } from 'vue'
import IconClose from './util/UClose.vue'
const slots = useSlots()
const attrs = useAttrs()

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator(value) {
            return ['default', 'success', 'info', 'danger', 'warning'].includes(
                value
            )
        }
    },
    size: {
        type: String,
        default: 'medium',
        validator(value) {
            return ['small', 'medium', 'large'].includes(value)
        }
    },
    closable: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value === 'boolean'
        }
    },
    round: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value === 'boolean'
        }
    },
    disabled: {
        type: Boolean,
        default: false,
        validator(value) {
            return typeof value === 'boolean'
        }
    },
    color: {
        type: String
    }
})
const emit = defineEmits(['close'])

// const isClose = computed(() => props.closable ? 'u-tag-close')
let visibility = ref(true)
const closeTag = (event) => {
    visibility.value = false
    emit('close', event)
}

const themeType = computed(() => 'u-tag-' + props.type)
const size = computed(() => 'u-tag-size__' + props.size)
const isRound = computed(() => props.round && 'u-tag-round')
const isDisabled = computed(() => props.disabled && 'u-tag-disabled')

const customColor = computed(() => {
    if (props.color) {
        return {
            color: '#fff',
            backgroundColor: props.color,
            border: `1px solid ${props.color}`
        }
    }
})
</script>
