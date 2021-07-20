/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018, 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import React from 'react'
import App from '../../../src-web/containers/App'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import * as reducers from '../../../src-web/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import toJson from 'enzyme-to-json'

describe('App container test', () => {
  it('renders as expected', () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [thunkMiddleware]
    const store = createStore(combineReducers(reducers), composeEnhancers(
      applyMiddleware(...middleware)
    ))
    const match = {
      'path': '/multicloud/policies',
      'url': '/multicloud',
      'isExact': false,
      'params': {}
    }
    const component = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <App
            match={match}
            url={'/multicloud/policies'}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
