import Tree from './tree.jsx';

Tree.name = 'UTree';

Tree.install = (app) => {
   app.component(Tree.name, Tree);
};

export default Tree;