import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import reducers from './reducers';
import * as persistActionCreators from './reducers/persist/actions';
import createSocketIoMiddleware from "redux-socket.io";

import io from "socket.io-client/dist/socket.io";

let socket = io("http://localhost:3000", {jsonp:false});
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const log = createLogger({ diff: true, collapsed: true });
const middleware = [ReduxThunk, log, socketIoMiddleware];

const saveAndLoadSessionFilter = createFilter(
  'home',
  ['home']
);

const store = createStore(reducers, applyMiddleware(...middleware), autoRehydrate());

export const persist = persistStore(store, {
	storage: AsyncStorage,
	whitelist: ['home'],
	transforms: [saveAndLoadSessionFilter],
}, () => store.dispatch(persistActionCreators.update({ isHydrated: true })));

export default store;
