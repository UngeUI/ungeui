import { defineComponent, provide } from 'vue'

const checkboxGroup = defineComponent({
    name: 'checkboxGroup',
    props: {
        value: {
            type: [String]
        }
    },
    setup(props) {
        const onCheckboxChange = (val) => {
            console.log(val)
        }
        provide('checkboxGroupContent',reactive({
            props,
            onCheckboxChange
        }))
        return () => <div class="u-checkbox-group">{slots.default?.()}</div>;
    }
})

export default checkboxGroup