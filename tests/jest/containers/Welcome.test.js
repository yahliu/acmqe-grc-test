/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import WelcomeStatic from '../../../src-web/containers/Welcome'

describe('Welcome component', () => {
    it('renders as expected', () => {
      const component = renderer.create(
        <WelcomeStatic />
      )
      expect(component.toJSON()).toMatchSnapshot()
    })
})
