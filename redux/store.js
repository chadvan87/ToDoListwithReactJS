import {createStore} from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancers);
// tao store bang create store nhan vao 3 tham so
/**
 * rootReducer : de cap nhat lai state
 * initValue: de set gia tri mac dinh
 * enhancer: de su dung middleware pho bien redux saga, thunk
 */
export default store;