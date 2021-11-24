#!/usr/bin/env node

const pug = require('pug')
const fs = require('fs')

const componentName = process.argv[2] || 'component'
const UpperComponentName = componentName.slice(0, 1).toUpperCase() + componentName.slice(1)
const componentPath = `./src/${componentName}`


createComponentDir()
createMdDocs()
createIndex()
createDemoDir()
createDemoBaseVue()
importIndex()
creatStyle()
importStyle()

function createComponentDir() {
    fs.mkdir(componentPath, (err) => {
        if (err) throw err;
    })
}

function createMdDocs() {
    const str = pug.compileFile('./templates/cn-md.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFile(`${componentPath}/index.zh-CN.md`, str, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
    const str2 = pug.compileFile('./templates/us-md.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFile(`${componentPath}/index.en-US.md`, str2, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
}

function createIndex() {
    const str = pug.compileFile('./templates/index.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFile(`${componentPath}/index.js`, str, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
}

function createDemoDir() {
    fs.mkdir(`${componentPath}/demo`, err => {
        if (err) {
            console.log(err)
        }
    })
}

function createDemoBaseVue() {
    const str = pug.compileFile('./templates/demo.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFile(`${componentPath}/demo/base.vue`, str, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
}

function importIndex() {
    let str = `import U${UpperComponentName} from './${componentName}/index.js'\n`

    let result = fs.readFileSync('./src/index.ts', 'utf8')

    let id1 = result.match(/\/\/ImportFlag/)

    let res = result.split('')
    res.splice(id1.index, 0, str)

    result = res.join('')

    let id2 = result.match(/\/\/ArrayFlag/)
    res = result.split('')
    res.splice(id2.index, 0, `U${UpperComponentName},\n\t`)

    result = res.join('')

    let id3 = result.match(/\/\/ExportFlag/)
    res = result.split('')
    res.splice(id3.index, 0, `U${UpperComponentName},\n\t`)

    result = res.join('')
    fs.writeFile('./src/index.ts', result, (err, result) => {
        if (err) {
            console.log(result)
        }
    })

}

function creatStyle() {
    let str = "@import './global.styl'\n@import './var.styl'\n"

    fs.writeFile(`./styles/${componentName}.stylus`, str, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function importStyle() {
    let str = `@import './${componentName}.styl'\n`
    fs.appendFile('./styles/index.styl', str, (err) => {
        if (err) {
            console.log(err)
        }
    })
}