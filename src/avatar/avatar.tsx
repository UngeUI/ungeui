import { computed, defineComponent, ref } from 'vue';
import ResizeObserver from '../util/resizeObserver.jsx';

const avatarProps = {
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large', 'huge'].includes(value);
    },
  },
  src: {
    type: String,
  },
  round: {
    type: Boolean,
    default: false,
    validator(value) {
      return typeof value == 'boolean';
    },
  },
};

const avatar = defineComponent({
  name: 'Avatar',
  props: avatarProps,
  setup(props, { slots }) {
    const textRef = ref(null); //mount text node
    const selfRef = ref(null); //mount father node

    const setScaleParam = ({ width, height }) => {
      const { value: textElement } = textRef;

      const {
        offsetWidth: textWidth,
        offsetHeight: textHeight,
      } = textRef.value;
      const { offsetWidth: elWidth, offsetHeight: elHeight } = selfRef.value;
      //width/height same as textWidth/textHeight

      const radix = 0.9;
      const ratio = Math.min(
        (elWidth / textWidth) * radix,
        (elHeight / textHeight) * radix,
        1,
      );
      //because of CSS:left:50%,top:50%, to keep center
      textElement.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
    };

    const avatarSize = computed(() => {
      return 'u-avatar-size__' + props.size;
    });
    const round = computed(() => {
      return props.round ? 'u-avatar-round' : '';
    });
    return {
      //will be uppack automatically
      textRef,
      selfRef,
      setScaleParam,
      avatarSize,
      round,
    };
  },
  render() {
    const {
      textRef,
      selfRef,
      setScaleParam,
      avatarSize,
      round,

      src,
      size,
      $slots,
    } = this;

    return (
      <div ref="selfRef" class={['u-avatar', avatarSize, round]}>
        {!$slots.default && src ? (
          <img class={'u-avatar-size__' + size} src={src}></img>
        ) : (
          <ResizeObserver onResize={setScaleParam}>
            <span ref="textRef" class="u-avatar-text">
              {$slots.default?.()}
            </span>
          </ResizeObserver>
        )}
      </div>
    );
  },
});

export default avatar;
