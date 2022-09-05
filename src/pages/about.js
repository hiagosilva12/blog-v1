import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as S from "../Styles/about-styled"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <S.AboutWrapper>
      <h1>Em Manutenção</h1>
    </S.AboutWrapper>
  </Layout>
)

export default AboutPage
