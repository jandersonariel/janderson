import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const Home: React.FC = () => {
  const {t} = useTranslation();
  const [gretting, setGrettings] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if(currentHour < 12) {
      setGrettings(t('goodmorning'));
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGrettings(t('goodafternoon'));
    }else{
      setGrettings(t('goodnight'));
    }
  }, [t])
  return (
    <S.Container>
      <S.ContHeader>
      </S.ContHeader>
      <S.Main >
        <S.MainText>
          <S.Text1>{t("hi")+", " + gretting}</S.Text1>
          <S.TextName>{t("name")}</S.TextName>
          <S.Text2>Front-End Developer</S.Text2>  
          <S.Text3>{t("welcome")}</S.Text3>  
        </S.MainText>
        <S.ContImg>
          <S.Image src="./jan.png" alt="myp"/>  
        </S.ContImg>
      </S.Main>
    </S.Container>
  );
};

export default Home;