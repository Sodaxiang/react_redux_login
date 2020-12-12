import {combineReducers } from 'redux';

import auth from './auth';
import flashMessages from './flash';

const rootReducers = combineReducers({
    auth,
    flashMessages
});

export default rootReducers;