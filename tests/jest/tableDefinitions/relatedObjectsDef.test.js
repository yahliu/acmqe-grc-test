/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'
import {
  buildViewYamlLink
} from '../../../src-web/tableDefinitions/relatedObjectsDef'

describe('tableDefinitions relatedObjectsDef - buildViewYamlLink', () => {
  it('should return valid yaml link with namespace', () => {
    const item = {
      cluster: 'testCluster',
      object: {
        apiVersion: 'testApiVersion',
        kind: 'testKind',
        metadata: {
          name: 'testName',
          namespace: 'testNamespace'
        }
      }
    }
    expect(buildViewYamlLink(item, 'us-en')).toMatchSnapshot()
  })

  it('should return valid yaml link without namespace', () => {
    const item = {
      cluster: 'testCluster',
      object: {
        apiVersion: 'testApiVersion',
        kind: 'testKind',
        metadata: {
          name: 'testName',
          namespace: ''
        }
      }
    }
    expect(buildViewYamlLink(item, 'us-en')).toMatchSnapshot()
  })

  it('should return empty yaml link', () => {
    const item = {
      cluster: '',
      object: {
        apiVersion: '',
        kind: '',
        metadata: {
          name: '',
          namespace: ''
        }
      }
    }
    expect(buildViewYamlLink(item, 'us-en')).toMatchSnapshot()
  })
})
