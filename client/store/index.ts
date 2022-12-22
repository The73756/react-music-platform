import { Context, createWrapper } from 'next-redux-wrapper';
import { legacy_createStore, Store } from 'redux';
import { reducer, RootState } from './reducers';

const makeStore = (context: Context) => legacy_createStore(reducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
