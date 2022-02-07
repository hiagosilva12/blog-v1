import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"
import Avatar from "../Avatar"
const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query alldata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg="#16202c" duration={0.6}>
        <Avatar />
        <S.ProfileName>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileName>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
