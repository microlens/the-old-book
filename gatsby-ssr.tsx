import React from 'react'
import type { GatsbySSR } from 'gatsby'
import { withPrefix } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key="favicon-ico"
      rel="icon"
      href={withPrefix('/favicon.ico')}
      type="image/x-icon"
    />,
  ])
}
