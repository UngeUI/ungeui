import Head from './head.jsx';

Head.name = 'UHead';

Head.install = (app) => {
   app.component(Head.name, Head);
};

export default Head;