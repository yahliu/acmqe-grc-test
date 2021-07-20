/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'
import {
  buildAnsibleJobStatus,
  buildViewJobLink
} from '../../../src-web/tableDefinitions/ansibleJobHistoryDef'

describe('tableDefinitions ansibleJobHistoryDef - buildAnsibleJobStatus', () => {
  it('should return successful anisble job status', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: 'Successful',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildAnsibleJobStatus(item, 'us-en')).toMatchSnapshot()
  })

  it('should return error anisble job status', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: 'Error',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildAnsibleJobStatus(item, 'us-en')).toMatchSnapshot()
  })

  it('should return failed anisble job status', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: 'Failed',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildAnsibleJobStatus(item, 'us-en')).toMatchSnapshot()
  })

  it('should return no anisble job status', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: '-',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildAnsibleJobStatus(item, 'us-en')).toMatchSnapshot()
  })

  it('should return no anisble job status', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: '',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildAnsibleJobStatus(item, 'us-en')).toMatchSnapshot()
  })

  it('should return other anisble job status', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: 'Other anisble job status',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildAnsibleJobStatus(item, 'us-en')).toMatchSnapshot()
  })
})

describe('tableDefinitions ansibleJobHistoryDef - buildViewJobLink', () => {
  it('should return valid anisble job link', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: 'Successful',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: 'default/policy-pod-policy-automation-once-hd5xz'
    }
    expect(buildViewJobLink(item, 'us-en')).toMatchSnapshot()
  })

  it('should return empty anisble job link', () => {
    const item = {
      __typename: 'AnsibleAutomationHistory',
      name: 'policy-pod-policy-automation-once-hd5xz',
      message: 'Awaiting next reconciliation',
      status: 'Successful',
      started: '2021-06-03T14:44:43Z',
      finished: null,
      job: ''
    }
    expect(buildViewJobLink(item, 'us-en')).toMatchSnapshot()
  })
})
