import UPagination from './pagination.jsx';

UPagination.name = 'UPagination';

UPagination.install = (app) => {
    app.component(UPagination.name, UPagination);
};

export default UPagination;