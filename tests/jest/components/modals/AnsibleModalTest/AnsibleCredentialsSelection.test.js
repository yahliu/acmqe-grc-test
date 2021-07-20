/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import { renderAnsibleCredentialsSelection } from '../../../../../src-web/components/modals/AnsibleAutomationModal/AnsibleCredentialsSelection'

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

describe('render AnsibleCredential component', () => {
  it('render AnsibleCredential component1', () => {
    const component = renderAnsibleCredentialsSelection({
      data, locale: 'us', credentialName: 'grc-testing', credentialIsOpen: false,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render AnsibleCredential component2', () => {
    const component = renderAnsibleCredentialsSelection({
      data, locale: 'us', credentialName: 'grc-testing', credentialIsOpen: true,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render AnsibleCredential component3', () => {
    const component = renderAnsibleCredentialsSelection({
      data, locale: 'us', credentialName: '', credentialIsOpen: true,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })

  it('render empty AnsibleCredential component4', () => {
    const component = renderAnsibleCredentialsSelection({
      data: {ansibleCredentials: ''}, locale: 'us', credentialName: 'grc-testing', credentialIsOpen: false,
      setCredentialsSelectionValue:jest.fn(), onCredentialsSelectionToggle:jest.fn(),
      renderAnsibleJobTemplatesSelection:jest.fn(), getAnsibleConnection:jest.fn()
    })
    expect(component).toMatchSnapshot()
  })
})
