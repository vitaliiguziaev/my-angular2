import { Author } from './../../../services/AuthorService';
import { AppActions } from './../../../app.actions';

export const authorsReducer = (state: Author[] = [], action) => {
    switch (action.type) {
        case AppActions.AUTHORS_LOADED:
            return action.payload;

        default: return state;
    }
}