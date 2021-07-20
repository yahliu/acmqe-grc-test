/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import {
  userAccessSuccess,
  userAccessFailure,
  getUserAccessData,
} from '../../../src-web/actions/access'
import { accessItem } from './accessTestingData'

describe('test userAccessSuccess', () => {
  it('get userAccessSuccess as expected', () => {
    expect(userAccessSuccess(accessItem)).toMatchSnapshot()
  })
})

describe('test userAccessFailure', () => {
  it('get userAccessFailure as expected', () => {
    expect(userAccessFailure('Unable get user access info')).toMatchSnapshot()
  })
})

describe('test getUserAccessData', () => {
  it('get getUserAccessData as expected', () => {
    expect(getUserAccessData()).toMatchSnapshot()
  })
})
