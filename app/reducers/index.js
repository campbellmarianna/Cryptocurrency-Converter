// if not using React still the same
import { combineReducers } from 'redux';

import currencies from './currencies';

// organize our Reducers that is easy to maintain - func with argument all our different reducers
export default combineReducers({
  currencies,
});
