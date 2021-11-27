/*
 * @Descripttion:
 * @Author: peterroe
 * @Date: 2021-11-04 23:23:10
 * @LastEditors: peterroe
 * @LastEditTime: 2021-11-05 22:16:44
 */
const base = process.env.NODE_ENV === 'production' ? '/ungeui' : '';
const { resolve } = require('path');

module.exports = {
    title: 'Unge UI',
    description: 'docs',
    // 扫描srcIncludes里面的 *.md文件
    srcIncludes: ['src'],
    alias: {
        // 为了能在demo中正确的使用  import { X } from 'ungeui'
        [`ungeui`]: resolve('./src'),
    },
    base,
    themeConfig: {
        // logo: '../logo.svg',
        nav: [{ text: 'demo', link: '/math' }],
        lang: 'zh-CN',
        locales: {
            '/': {
                lang: 'zh-CN',
                title: 'ungeui',
                description: 'docs',
                label: '中文',
                selectText: '语言',
                nav: [{ text: '指南', link: '/' }],
                sidebar: [{
                    text: '安装',
                    children: [
                        { text: '全局引入', link: '/' }
                    ]
                }, {
                    text: '通用组件',
                    children: [
                        { text: 'Tag', link: '/components/tag/' },
                        { text: 'Avatar', link: '/components/avatar/' },
                        { text: 'Divider', link: '/components/divider/' },
                        { text: 'Icon', link: '/components/icon/' },
                        { text: 'Button', link: '/components/button/' },
                        //Flag
                    ],
                }, {
                    text: '数据组件',
                    children: [
                        { text: 'Input', link: '/components/input/' },
                        { text: 'Radio', link: '/components/radio/' },
                        { text: 'Checkbox', link: '/components/checkbox/' },
                        { text: 'Switch', link: '/components/switch/' },
                        { text: 'Select', link: '/components/select/' },
                        { text: 'Table', link: '/components/table/' },
                        { text: 'Pagination', link: '/components/pagination/' },
                        { text: 'Slider', link: '/components/slider/' },
                        { text: 'InputNumber', link: '/components/inputNumber/' },
                    ],
                }, {
                    text: '反馈组件',
                    children: [
                        { text: 'Message', link: '/components/message/' },
                        { text: 'Dialog', link: '/components/dialog/' },
                        { text: 'Tooltip', link: '/components/tooltip/' },
                    ],
                }, {
                    text: '布局组件',
                    children: [
                        { text: 'Space', link: '/components/space/' },
                    ],
                }],
            },
            '/en/': {
                lang: 'en-US',
                title: 'ungeui',
                description: 'docs',
                label: 'English',
                selectText: 'Languages',
                nav: [{ text: 'Guide', link: '/en/' }],
                sidebar: [{
                    text: 'Install',
                    children: [
                        { text: 'Global import', link: '/en/' }
                    ]
                }, {
                    text: 'General',
                    children: [
                        { text: 'Tag', link: '/en/components/tag/' },
                        { text: 'Avatar', link: '/en/components/avatar/' },
                        { text: 'Divider', link: '/en/components/divider/' },
                        { text: 'Icon', link: '/en/components/icon/' },
                        { text: 'Button', link: '/en/components/button/' },
                        //Flag2
                    ],
                }, {
                    text: 'Data',
                    children: [
                        { text: 'Input', link: '/en/components/input/' },
                        { text: 'Radio', link: '/en/components/radio/' },
                        { text: 'Checkbox', link: '/en/components/checkbox/' },
                        { text: 'Switch', link: '/en/components/switch/' },
                        { text: 'Select', link: '/en/components/select/' },
                        { text: 'Table', link: '/en/components/table/' },
                        { text: 'Pagination', link: '/en/components/pagination/' },
                        { text: 'Slider', link: '/en/components/slider/' },
                        { text: 'InputNumber', link: '/en/components/inputNumber/' },
                    ],
                }, {
                    text: 'Feedback',
                    children: [
                        { text: 'Message', link: '/en/components/message/' },
                        { text: 'Dialog', link: '/en/components/dialog/' },
                        { text: 'Tooltip', link: '/en/components/tooltip/' },
                    ],
                }, {
                    text: 'Layout',
                    children: [
                        { text: 'Space', link: '/en/components/space/' },
                    ],
                }],
            },
        },
        search: {
            searchMaxSuggestions: 10,
        },
        repo: 'peterroe/ungeui',
        repoLabel: 'Github',
        lastUpdated: true,
        prevLink: true,
        nextLink: true,
    },
};