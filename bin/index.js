#!/usr/bin/env node

const pug = require('pug')
const fs = require('fs')

const componentName = process.argv[2] || 'component'
const UpperComponentName = componentName.slice(0, 1).toUpperCase() + componentName.slice(1)
const componentPath = `./src/${componentName}`

// console.log(fs.readdir('./', (err, files) => console.log(files)))
// return

createComponentDir()
createMdDocs()
createIndex()
    // const str = pug.compileFile('./templates/jsx.pug')({
    //     component: componentName
    // })
    // fs.writeFile(`${componentPath}/${componentName}.jsx`, str, (res, err) => {
    //     if (err) {
    //         console.log(err)
    //     }
    // })


// const str3 = pug.compileFile('./templates/demo.pug')({
//     component: componentName
// })
// fs.writeFile(`${componentPath}/demo/base.vue`, str3, (res, err) => {
//     if (err) {
//         console.log(err)
//     }
// })

// fs.mkdir(`${componentPath}/demo`, (err) => {
//     if (err) throw err;
// })

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