import { AppActions } from './../../../app.actions';
import { Course } from './../../../services/CourseService';

export const coursesReducer = (state: Course[] = [], action) => {
    switch (action.type) {
        case AppActions.COURSES_LOADED:
            return action.payload;
        
        case AppActions.FILTER_COURSES:
            return action.payload;

        case AppActions.ADD_COURSE:
            const cour = action.payload;
            let n = state.findIndex(x => x.id == cour.id);
            if (n >= 0) {
                return state;
            }
            return [...state, action.payload];

        case AppActions.DELETE_COURSE:
            const course = action.payload;
            let ndx = state.findIndex(x => x.id == course.id);
            if (ndx >= 0) {
                return [...state.slice(0, ndx), ...state.slice(ndx + 1)];
            }
            return state;

        case AppActions.UPDATE_COURSE:
            return state.map(x => {
                if (x.id == action.payload.id) {
                    return Object.assign({}, x, action.payload);
                }
                return x;
            });

        default: return state;
    }
}