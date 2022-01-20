import React from "react"

import Img from "../../images/iconrea.png"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag>
        <S.Img src={Img} alt="Teste" />
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>13 de Janeiro de 2022</S.PostItemDate>
        <S.PostItemTitle>Hiago publicou.</S.PostItemTitle>
        <S.PostItemDescription>
          "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de
          um problema."
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
