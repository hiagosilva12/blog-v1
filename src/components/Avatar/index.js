import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 80, height: 80, layout: FIXED)
          }
        }
      }
    `
  )

  const Img = getImage(avatarImage)

  return (
    <>
      <S.AvatarWrapper image={Img} />
    </>
  )
}

export default Avatar
