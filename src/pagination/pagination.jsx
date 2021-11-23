import { defineComponent,computed,provide,reactive,ref,onMounted } from 'vue'
import UIcon from '../icon/index'
import PageBox from './pageBox.jsx'
import DoubleLeft from './util/DoubleLeft.vue'
import Left from './util/Left.vue'
import DoubleRight from './util/DoubleRight.vue'
import Right from './util/Right.vue'
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
        },
        count: {
            type: Number
        }
    },
    emits:['update:current','change'],
    setup(props,{emit}) {
        const pageNum = computed(() => {
            return Math.ceil(props.total / 10)
        })
        const displayNums = computed(() => {
            if(!props.count) {
                return new Array(pageNum.value).fill().map((_,index) => index + 1)
            }
            let arr = []
            let start = props.current - props.count 
            start = Math.max(1, start)
            let end = props.current + props.count
            end = Math.min(pageNum.value, end)
            
            for(let i = start; i <= end; i++) {
                arr.push(i)
            }
            return arr
        })
        console.log(displayNums.value)
        const displayEndCount = computed(() => {
            
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
        const LeftStep = (
            <PageBox boxType="leftStep">
                <UIcon>
                    <Left></Left>
                </UIcon>
            </PageBox>
        )
        const LeftMore = (
            <PageBox boxType="leftMore">
                <UIcon>
                    <Ellipsis></Ellipsis>
                </UIcon>
            </PageBox>
        )
        const RightMore = (
            <PageBox boxType="rightMore">
                <UIcon>
                    <Ellipsis></Ellipsis>
                </UIcon>
            </PageBox>
        )
        const RightStep = (
            <PageBox boxType="rightStep">
                <UIcon>
                    <Right></Right>
                </UIcon>
            </PageBox>
        )
        return () => (
            <div class="u-pagination" >
                
                <LeftStep />
                { props.current - props.count >=2 && <PageBox boxType="num" no={1} /> }
                { props.current - props.count >=3 && <LeftMore/>}
                
                {
                    displayNums.value.map((item,index) => {
                        return (
                            <PageBox
                                boxType="num"
                                isChecked={props.current == item}
                                no={item}
                            >
                                
                            </PageBox>
                        )
                    })
                }
                { props.current + props.count < pageNum.value - 1 && <LeftMore />}
                { props.current + props.count < pageNum.value && <PageBox boxType="num" no={pageNum.value} /> }
                

                
                <RightStep/>
            </div>
        )
    }
})

export default pagination