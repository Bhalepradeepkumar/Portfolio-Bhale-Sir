import { combineReducers } from 'redux';
import timelineReducer from './slices/timeline.js';

const rootReducer = combineReducers({
    timeline:timelineReducer
});

export default rootReducer;