import { defineComponent, h, ref, computed, reactive } from 'vue';
import TreeContent from './treeContent.jsx'

const Tree = defineComponent({
    name: 'tree',
    props: {
        data: {
            type: Array
        }
    },
    setup(props, { slots }) {
        return () => (
            <ul class="u-tree">
                {
                    props.data.map(item => {
                        return (
                            <TreeContent 
                                data={item}
                            />
                        )
                    })
                }
            </ul>
        )
    }
       
});

export default Tree;