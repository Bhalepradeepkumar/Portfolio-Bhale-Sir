import { combineReducers } from 'redux';
import timelineReducer from './slices/timeline.js';
import activeReducer from './slices/active.js';

const rootReducer = combineReducers({
    timeline:timelineReducer,
    active:activeReducer
});

export default rootReducer;