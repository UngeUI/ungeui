<template>
    <div>
        <table class="u-table">
            <colgroup>
                <col v-for="(it,i) in column" :key="i">
            </colgroup>
            <thead class="u-table-head">
                <tr class="u-table-head-tr">
                    <td class="u-table-head-td" v-for="(it,i) in column" :key="i">
                        {{it.title}}
                    </td>
                </tr>
            </thead>
            <tbody class="u-table-body">
                <tr class="u-table-body-tr" v-for="(item, index) in data" :key="index">
                    <td class="u-table-body-td" v-for="(it,i) in column" :key="i">
                        {{item[it.key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { defineComponent,reactive } from 'vue'

const table = defineComponent({
    name: 'table',
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
