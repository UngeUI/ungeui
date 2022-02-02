import Avatar from './avatar.tsx'
import { App } from 'vue'
Avatar.name = 'UAvatar'

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar)
}

export default Avatar
export type { avatarProps } from './avatar.jsx'
