import * as React from 'react';
import {Provider as StoreProvider} from 'react-redux';

import {store} from './store';
import {Counter} from "./couner/Counter";
import {UpdateCounterPanel} from "./couner/UpdateCounterPanel";
import {TodoList} from "./users/TodoList";

// https://facebook.github.io/flux/
// https://facebook.github.io/flux/
// https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
// https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44
// https://habr.com/ru/company/ruvds/blog/426473/
// https://krasimirtsonev.com/blog/article/my-take-on-redux-architecture
// https://medium.com/weekly-webtips/2020-redux-tutorial-with-hooks-and-thunk-8a6a4be6f9de

const SimpleExample = () => {
  return <>
    <Counter/>
    <UpdateCounterPanel/>
  </>;
};

const AsyncExample = () => {
  return <TodoList />
}
export const RootComponent = () => {
  return <StoreProvider store={store}>
    <AsyncExample />
  </StoreProvider>;
};