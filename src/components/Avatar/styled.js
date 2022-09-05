import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import media from "styled-media-query"

export const AvatarWrapper = styled(GatsbyImage, getImage)`
  border-radius: 50%;
  margin: auto;
  height: 3.75rem;
  width: 3.75rem;
  ${media.lessThan("large")`
  height: 3.875rem;
  width: 3.875rem;
  `}
`