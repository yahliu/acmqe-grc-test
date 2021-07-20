/* Copyright (c) 2020 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import { renderAnsibleOperatorNotInstalled } from '../../../../../src-web/components/modals/AnsibleAutomationModal/AnsibleOperatorNotInstalled'

describe('render AnsibleOperatorNotInstalled component', () => {
  it('AnsibleOperatorNotInstalled link renders as expected', () => {
    const component = renderAnsibleOperatorNotInstalled('us')
    expect(component).toMatchSnapshot()
  })
})
