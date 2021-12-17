#!/usr/bin/env node

//此脚本根据//Flag找到填充的位置，不要删掉其他文件注释的Flag
const pug = require('pug')
const fs = require('fs')
const inquirer = require('inquirer')
const ora = require('ora')
const chalk = require('chalk')
const spawn = require('cross-spawn');

const componentName = process.argv[2] || 'component'
const UpperComponentName = componentName.slice(0, 1).toUpperCase() + componentName.slice(1)
const componentPath = `./src/${componentName}`

if (componentName == 'component') {
    console.log(chalk.hex('#cb3837').bold('Error: You did not enter the component name, You should run:'))
    console.log(chalk.hex('#13c2c2').bold('yarn create-component [component-name]'))
    return
}

inquirer.prompt([{
    type: 'confirm',
    name: 'isSure',
    message: 'Are you sure create component: ' + componentName
}]).then(value => {
    if (value.isSure) {
        const spinner = ora('create ComponentDir...').start()
        createComponentDir()

        spinner.text = 'create markdown docs...'
        createMdDocs()

        spinner.text = 'create jsx...'
        createIndex()
        createJsx()

        spinner.text = 'create demo...'
        createDemoDir()
        createDemoBaseVue()
        importIndex()

        spinner.text = 'create stylus...'
        creatStyle()
        importStyle()
        importDocsConfig()

        spinner.stop()
        spawn('git diff --stat', { stdio: 'inherit' });
        console.log(chalk.hex('#13c2c2').bold('You has create component success!'))
    } else {
        console.log(chalk.hex('#13c2c2').bold('You canceled!'))
    }

})


function createComponentDir() {
    fs.mkdirSync(componentPath, (err) => {
        if (err) throw err;
    })
}

function createMdDocs() {
    const str = pug.compileFile('./templates/cn-md.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFileSync(`${componentPath}/index.zh-CN.md`, str, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
    const str2 = pug.compileFile('./templates/us-md.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFileSync(`${componentPath}/index.en-US.md`, str2, (res, err) => {
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
    fs.writeFileSync(`${componentPath}/index.js`, str, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
}

function createJsx() {
    const str = pug.compileFile('./templates/jsx.pug')({
        component: componentName,
        UpperComponent: UpperComponentName
    })
    fs.writeFileSync(`${componentPath}/${componentName}.jsx`, str, (res, err) => {
        if (err) {
            console.log(err)
        }
    })
}

function createDemoDir() {
    fs.mkdirSync(`${componentPath}/demo`, err => {
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
    fs.writeFileSync(`${componentPath}/demo/base.vue`, str, (res, err) => {
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
    fs.writeFileSync('./src/index.ts', result, (err, result) => {
        if (err) {
            console.log(result)
        }
    })

}

function creatStyle() {
    let str = "@import './global.styl'\n@import './var.styl'\n"

    fs.writeFileSync(`./styles/${componentName}.styl`, str, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function importStyle() {
    let str = `@import './${componentName}.styl'\n`
    fs.appendFileSync('./styles/index.styl', str, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function importDocsConfig() {
    let str = `{ text: '${UpperComponentName}', link: '/components/${componentName}/'},\n\t\t\t\t\t\t`
    let str2 = `{ text: '${UpperComponentName}', link: '/en/components/${componentName}/'},\n\t\t\t\t\t\t`

    let result = fs.readFileSync('./docs/.vitepress/config.js', 'utf8')
    let id = result.match(/\/\/Flag/)

    let res = result.split('')
    res.splice(id.index, 0, str)

    result = res.join('')
    let id2 = result.match(/\/\/Flag2/)

    res = result.split('')
    res.splice(id2.index, 0, str2)

    result = res.join('')

    fs.writeFileSync('./docs/.vitepress/config.js', result, err => {
        if (err) {
            console.log(err)
        }
    })
}