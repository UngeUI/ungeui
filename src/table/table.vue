<template>
    <div class="u-table" ref="tableRef">
        <table>
            <colgroup>
                <col 
                    v-for="it in column" 
                    :key="it.key" 
                    :style="{minWidth:it.width}"
                >
            </colgroup>
            <thead class="u-table-head">
                <tr class="u-table-head-tr">
                    <table-td
                        v-for="(it,i) in column"
                        :key="i"
                        :align="it.align"
                        :fixed="it.fixed"
                    >
                        {{it.title}}
                    </table-td>
                </tr>
            </thead>
            <tbody class="u-table-body">
                <tr 
                    class="u-table-body-tr" 
                    v-for="(item, index) in data" 
                    :key="index"
                >
                    <table-td
                        v-for="it in column" 
                        :key="it.key"
                        :align="it.align"
                        :fixed="it.fixed"
                        :content="item[it.key]"
                    >
                        <slot 
                            :text="item[it.key]" 
                            :name="it.key">
                        </slot>
                    </table-td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent,onMounted,ref } from 'vue'
import { useScroll } from '@vueuse/core'
import TableBodyTd from './tableBodyTd.vue'
import TableHeadTd from './tableHeadTd.vue'
import TableTd from './tableTd.vue'
const table = defineComponent({
    name: 'table',
    components:{
        TableBodyTd,
        TableHeadTd,
        TableTd
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        column: {
            type: Array,
            default: []
        }
    },
    setup(props,{slots}) {
        let tableRef = ref(null)
        onMounted(() => {
            const {arrivedState } = useScroll(tableRef)
        })
        return {
            tableRef
        }
    }
})
export default table

</script>
