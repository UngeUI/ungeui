import Avatar from './avatar.jsx';
import { App } from 'vue';
Avatar.name = 'UAvatar';

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar);
};

export default Avatar;
