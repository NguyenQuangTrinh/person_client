import { configureStore } from '@reduxjs/toolkit'
import messagerReducer from './messager/messager.reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../reduxSaga/rootSaga';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    message: messagerReducer
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch