import { defineComponent,computed,provide,reactive,ref,onMounted } from 'vue'
import UIcon from '../icon/index'
import PageBox from './pageBox.jsx'
import DoubleLeft from './util/DoubleLeft.vue'
import Left from './util/Left.vue'
import DoubleRight from './util/DoubleRight.vue'
import Right from './util/Right.vue'
import Ellipsis from './util/EllipsisHorizontal.vue'
import { useElementHover } from '@vueuse/core'
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
        }

        provide('current', reactive({
            paginationProps:props,
            pageNum: pageNum.value,
            changeCurrent
        }))
        const LeftStep = (
            <PageBox boxType="leftStep" >
                <UIcon>
                    <Left></Left>
                </UIcon>
            </PageBox>
        )
        const LeftMore = (state) => {
            return (
                <PageBox boxType="leftMore">
                    <UIcon>
                        {
                            state ? 
                            <DoubleLeft/>:
                            <Ellipsis/>
                        }
                    </UIcon>
                </PageBox>
            )
        }
        const RightMore = (state) => {
            return (
                <PageBox boxType="rightMore">
                    <UIcon>
                        {
                            state ? 
                            <DoubleRight/>:
                            <Ellipsis/>
                        }
                    </UIcon>
                </PageBox>
            )
        }
        const RightStep = (
            <PageBox boxType="rightStep">
                <UIcon>
                    <Right></Right>
                </UIcon>
            </PageBox>
        )
        const left = ref(null)
        const right = ref(null)
        const isLeftChecked = useElementHover(left)
        const isRightChecked = useElementHover(right)
        // onMounted(() => {
        //     left.value?.addEventListener('mouseenter',() => {
        //         console.log(isChecked.value,123)
        //         isChecked.value = true
        //     })
        //     left.value?.addEventListener('mouseleave',() => {
        //         console.log(isChecked.value,123)
        //         isChecked.value = false
        //     })
        // })
        return () => (
            <div class="u-pagination">
                <LeftStep />
                { props.current - props.count >=2 && <PageBox boxType="num" no={1} /> }
                { props.current - props.count >=3 && 
                    <div ref={left}>
                       {LeftMore(isLeftChecked.value)}
                    </div>
                }
                
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
                { props.current + props.count < pageNum.value - 1 &&
                    <div ref={right}>
                        {RightMore(isRightChecked.value)}
                    </div>
                }
                { props.current + props.count < pageNum.value && <PageBox boxType="num" no={pageNum.value} /> }
                

                
                <RightStep/>
            </div>
        )
    }
})

export default pagination