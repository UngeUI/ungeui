import { mount } from '@vue/test-utils'
import { h } from 'vue'
import UButton from '../index.js'
import UIcon from '../../icon/index'
import { IconMessage } from '@ungeui/icons'

describe('u-button', () => {
    it('shound work with import on demand', () => {
        mount(UButton)
    })

    it('clickable', async() => {
        const onClick = jest.fn()
        const wrapper = mount(UButton, {
            props: {
                deep: true,
                onClick
            }
        })
        await wrapper.trigger('click')
        expect(onClick).toHaveBeenCalled()
    })

    it('disabled', async() => {
        const onClick = jest.fn()
        mount(UButton, {
            props: {
                disabled: true,
                onClick
            }
        })
        expect(onClick).not.toHaveBeenCalled()
    })

    it('should work with `type` prop', async() => {
        ['default', 'success', 'danger', 'warning', 'info'].forEach(type => {
            const wrapper = mount(UButton, {
                props: {
                    type
                }
            })
            expect(wrapper.find('.u-button').classes()).toContain(
                `u-button-${type}`
            )
            wrapper.unmount()
        })
    })

    it('should work with `deep` prop', async() => {
        const wrapper = mount(UButton, {
            props: {
                deep: true
            }
        })
        expect(wrapper.find('.u-button').classes()).toContain(
            `u-button-deep`
        )
        wrapper.unmount()
    })

    it('should work with `size` props', async() => {
        ['small', 'medium', 'large', 'huge'].forEach(size => {
            const wrapper = mount(UButton, {
                props: {
                    size
                }
            })
            expect(wrapper.find('.u-button').classes()).toContain(
                `u-button-size-${size}`
            )
            wrapper.unmount()
        })
    })

    it('should work with `text` props', async() => {
        const wrapper = mount(UButton, {
            props: {
                text: true
            }
        })
        expect(wrapper.find('.u-button').classes()).toContain(
            'u-button-text'
        )
    })

    it('should work with `prefix` slot', async() => {
        const wrapper = mount(UButton, {
            slots: {
                prefix: () => h(
                    UIcon,
                    null, { default: () => h(IconMessage) }
                )
            }
        })
        expect(wrapper.find('i').classes('u-icon')).toBe(true)
    })

    it('should work with `suffix` slot', async() => {
        const wrapper = mount(UButton, {
            slots: {
                suffix: () => h(
                    UIcon,
                    null, { default: () => h(IconMessage) }
                )
            }
        })
        expect(wrapper.find('i').classes('u-icon')).toBe(true)
    })

    it('should work with `round`', async() => {
        const wrapper = mount(UButton, {
            props: {
                round: true
            },
            slots: {
                prefix: () => h(
                    UIcon,
                    null, { default: () => h(IconMessage) }
                )
            }
        })
        expect(wrapper.find('.u-button').classes('u-button-round')).toBe(true)
    })
})