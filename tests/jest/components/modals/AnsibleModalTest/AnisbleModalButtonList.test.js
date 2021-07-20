/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import { buildModalButtonList } from '../../../../../src-web/components/modals/AnsibleAutomationModal/AnisbleModalButtonList'

describe('render action buttons on ansible modal', () => {
  it('render no action button for ansible history page', () => {
    // activeItem === 1 means ansible history page
    const component = buildModalButtonList({
      activeItem: 1, opInstalled: true,
      policyAutoName: 'test-policy-3-1624936287-policy-automation', locale: 'us',
      handleSubmitClick:jest.fn(), handleCloseClick:jest.fn(), handleOpenDelModal:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render disabled action button when ansible operator isn not installed but there is automation', () => {
    const component = buildModalButtonList({
      activeItem: 0, opInstalled: false,
      policyAutoName: 'test-policy-3-1624936287-policy-automation', locale: 'us',
      handleSubmitClick:jest.fn(), handleCloseClick:jest.fn(), handleOpenDelModal:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render two action buttons without delete button when no policy automation', () => {
    const component = buildModalButtonList({
      activeItem: 0, opInstalled: true,
      policyAutoName: '', locale: 'us',
      handleSubmitClick:jest.fn(), handleCloseClick:jest.fn(), handleOpenDelModal:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render three action buttons with delete button', () => {
    const component = buildModalButtonList({
      activeItem: 0, opInstalled: true,
      policyAutoName: 'test-policy-3-1624936287-policy-automation', locale: 'us',
      handleSubmitClick:jest.fn(), handleCloseClick:jest.fn(), handleOpenDelModal:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render three action buttons with disabled delete button with editOnly', () => {
    const component = buildModalButtonList({
      onlyEdit: true, activeItem: 0, opInstalled: true,
      policyAutoName: 'test-policy-3-1624936287-policy-automation', locale: 'us',
      handleSubmitClick:jest.fn(), handleCloseClick:jest.fn(), handleOpenDelModal:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })
})
