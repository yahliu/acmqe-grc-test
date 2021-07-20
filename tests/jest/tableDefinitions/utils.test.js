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
import {
  createComplianceLink,
  getControls,
  getStandards,
  getCategories,
  getDecisionCount,
  formatAnnotationString,
  getPolicyCompliantStatus
} from '../../../src-web/tableDefinitions/utils'
import {
  disabledPolicyCompliantStatusItem,
  unavailableClusterCompliant,
  withClusterViolation,
  withoutClusterViolation,
  withUnknownClusterViolation
 } from './DefinitionsTestingData'

describe('tableDefinitions utils - createComplianceLink', () => {
  it('should return valid compliance link', () => {
    const item1 = {
      metadata: {
        name: 'testCreateComplianceLink1',
        namespace: 'testNamespace1'
      }
    }
    const param = ['param1', 'param2', 'param3']
    expect(createComplianceLink(item1, ...param)).toMatchSnapshot()

    const item2 = {
      metadata: {
        name: 'testCreateComplianceLink2',
        namespace: 'testNamespace2'
      },
      raw : {
        kind: 'Compliance'
      }
    }
    expect(createComplianceLink(item2)).toMatchSnapshot()

    const item3 = {
      metadata: {
        name: 'testCreateComplianceLink3',
        namespace: 'testNamespace3'
      },
      raw : {
        kind: 'Default'
      }
    }
    expect(createComplianceLink(item3)).toMatchSnapshot()
  })
})

describe('tableDefinitions utils - getControls', () => {
  it('should return control status', () => {
    const items = {
      metadata: {
        name: 'testGetControls',
        annotations: {
          'policy.open-cluster-management.io/controls': '1,2,3,4,5'
        }
      },
    }
    expect(getControls(items)).toMatchSnapshot()
  })
})

describe('tableDefinitions utils - getStandards', () => {
  it('should return standards status', () => {
    const items = {
      metadata: {
        name: 'testGetStandards',
        annotations: {
          'policy.open-cluster-management.io/standards': '6,7,8,9,10'
        }
      },
    }
    expect(getStandards(items)).toMatchSnapshot()
  })
})

describe('tableDefinitions utils - getCategories', () => {
  it('should return categories status', () => {
    const items = {
      metadata: {
        name: 'testGetCategories',
        annotations: {
          'policy.open-cluster-management.io/categories': '11,12,13,14,15'
        }
      },
    }
    expect(getCategories(items)).toMatchSnapshot()
  })
})

describe('tableDefinitions utils - getDecisionCount should return the total', () => {
  it('should return decisions status', () => {
    const items = {
      status: {
        decisions: [
          {clusterName:'clusterName1'},
          {clusterName:'clusterName2'},
          {clusterName:'clusterName3'}
        ]
      },
    }
    expect(getDecisionCount(items)).toMatchSnapshot()
  })
  it('tableDefinitions utils - getDecisionCount should return 0', () => {
    const items = {}
    expect(getDecisionCount(items)).toMatchSnapshot()
  })
})

describe('tableDefinitions utils - formatAnnotationString', () => {
  const policy = {
    metadata: {
      annotations: {
        'testKey': 'test1 test2,test3 ,  test4 test5',
      }
    }
  }
  it('should get list of annotations back with proper whitespace', () => {
    expect(formatAnnotationString(policy, 'testKey')).toMatchSnapshot()
  })
  it('should get "-" ', () => {
    const item = ''
    expect(formatAnnotationString(item)).toMatchSnapshot()
  })
  it('should get "-" ', () => {
    const item = null
    expect(formatAnnotationString(item)).toMatchSnapshot()
  })
})

describe('tableDefinitions utils - getPolicyCompliantStatus', () => {
  it('should return disabled policy compliant status', () => {
    expect(getPolicyCompliantStatus(disabledPolicyCompliantStatusItem, 'us')).toMatchSnapshot()
  })

  it('should return policy compliant status with unavailable cluster compliant', () => {
    expect(getPolicyCompliantStatus(unavailableClusterCompliant, 'us')).toMatchSnapshot()
  })

  it('should return policy compliant status with cluster violation', () => {
    expect(getPolicyCompliantStatus(withClusterViolation, 'us')).toMatchSnapshot()
  })

  it('should return policy compliant status without cluster violation', () => {
    expect(getPolicyCompliantStatus(withoutClusterViolation, 'us')).toMatchSnapshot()
  })

  it('should return policy compliant status with unknown cluster violation', () => {
    expect(getPolicyCompliantStatus(withUnknownClusterViolation, 'us')).toMatchSnapshot()
  })
})
