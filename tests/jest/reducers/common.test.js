/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018, 2020. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

/*
For a given input, a selector should always produce the same output.
 */

import {
  resourceToolbar, secondaryHeader,
  resourceReducerFunction,
  INITIAL_STATE
} from '../../../src-web/reducers/common'
import { RESOURCE_TYPES } from '../../../src-web/utils/constants'

describe('resourceToolbar creation', () => {
  it('should return a default state', () => {
    const action = {}
    const expectedValue = {}
    expect(resourceToolbar(undefined, action)).toEqual(expectedValue)
  })
  it('should return a state with activeFilters', () => {
    const state = {
      activeFilters: 'activeFilters1'
    }
    const action = {
      activeFilters: 'activeFilters2',
      type: 'ACTIVE_FILTER_UPDATE'
    }
    const expectedValue = {
      activeFilters: 'activeFilters2'
    }
    expect(resourceToolbar(state, action)).toEqual(expectedValue)
  })
  it('should return a state with availableFilters2', () => {
    const state = {
      availableFilters: 'availableFilters1'
    }
    const action = {
      availableFilters: 'availableFilters2',
      type: 'AVAILABLE_FILTER_UPDATE'
    }
    const expectedValue = {
      availableFilters: 'availableFilters2'
    }
    expect(resourceToolbar(state, action)).toEqual(expectedValue)
  })
})

describe('secondaryHeader creation', () => {
  it('should return a default state', () => {
    const action = {}
    const expectedValue = {
      title: '',
      tabs: [],
      breadcrumbItems: [],
      links: [],
      description: {},
      information:{}
    }
    expect(secondaryHeader(undefined, action)).toEqual(expectedValue)
  })
  it('should return a state with title', () => {
    const state = {}
    const action = {
      title: 'Clusters',
      tabs: '',
      breadcrumbItems: '',
      links: '',
      type: 'SECONDARY_HEADER_UPDATE'
    }
    const expectedValue = {
      title: 'Clusters',
      tabs: '',
      breadcrumbItems: '',
      links: ''
    }
    expect(secondaryHeader(state, action)).toEqual(expectedValue)
  })
})

describe('ResourceReducer creation', () => {
  it('should return a default state', () => {
    const action = {}
    const expectedValue = {
      title: '',
      tabs: [],
      breadcrumbItems: [],
      links: [],
      description: {},
      information:{}
    }
    expect(secondaryHeader(undefined, action)).toEqual(expectedValue)
  })
  it('should return a state with title', () => {
    const state = {}
    const action = {
      title: 'Clusters',
      tabs: '',
      breadcrumbItems: '',
      links: '',
      type: 'SECONDARY_HEADER_UPDATE'
    }
    const expectedValue = {
      title: 'Clusters',
      tabs: '',
      breadcrumbItems: '',
      links: ''
    }
    expect(secondaryHeader(state, action)).toEqual(expectedValue)
  })
})

describe('resourceReducerFunction', () => {
  it('should return the initial state', () => {
    const action = {
      type: null
    }
    expect(resourceReducerFunction(undefined, action)).toEqual(INITIAL_STATE)
  })
  it('should return the initial state', () => {
    const action = {
      type: 'unit-test'
    }
    expect(resourceReducerFunction(undefined, action)).toEqual(INITIAL_STATE)
  })
  it('should return a state with IN_PROGRESS status', () => {
    const state = {
      test: 'test',
      status: 'INCEPTION'
    }
    const action = {
      status: 'IN_PROGRESS',
      type: 'RESOURCE_REQUEST',
    }
    const expectedValue = {
      test: 'test',
      status: 'IN_PROGRESS'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with DONE status', () => {
    const state1 = {
      test: 'test',
      itemsPerPage: 1,
      page: 1
    }
    const state2 = {
      test: 'test',
      itemsPerPage: 100,
      page: 5
    }
    const action1 = {
      type: 'RESOURCE_RECEIVE_SUCCESS',
      items: [],
      resourceVersion: 0
    }
    const action2 = {
      type: 'RESOURCE_RECEIVE_SUCCESS',
      items: [
        {
          '__typename': 'Compliance',
          'metadata': {
            '__typename': 'Metadata',
            'name': 'policy-complianceoperator',
            'namespace': 'default',
            'selfLink': '/apis/policy.open-cluster-management.io/v1/namespaces/default/policies/policy-complianceoperator',
            'annotations': {
              'policy.open-cluster-management.io/categories': 'PR.IP Information Protection Processes and Procedures',
              'policy.open-cluster-management.io/controls': 'PR.IP-1 Baseline Configuration',
              'policy.open-cluster-management.io/standards': 'NIST-CSF'
            },
            'resourceVersion': '91729'
          },
          'name': 'policy-complianceoperator',
          'namespace': 'default',
          'remediation': 'enforce',
          'policyCompliant': '0/0',
          'clusterCompliant': '0/1/0',
          'clusterNS': {
            'local-cluster': 'local-cluster'
          },
          'clusterConsoleURL': {
            'local-cluster': 'https://console-openshift-console.apps.policy-grc-cp-autoclaims-9jswd.dev08.red-chesterfield.com'
          },
          'subItems': [
            {
              'name': 'policy.pb',
              'items': []
            },
            {
              'name': 'policy.pp',
              'items': []
            }
          ]
        },
        {
          '__typename': 'Compliance',
          'metadata': {
            '__typename': 'Metadata',
            'name': 'policy-e8-scan',
            'namespace': 'default',
            'selfLink': '/apis/policy.open-cluster-management.io/v1/namespaces/default/policies/policy-e8-scan',
            'annotations': {
              'policy.open-cluster-management.io/categories': 'CM Configuration Management',
              'policy.open-cluster-management.io/controls': 'CM-6 Configuration Settings',
              'policy.open-cluster-management.io/standards': 'NIST SP 800-53'
            },
            'resourceVersion': '289855'
          },
          'name': 'policy-e8-scan',
          'namespace': 'default',
          'remediation': 'enforce',
          'policyCompliant': '0/0',
          'clusterCompliant': '-',
          'clusterNS': {
            'local-cluster': 'local-cluster'
          },
          'clusterConsoleURL': {
            'local-cluster': 'https://console-openshift-console.apps.policy-grc-cp-autoclaims-9jswd.dev08.red-chesterfield.com'
          },
          'subItems': [
            {
              'name': 'policy.pb',
              'items': []
            },
            {
              'name': 'policy.pp',
              'items': []
            }
          ]
        }
      ],
      resourceVersion: 0
    }
    const expectedValue = {
      test: 'test',
      status: 'DONE',
      items: [],
      page: 1,
      itemsPerPage: 1,
      resourceVersion: 0
    }
    expect(resourceReducerFunction(state1, action1)).toEqual(expectedValue)
    expect(resourceReducerFunction(state1, action2)).toMatchSnapshot()
    expect(resourceReducerFunction(state2, action2)).toMatchSnapshot()
  })
  it('should return a state with ERROR status', () => {
    const state = {
      test: 'test',
    }
    const action = {
      type: 'RESOURCE_RECEIVE_FAILURE',
      err: 'error'
    }
    const expectedValue = {
      test: 'test',
      status: 'ERROR',
      err: 'error'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with post:IN_PROGRESS status', () => {
    const state = {
      test: 'test',
    }
    const action = {
      type: 'POST_REQUEST',
    }
    const expectedValue = {
      test: 'test',
      postStatus: 'IN_PROGRESS'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with post:DONE status', () => {
    const state = {
      test: 'test',
      items: ['test']
    }
    const action = {
      type: 'POST_RECEIVE_SUCCESS',
      item: ['test1']
    }
    const expectedValue = {
      test: 'test',
      items: ['test', 'test1'],
      postStatus: 'DONE'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with post:DONE status', () => {
    const state = {
      test: 'test',
      items: ['test']
    }
    const action = {
      type: 'POST_RECEIVE_SUCCESS',
      item: []
    }
    const expectedValue = {'items': ['test', []], 'postStatus': 'DONE', 'test': 'test'}
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with post:ERROR status', () => {
    const state = {
      test: 'test'
    }
    const action = {
      type: 'POST_RECEIVE_FAILURE',
      err: {
        error: {
          response: {
            status: 404
          },
          message: 'error'
        }
      }
    }
    const expectedValue = {
      test: 'test',
      postStatusCode: 404,
      postErrorMsg: 'error',
      postStatus: 'ERROR'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with put:IN_PROGRESS status', () => {
    const state = {
      test: 'test',
    }
    const action = {
      type: 'PUT_REQUEST',
    }
    const expectedValue = {
      test: 'test',
      putStatus: 'IN_PROGRESS'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with put:DONE status', () => {
    const state = {
      test: 'test',
    }
    const action = {
      type: 'PUT_RECEIVE_SUCCESS',
    }
    const expectedValue = {
      test: 'test',
      putStatus: 'DONE'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state with put:ERROR status', () => {
    const state = {
      test: 'test'
    }
    const action1 = {
      type: 'PUT_RECEIVE_FAILURE',
      err: {
        error: {
          message: 'error'
        }
      }
    }
    const action2 = {
      type: 'PUT_RECEIVE_FAILURE',
      err: {
        message: 'error'
      }
    }
    const expectedValue = {
      test: 'test',
      putErrorMsg: 'error',
      putStatus: 'ERROR'
    }
    expect(resourceReducerFunction(state, action1)).toEqual(expectedValue)
    expect(resourceReducerFunction(state, action2)).toEqual(expectedValue)
  })

  it('should return a state with PATCH request', () => {
    const state = {
      test: 'test'
    }
    const action = {
      type: 'PATCH_REQUEST',
    }
    const expectedValue = {
      test: 'test',
      patchStatus: 'IN_PROGRESS'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })

  it('should return a state with PATCH RECEIVE SUCCESS', () => {
    const state = {
      test: 'test'
    }
    const action = {
      type: 'PATCH_RECEIVE_SUCCESS',
    }
    const expectedValue = {
      test: 'test',
      patchStatus: 'DONE'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })

  it('should return a state with PATCH RECEIVE FAILURE', () => {
    const state = {
      test: 'test'
    }
    const action1 = {
      type: 'PATCH_RECEIVE_FAILURE',
      err: {
        error: {
          message: 'error'
        }
      }
    }
    const action2 = {
      type: 'PATCH_RECEIVE_FAILURE',
      err: {
        message: 'error'
      }
    }
    const expectedValue = {
      test: 'test',
      patchErrorMsg: 'error',
      patchStatus: 'ERROR'
    }
    expect(resourceReducerFunction(state, action1)).toEqual(expectedValue)
    expect(resourceReducerFunction(state, action2)).toEqual(expectedValue)
  })

  it('should return a state with clear action', () => {
    const state = {
      test: 'test',
    }
    const action = {
      type: 'CLEAR_REQUEST_STATUS',
    }
    const expectedValue = {
      test: 'test',
      postStatus: undefined,
      postStatusCode: undefined,
      postErrorMsg: undefined,
      putStatus: undefined,
      putErrorMsg: undefined
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state for resource mutate action', () => {
    const state = {
      test: 'test',
      items: ['test'],
      pendingActions:[{name:'TEST_RESOURCE_MUTATE'}, {name:'TEST_RESOURCE_MUTATE_FAILURE'}],
    }
    const action = {
      resourceName: 'TEST_RESOURCE_MUTATE',
      type: 'RESOURCE_MUTATE',
      resourceType:{
        query: 'PoliciesList',
        name: 'Policy'
      }
    }
    const expectedValue = {
      'items': ['test'],
      'mutateErrorMsg': null,
      'mutateStatus': 'IN_PROGRESS',
      'pendingActions': [
        {
          'name': 'TEST_RESOURCE_MUTATE'
        },
        {
          'name': 'TEST_RESOURCE_MUTATE_FAILURE'
        },
        {
          'action': 'RESOURCE_MUTATE',
          'name': 'TEST_RESOURCE_MUTATE'
        }
      ],
      'test': 'test'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state for resource mutate failure action', () => {
    const state = {
      test: 'test',
      items: ['test'],
      pendingActions:[{name:'TEST_RESOURCE_MUTATE'}, {name:'TEST_RESOURCE_MUTATE_FAILURE'}],
    }
    const action = {
      resourceName: 'TEST_RESOURCE_MUTATE_FAILURE',
      type: 'RESOURCE_MUTATE_FAILURE',
      resourceType:{
        query: 'PoliciesList',
        name: 'Policy'
      },
      err:{
        message:'errorMessage',
        error:'errorError',
        data:{
          message:'errorDataMessage',
        }
      }
    }
    const expectedValue = {
      'items': ['test'],
      'mutateErrorMsg': 'errorMessage',
      'mutateStatus': 'ERROR',
      'pendingActions': [
        {
          'name': 'TEST_RESOURCE_MUTATE'
        }
      ],
      'test': 'test'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state for resource mutate success action', () => {
    const state = {
      test: 'test',
      items: ['test'],
      pendingActions:[{name:'TEST_RESOURCE_MUTATE'}, {name:'TEST_RESOURCE_MUTATE_FAILURE'}],
    }
    const action = {
      resourceName: 'TEST_RESOURCE_MUTATE_FAILURE',
      type: 'RESOURCE_MUTATE_SUCCESS',
      resourceType:{
        query: 'PoliciesList',
        name: 'Policy'
      },
      err:{
        message:'errorMessage',
        error:'errorError',
        data:{
          message:'errorDataMessage',
        }
      }
    }
    const expectedValue =  {
      'items': ['test'],
      'mutateStatus': 'DONE',
      'pendingActions': [
        {
          'name': 'TEST_RESOURCE_MUTATE'
        }
      ],
      'test': 'test'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state for delete receive success action', () => {
    const state = {
      test: 'test',
      items: [{namespace: 'namespace', name: 'name'}]
    }
    const action = {
      type: 'DEL_RECEIVE_SUCCESS',
      resourceType: RESOURCE_TYPES.POLICIES_BY_POLICY,
      resource: {
        namespace: 'namespace',
        name: 'name'
      }
    }
    const expectedValue = {
      test: 'test',
      items: []
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state for delete receive success action', () => {
    const state = {
      test: 'test',
      items: []
    }
    const action = {
      type: 'DEL_RECEIVE_SUCCESS',
      resourceType: RESOURCE_TYPES.HCM_CLUSTERS
    }
    const expectedValue = {
      test: 'test',
      items: []
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
  it('should return a state for non-existing action', () => {
    const state = {
      test: 'test'
    }
    const action = {
      type: 'unit-test'
    }
    const expectedValue = {
      test: 'test'
    }
    expect(resourceReducerFunction(state, action)).toEqual(expectedValue)
  })
})
