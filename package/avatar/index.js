import avatar from './src/avatar.jsx'

avatar.name = 'Avatar'

avatar.install = (app) => {
  app.component('U' + avatar.name, avatar)
}

export default avatar
