import { defineComponent, watch, ref, Transition } from 'vue';
import useWidth from './use/useWidth.js'
const loadingBar = defineComponent({
    name: 'loadingBar',
    props: {

    },
    setup(props, { slots, expose }) {
        const { width, isShow, endWidth } = useWidth()
        expose({
            endWidth
        })
        return () =>  (
            <Transition
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutUp"
            >
                {
                    isShow.value && (
                        <div class="u-loading-bar">
                            <div class="u-loading-bar-inner" style={{width:width.value}}>

                            </div>
                        </div>
                    )
                }
            </Transition>
        )
    }
       
});

export default loadingBar;