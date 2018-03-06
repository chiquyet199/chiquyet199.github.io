import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Switch, Route} from 'react-router-dom'

import store from 'configs/store'
import { HomeScreen } from 'screens'

import 'assets/stylesheets/base.scss'

render(
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
    </Switch>
  </Provider>,
  document.getElementById('root'),
)
