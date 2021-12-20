import Tree from './treeRoot.jsx';

Tree.name = 'UTree';

Tree.install = (app) => {
    app.component(Tree.name, Tree);
};

export default Tree;