import { defineComponent,computed } from 'vue'
import UIcon from '../icon/index'
import PageBox from './pageBox.vue'
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
    setup(props) {
        const pageNum = computed(() => {
            return Math.ceil(props.total / 10)
        })
        return () => (
            <div class="u-pagination">
                <PageBox>
                    <UIcon>
                        <Left></Left>
                    </UIcon>
                </PageBox>
                {
                    new Array(pageNum.value).fill().map((_,index) => {
                        return (
                            <PageBox isChecked={props.current == index + 1}>
                                {index + 1}
                            </PageBox>
                        )
                    })
                }
                <PageBox>
                    <UIcon>
                        <Right></Right>
                    </UIcon>
                </PageBox>
            </div>
        )
    }
})

export default pagination