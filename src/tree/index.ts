import Tree from './treeRoot.tsx';
import { App } from 'vue';

Tree.name = 'UTree';

Tree.install = (app: App) => {
    app.component(Tree.name, Tree);
};

export default Tree;