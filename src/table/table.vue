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
                        :arrivedState="arrivedState"
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
                        :arrivedState="arrivedState"
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
import TableTd from './tableTd.vue'
const table = defineComponent({
    name: 'table',
    components:{
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
        
        const { arrivedState } = useScroll(tableRef)
        
        return {
            tableRef,
            arrivedState
        }
    }
})
export default table

</script>
