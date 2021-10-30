import avatar from './src/index.vue'

avatar.name = 'Avatar'

avatar.install = (app) => {
    app.component('U'+avatar.name,avatar)
}

export default avatar