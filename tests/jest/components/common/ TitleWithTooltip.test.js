/* Copyright (c) 2021 Red Hat, Inc. */
/* Copyright Contributors to the Open Cluster Management project */

'use strict'

import TitleWithTooltip from '../../../../src-web/components/common/TitleWithTooltip'

describe('TitleWithTooltip', () => {
  it('renders as expected for TitleWithTooltip', () => {
    const props = {
      className:'testingTitleWithTooltip',
      headingLevel:'h3',
      position:'top',
      title:'this is the title to test TitleWithTooltip',
      tooltip:'this is the tooltip to test TitleWithTooltip',
    }
    expect(TitleWithTooltip(props)).toMatchSnapshot()
  })
})
