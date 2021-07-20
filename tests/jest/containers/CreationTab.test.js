/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { CreationTab } from '../../../src-web/containers/CreationTab'

const match = {
  'path': '/multicloud/policies/all/:namespace/:name',
  'url': '/multicloud/policies/all/default/policy-certificatepolicy',
  'isExact': true,
  'params': {
    'name': 'policy-certificatepolicy',
    'namespace': 'default',
  }
}

describe('CreationTab container', () => {
  it('renders as expected', () => {
    const component = shallow(<CreationTab
      secondaryHeaderProps={{title:'testing1'}}
      updateSecondaryHeader={jest.fn()}
      mutateStatus={'DONE'}
      match={match}
    />)
    expect(component.instance()).toMatchSnapshot()
  })

  it('renders as expected', () => {
    const component = shallow(<CreationTab
      secondaryHeaderProps={{title:'testing2'}}
      handleCreateResources={jest.fn()}
      match={match}
    />)
    expect(component.instance()).toMatchSnapshot()
    component.instance().handleCreate()
    component.instance().handleCancel()
  })
})
