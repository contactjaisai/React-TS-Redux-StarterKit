// tslint:disable:no-console
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hashHistory, Route, Router } from 'react-router';

import { Provider } from 'react-redux';

import { DashboardPage } from './app/components/dashboard/DashboardPage';
import { HomePage } from './app/components/home/HomePage';

import { Hello } from './app/App';

import ConfigureStore from './app/store/ConfigureStore';

import { AddComment, LoadComment } from './app/actions/CommentActions';

const store = ConfigureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(AddComment({id: 1, text: 'Comment 1'}));
store.dispatch(AddComment({id: 2, text: 'Comment 2'}));
store.dispatch(AddComment({id: 3, text: 'Comment 3'}));
store.dispatch(LoadComment());

ReactDOM.render(
  (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Hello}>      
        <Route path="/home" component={HomePage}/>
        <Route path="/dashboard" component={DashboardPage}/>
      </Route>
    </Router>
  </Provider>
 ),
  document.getElementById('root'),
);
