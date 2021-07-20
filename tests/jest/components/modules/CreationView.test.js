/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */


'use strict'

import React from 'react'
import CreationView from '../../../../src-web/components/modules/CreationView'
import { reduxStorePolicyCluster } from '../ComponentsTestingData'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
// import renderer from 'react-test-renderer'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

const mockStore = configureMockStore()
const storePolicyCluster = mockStore(reduxStorePolicyCluster)

// Mock YamlEditor since we aren't passing it any actual data
jest.mock('../../../../src-web/components/common/YamlEditor', () => {
  return function mockYamlEditor() {
    return <div data-testid='mockYamlEditor' />
  }
})

const emptyDiscoveries = {
  '__typename': 'Discoveries',
  'clusterLabels': [],
  'policyNames': [],
  'annotations': {
    '__typename': 'Annotations',
    'standards': [],
    'categories': [],
    'controls': []
  },
  'templates': [],
  'namespaces': []
}

const discoveries = {
  '__typename': 'Discoveries',
  'clusterLabels': [
    {
      'key': 'mycluster',
      'value': 'test-cluster'
    }
  ],
  'policyNames': [
    'policy-testpolicy'
  ],
  'annotations': {
    '__typename': 'Annotations',
    'standards': [
      'test-standard'
    ],
    'categories': [
      'test-category'
    ],
    'controls': [
      'test-control'
    ]
  },
  'templates': [
    'test-template'
  ],
  'namespaces': [
    'test-namespace'
  ]
}

describe('CreationView module', () => {
  it('renders as expected with discovered data', () => {
    const component = render(
      <Provider store={storePolicyCluster}>
        <BrowserRouter>
          <CreationView
            onCreate={jest.fn()}
            discovered={discoveries}
            createControl={{
              cancelCreate: jest.fn(),
              createResource: jest.fn(),
            }}
            fetchControl={{
              error: null,
              isLoaded: true,
              isFailed: false,
            }}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders as expected with empty discovered data', () => {
    const component = render(
      <Provider store={storePolicyCluster}>
        <BrowserRouter>
          <CreationView
            onCreate={jest.fn()}
            discovered={emptyDiscoveries}
            createControl={{
              cancelCreate: jest.fn(),
              createResource: jest.fn(),
            }}
            fetchControl={{
              error: null,
              isLoaded: true,
              isFailed: false,
            }}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders as expected without discovered data', () => {
    const component = render(
      <Provider store={storePolicyCluster}>
        <BrowserRouter>
          <CreationView
            onCreate={jest.fn()}
            createControl={{
              cancelCreate: jest.fn(),
              createResource: jest.fn(),
            }}
            fetchControl={{
              error: null,
              isLoaded: true,
              isFailed: false,
            }}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders with spinner when loading', () => {
    const component = render(
      <Provider store={storePolicyCluster}>
        <BrowserRouter>
          <CreationView
            onCreate={jest.fn()}
            createControl={{
              cancelCreate: jest.fn(),
              createResource: jest.fn(),
            }}
            fetchControl={{
              error: null,
              isLoaded: false,
              isFailed: false,
            }}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders with notification on permission error', () => {
    const component = render(
      <Provider store={storePolicyCluster}>
        <BrowserRouter>
          <CreationView
            onCreate={jest.fn()}
            createControl={{
              cancelCreate: jest.fn(),
              createResource: jest.fn(),
            }}
            fetchControl={{
              error: {
                name: 'PermissionError',
              },
              isLoaded: true,
              isFailed: true,
            }}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders with notification on general error', () => {
    const component = render(
      <Provider store={storePolicyCluster}>
        <BrowserRouter>
          <CreationView
            onCreate={jest.fn()}
            createControl={{
              cancelCreate: jest.fn(),
              createResource: jest.fn(),
            }}
            fetchControl={{
              error: {
                name: 'Error',
              },
              isLoaded: true,
              isFailed: true,
            }}
          />
        </BrowserRouter>
      </Provider>
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
