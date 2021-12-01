import Badge from './badge.jsx';

Badge.name = 'UBadge';

Badge.install = (app) => {
   app.component(Badge.name, Badge);
};

export default Badge;