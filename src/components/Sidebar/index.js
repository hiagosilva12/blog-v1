import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import * as S from "./styled"
const Sidebar = () => (
  <S.SidebatWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebatWrapper>
)

export default Sidebar
