#!/usr/bin/env node

const fs = require('fs')

fs.readFile('./docs/dist/index.html', 'utf8', (err, res) => {
    const str = '<link rel="icon" href="./favicon.ico">'
    const { index } = res.match(/<\/head>/)
    res.split('').splice(index, 0, str).join('')
    res = res.slice(0, index) + str + res.slice(index)
    fs.writeFile('./docs/dist/index.html', res, err => {
        if (err) {
            throw (err)
        }
    })
    fs.writeFile('./docs/dist/en/index.html', res, err => {
        if (err) {
            throw (err)
        }
    })
})

fs.readFile('./docs/favicon.ico', (err, res) => {
    if (err) {
        throw (err)
    }
    fs.writeFile('./docs/dist/favicon.ico', res, err => {
        if (err) {
            throw (err)
        }
    })
    fs.writeFile('./docs/dist/en/favicon.ico', res, err => {
        if (err) {
            throw (err)
        }
    })
})