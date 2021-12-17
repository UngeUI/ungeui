import { defineComponent } from 'vue';

const Tree = defineComponent({
    name: 'tree',
    props: {
        data: {
            type: Array
        }
    },
    setup(props, { slots }) {
        return () => (
            <ul>
                {
                    props.data.map(item => {
                        return (
                            <>
                                <li>{item.title}</li>
                                {
                                    item.children && <Tree data={item.children}></Tree>
                                }
                            </>
                        )
                    })
                }
            </ul>
        )
    }
       
});

export default Tree;