import React from "react"
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"
import Img from "../../images/iconrea.png"

import * as S from "./styled"

const PostItem = ({ slug, date, title, description }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag>
        <S.Img src={Img} alt="Teste" />
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
