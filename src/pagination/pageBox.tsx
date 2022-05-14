import { defineComponent, computed, inject, ref } from 'vue'

const pageBox = defineComponent({
  name: 'pageBox',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    isChecked: {
      type: Boolean,
    },
    boxType: {
      type: String,
    },
    changeCurrent: {
      type: Function,
    },
    no: {
      type: Number,
    },
  },
  setup(props, { slots }) {
    const boxSize = computed(() => {
      return 'u-pagination-size-' + props.size
    })

    const isChecked = computed(() => {
      return props.isChecked ? 'u-pagination-box-checked' : ''
    })

    const { paginationProps, changeCurrent, pageNum } = inject('current', {})

    const isDisabled = computed(() => {
      if (props.boxType == 'leftStep') {
        return paginationProps.current == 1 ? 'u-pagination-box-disabled' : ''
      } else if (props.boxType == 'rightStep') {
        return paginationProps.current == pageNum
          ? 'u-pagination-box-disabled'
          : ''
      }
    })

    const boxClick = () => {
      if (props.boxType == 'num') {
        isDisabled.value = false
        console.log(isDisabled.value)
        changeCurrent(props.no)
      } else if (props.boxType == 'leftStep') {
        if (paginationProps.current == 1) {
          return
        }
        changeCurrent(paginationProps.current - 1)
      } else if (props.boxType == 'rightStep') {
        if (paginationProps.current == pageNum) {
          isDisabled.value = true
          return
        }
        changeCurrent(paginationProps.current + 1)
      } else if (props.boxType == 'leftMore') {
        if (paginationProps.current == 1) {
          isDisabled.value = true
          return
        }
        changeCurrent(paginationProps.current - 5)
      } else if (props.boxType == 'rightMore') {
        if (paginationProps.current == pageNum) {
          isDisabled.value = true
          return
        }
        changeCurrent(paginationProps.current + 5)
      }
    }
    return () => (
      <div
        class={[
          'u-pagination-box',
          boxSize.value,
          isChecked.value,
          isDisabled.value,
        ]}
        onClick={boxClick}
      >
        {props.no ? props.no : slots.default?.()}
      </div>
    )
  },
})

export default pageBox
