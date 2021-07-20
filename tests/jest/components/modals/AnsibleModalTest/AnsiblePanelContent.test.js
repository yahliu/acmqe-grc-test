/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import { renderAnsiblePanelContent } from '../../../../../src-web/components/modals/AnsibleAutomationModal/AnsiblePanelContent'

const data = {
  ansibleCredentials: [
    {
      '__typename': 'AnsibleCredential',
      'name': 'grc-testing-new',
      'namespace': 'default',
      'host': 'https://ansible-tower-web-svc-tower.apps.policy-grc-cp-dev-jbwbd.dev08.red-chesterfield.com',
      'token': '123456'
    }
  ]
}

describe('render AnsiblePanel component', () => {
  it('render AnsiblePanel component1', () => {
    const component = renderAnsiblePanelContent({
      data, activeItem:0, locale: 'us', handleTabClick:jest.fn(),
      credentialName: 'grc-testing', credentialIsOpen: true,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render AnsiblePanel component2', () => {
    const component = renderAnsiblePanelContent({
      data, activeItem:1, locale: 'us', handleTabClick:jest.fn(),
      credentialName: 'grc-testing', credentialIsOpen: false,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render AnsiblePanel component3', () => {
    const component = renderAnsiblePanelContent({
      data, activeItem:0, locale: 'us', handleTabClick:jest.fn(),
      credentialName: '', credentialIsOpen: true,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render empty AnsiblePanel component4', () => {
    const component = renderAnsiblePanelContent({
      data:{ansibleCredentials: ''}, activeItem:0, locale: 'us', handleTabClick:jest.fn(),
      credentialName: '', credentialIsOpen: true,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })
})
