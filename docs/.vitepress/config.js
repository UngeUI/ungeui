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
    title: 'vitepress',
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
                    text: '介绍',
                    children: [
                        { text: 'Tag', link: '/components/tag/' },
                        { text: 'Avatar', link: '/components/avatar/' },
                        { text: 'Divider', link: '/components/divider/' },
                        { text: 'Icon', link: '/components/icon/' },
                        { text: 'Button', link: '/components/button/' },
                        { text: 'Input', link: '/components/input/' },
                        { text: 'Radio', link: '/components/radio/' },
                        { text: 'Checkbox', link: '/components/checkbox/' },
                    ],
                }, ],
            },
            '/en/': {
                lang: 'en-US',
                title: 'ungeui',
                description: 'docs',
                label: 'English',
                selectText: 'Languages',
                nav: [{ text: 'Guide', link: '/' }],
                sidebar: [
                    { text: 'Getting Started', link: '/en/' },
                    { text: 'Tag', link: '/en/components/tag/' },
                ],
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