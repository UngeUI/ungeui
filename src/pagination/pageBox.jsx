import { defineComponent,computed,inject } from 'vue'

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
        },
        boxType: {
            type: String
        },
        changeCurrent:{
            type: Function
        },
        no: {
            type: Number
        }
    },
    setup(props,{slots}) {
        const boxSize = computed(() => {
            return 'u-pagination-size-' + props.size
        })

        const isChecked = computed(() => {
            return props.isChecked ? 'u-pagination-box-checked' : ''
        })

        const { paginationProps, changeCurrent,pageNum } = inject('current',{})

        const boxClick = () => {
            if(props.boxType == 'num') {
                changeCurrent(props.no)

            } else if(props.boxType == 'left') {
                if(paginationProps.current == 1) {
                    return 
                }
                changeCurrent(paginationProps.current - 1)

            } else if(props.boxType == 'right') {
                if(paginationProps.current == pageNum) {
                    return 
                }
                changeCurrent(paginationProps.current + 1)
                
            } 
        }
        return () => (
            <div 
                class={['u-pagination-box',boxSize.value,isChecked.value]}
                onClick={boxClick}
            >
                {
                    props.no ? props.no : slots.default?.()
                }
            </div>
        )
    }
})

export default pageBox