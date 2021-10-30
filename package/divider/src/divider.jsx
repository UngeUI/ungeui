import {defineComponent} from 'vue'

const dividerProps = {

}

const divider = defineComponent({
    name: 'divider',
    props: dividerProps,
    setup() {

    },
    render() {
        const {
            $slots
        } = this
        return (
            <div>
                <div class={['']}></div>
            </div>
        )
    }
})

export default divider

