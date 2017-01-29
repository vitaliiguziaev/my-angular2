import { BreadcrumbElement } from './../../../components/breadcrumb/breadcrumbElement';
import { AppActions } from './../../../app.actions';

export const breadcrumbsReducer = (state: BreadcrumbElement[] = [], action) => {
    switch (action.type) {
        case AppActions.ADD_BREADCRUMB:
            let n = state.findIndex(x => x.id == action.payload.id);
            if (n >= 0) {
                return state;
            }
            return [...state, action.payload];

        case AppActions.DELETE_BREADCRUMB:
            let ndx = state.findIndex(x => x.id == action.payload);
            if (ndx >= 0) {
                return [...state.slice(0, ndx), ...state.slice(ndx + 1)];
            }
            return state;

        case AppActions.UPDATE_BREADCRUMB:
            return state.map(x => {
                if (x.id == action.payload.id) {
                    return Object.assign({}, x, action.payload);
                }
                return x;
            });

        default: return state;
    }
}