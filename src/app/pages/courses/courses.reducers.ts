import { AppActions } from './../../app.actions';
import { Course } from './../../services';

export const coursesReducer = (state: Course[] = [], action) => {
    switch (action.type) {

        case AppActions.ADD_COURSE:
            return [...state, action.payload];

        case AppActions.DELETE_COURSE:
            const course = action.payload;
            if (state.indexOf(course.id) > -1) {
                return state;
            }
            let ndx = state.findIndex(x => x.id == course.id);
            if (ndx >= 0) {
                return [...state.slice(0, ndx), ...state.slice(ndx + 1)];
            }
            return state;

        case AppActions.UPDATE_COURSE:
            return state.map(x => {
                if (x.id === action.payload.id) {
                    return Object.assign({}, x, action.payload);
                }
                return x;
            });

        default: return state;
    }
}