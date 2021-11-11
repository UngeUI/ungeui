import Avatar from './avatar.jsx';

Avatar.name = 'UAvatar';

Avatar.install = (app) => {
    app.component(Avatar.name, Avatar);
};

export default Avatar;
