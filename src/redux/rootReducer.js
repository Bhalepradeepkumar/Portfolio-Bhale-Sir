import { combineReducers } from 'redux';
import timelineReducer from './slices/timeline.js';
import activeReducer from './slices/active.js';
import indexReducer from './slices/index.js';
import researchReducer from './slices/research.js';

const rootReducer = combineReducers({
    timeline:timelineReducer,
    active:activeReducer,
    index:indexReducer,
    research:researchReducer
});

export default rootReducer;