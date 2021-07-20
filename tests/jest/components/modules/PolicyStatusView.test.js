/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import renderer from 'react-test-renderer'
import React from 'react'
import PolicyStatusView from '../../../../src-web/components/modules/PolicyStatusView'
import * as reducers from '../../../../src-web/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import GrcApolloClient from '../../../../src-web/utils/client/apollo-client'
import { ApolloProvider } from '@apollo/client/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

describe('PolicyStatusView component', () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = [thunkMiddleware]
  const store = createStore(combineReducers(reducers), composeEnhancers(
    applyMiddleware(...middleware)
  ))
  it('renders as expected', () => {
    const component = renderer.create(
      <ApolloProvider client={GrcApolloClient.getGrcClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <PolicyStatusView
              items={[{ templateName: 'test-policy-name' }]}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('renders as expected with empty object', () => {
    const component = renderer.create(
      <ApolloProvider client={GrcApolloClient.getGrcClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <PolicyStatusView
              items={[{}]}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('renders empty state with no data', () => {
    const component = renderer.create(
      <ApolloProvider client={GrcApolloClient.getGrcClient()}>
        <Provider store={store}>
          <BrowserRouter>
            <PolicyStatusView
              items={[]}
            />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
