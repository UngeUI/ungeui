<template>
    <div class="u-table">
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
                    <table-head-td
                        v-for="(it,i) in column"
                        :key="i"
                        :align="it.align"
                        :fixed="it.fixed"
                    >
                        {{it.title}}
                    </table-head-td>
                </tr>
            </thead>
            <tbody class="u-table-body">
                <tr 
                    class="u-table-body-tr" 
                    v-for="(item, index) in data" 
                    :key="index"
                >
                    <table-body-td
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
                    </table-body-td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent,reactive } from 'vue'
import TableBodyTd from './tableBodyTd.vue'
import TableHeadTd from './tableHeadTd.vue'
const table = defineComponent({
    name: 'table',
    components:{
        TableBodyTd,
        TableHeadTd
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
 
    }
})
export default table

</script>
