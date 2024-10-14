import { combineReducers } from 'redux';
import timelineReducer from './slices/timeline.js';
import activeReducer from './slices/active.js';
import indexReducer from './slices/index.js';

const rootReducer = combineReducers({
    timeline:timelineReducer,
    active:activeReducer,
    index:indexReducer
});

export default rootReducer;