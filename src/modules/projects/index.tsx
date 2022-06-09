import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from '../../components/Card'
import * as S from "./styles";

const Projects: React.FC = () => {
  const {t} = useTranslation();
  return (
    <S.Container>
      <S.ContHeader>
      </S.ContHeader>
      <S.Main >
        <S.Text>{t("txprojects")}</S.Text>
        <S.CardCont>
           <Card 
            src="./cadusuariosgif.gif" 
            src2="./cadusuarios.png" 
            name={t("prcad")}
            text={t("prcaddesc")}
            href="https://github.com/jandersonariel/Cadastro-de-Usuario-React.js"
            nameModal={t("prcad")}
            textLanguage="JavaScript."
            textframework="React.js."
            textlibraries="Axios."
          />
          <Card 
            src="./podcastgif.gif" 
            src2="./podcast.png" 
            name="Podcast Nlw"
            text={t("prpoddesc")}
            href="https://github.com/jandersonariel/Podcastr3"
            nameModal="Podcast Nlw"
            textLanguage=" TypeScript."
            textframework="Next.js."
            textlibraries="React, Sass."
          />
          <Card 
            src="./clontwgif.gif" 
            src2="./clontw.png" 
            name="Clone Twitch"
            text={t("prtwidesc")}
            href="https://github.com/jandersonariel/Twitch-Clone"
            nameModal="Clone Twitch"
            textLanguage="TypeScript."
            textframework="React Native."
            textlibraries="Styled Components, Expo."
          />
          <Card 
            src="./kenyerestgif.gif" 
            src2="./kenyerest.png" 
            name={t("prpha")}
            text={t("prphadesc")}
            href="https://github.com/jandersonariel/API---Frases"
            nameModal={t("prpha")}
            textLanguage="JavaScript."
            textframework="React.js."
            textlibraries="Axios."
          />
          <Card 
            src="./dogapigif.gif" 
            src2="./dogapi.png" 
            name="Dog API"
            text={t("prdogdesc")}
            href="https://github.com/jandersonariel/Dog-Api"
            nameModal="Dog API"
            textLanguage=" TypeScript."
            textframework="React.js."
            textlibraries="Axios."
          />
          <Card 
            src="./calculatorgif.gif" 
            src2="./calculator.png" 
            name={t("prcal")}
            text={t("prcaldesc")}
            href="https://github.com/jandersonariel/Calculadora"
            nameModal={t("prcal")}
            textLanguage="JavaScript"
            textframework="React.js."
            textlibraries=""
          />
          <Card 
            src="./loadinggif.gif" 
            src2="./loading.png" 
            name={t("prcsstxanim")}
            text={t("prcsstxanimdesc")}
            href="https://github.com/jandersonariel/CodeSnippets/tree/main/LoaderAnimatioText"
            nameModal={t("prcsstxanim")}
            textLanguage="HTML, CSS."
            textframework=""
            textlibraries=""
          />
          <Card 
            src="./pulsategif.gif" 
            src2="./pulsate.png" 
            name={t("prcsspulls")}
            text={t("prcsspullsdesc")}
            href="https://github.com/jandersonariel/CodeSnippets/tree/main/PulsateCircle"
            nameModal={t("prcsspulls")}
            textLanguage="HTML, CSS."
            textframework=""
            textlibraries=""
          />
          <Card 
            src="./loaderwatergif.gif" 
            src2="./loaderWater.png" 
            name={t("prcssprog")}
            text={t("prcssprogdesc")}
            href="https://github.com/jandersonariel/CodeSnippets/tree/main/LoaderProgress"
            nameModal={t("prcssprog")}
            textLanguage="HTML, CSS."
            textframework=""
            textlibraries=""
          />
          <Card 
            src="./loaderanimationgif.gif" 
            src2="./loaderanimation.png" 
            name={t("prcssanim")}
            text={t("prcssanimdesc")}
            href="https://github.com/jandersonariel/CodeSnippets/tree/main/LoaderAnimation"
            nameModal={t("prcssanim")}
            textLanguage="HTML, CSS."
            textframework=""
            textlibraries=""
          />
          <Card 
            src="./spinnergif.gif" 
            src2="./spinner.png" 
            name={t("prcssspin")}
            text={t("prcssspindesc")}
            href="https://github.com/jandersonariel/CodeSnippets/tree/main/Spinner"
            nameModal={t("prcssspin")}
            textLanguage="HTML, CSS."
            textframework=""
            textlibraries=""
          />
          <Card 
            src="./bggradientgif.gif" 
            src2="./bggradient.png" 
            name={t("prcssgrad")}
            text={t("prcssgraddesc")}
            href="https://github.com/jandersonariel/CodeSnippets/tree/main/BackgroudGradient"
            nameModal={t("prcssgrad")}
            textLanguage="HTML, CSS."
            textframework=""
            textlibraries=""
          />
          
        </S.CardCont>
      </S.Main>
    </S.Container>
  );
};

export default Projects;