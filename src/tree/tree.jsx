import { defineComponent } from 'vue';

const tree = defineComponent({
    name: 'tree',
    props: {

    },
    setup(props, { slots }) {
        
        return () =>  (
            <div>
                tree
            </div>
        )
    }
       
});

export default tree;