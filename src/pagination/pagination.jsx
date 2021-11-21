import { defineComponent,computed,provide,reactive } from 'vue'
import UIcon from '../icon/index'
import PageBox from './pageBox.jsx'
import Left from './util/DoubleLeft.vue'
import Right from './util/DoubleRight.vue'
import Ellipsis from './util/EllipsisHorizontal.vue'

const pagination = defineComponent({
    name:'pagination',
    props:{
        current: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    },
    emits:['update:current','change'],
    setup(props,{emit}) {
        const pageNum = computed(() => {
            return Math.ceil(props.total / 10)
        })
        const changeCurrent = (newNum) => {
            if(newNum == props.current) {
                return 
            }
            emit('update:current', newNum)
            emit('change', newNum)
            console.log(props.current)
        }
        provide('current', reactive({
            paginationProps:props,
            pageNum: pageNum.value,
            changeCurrent
        }))
        return () => (
            <div class="u-pagination">
                <PageBox boxType="left">
                    <UIcon>
                        <Left></Left>
                    </UIcon>
                </PageBox>
                {
                    new Array(pageNum.value).fill().map((_,index) => {
                        return (
                            <PageBox
                                boxType="num"
                                isChecked={props.current == index + 1}
                                no={index + 1}
                            >
                                
                            </PageBox>
                        )
                    })
                }
                <PageBox boxType="right">
                    <UIcon>
                        <Right></Right>
                    </UIcon>
                </PageBox>
            </div>
        )
    }
})

export default pagination