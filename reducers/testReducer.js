import { combineReducers } from 'redux';


const INITIAL_STATE = {
  count: 0
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
        case 'INCREMENT':
          // pull current count out of state
          // don't modify directly in case another action is modifying concurrently
            let {count} = state;
            count += 1;
            const newState = {count};
            return newState;
        default:
            return state;
  }
};

export default combineReducers({
  testR: testReducer,
});