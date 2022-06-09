import React from 'react';
import { useTranslation } from "react-i18next";
import * as S from './styles';

const About: React.FC = () => {
  const {t} = useTranslation();
  return (
    <S.Container>
      <S.Main>
        <S.TextCont>
          <S.TextTitle>{t("about")}</S.TextTitle>
          <S.Text>{t("textaboutp1")}</S.Text>
          <S.Text>{t("textaboutp2")}</S.Text>
          <S.Text>{t("textaboutp3")}</S.Text>
            <S.TextTitle>{t("titleprograming")}</S.TextTitle>
            
          <S.Text>{t("textprogramingp1")}</S.Text>

          <S.Text>{t("textprogramingp2")}</S.Text>
          <S.Text>{t("textprogramingp3")}</S.Text>
          
          <S.TextTitle>{t("titleevolution")}</S.TextTitle>
          <S.Text>{t("textevolutionp1")}</S.Text>
        </S.TextCont>
      </S.Main>
    </S.Container>
  )
}

export default About;