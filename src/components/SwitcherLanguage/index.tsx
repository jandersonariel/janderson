import React from 'React'
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const languageOptions = [
  {
    name: 'Portugues',
    value: 'ptBR',
    flag: './br.svg'
  },
  {
    name: 'ingles',
    value: 'en',
    flag: './us.svg'
  },
]

export const SwitcherLanguage = () =>  {
  const {t, i18n} = useTranslation();
  return (
    < >
      {languageOptions.map((languageOption) => (
        <S.Button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}

          style={{
            opacity: i18n.language === languageOption.value ? "" : "0.3",
          }}
        >
          <S.Image 
            src={languageOption.flag}
            alt={languageOption.name}
          />
        </S.Button>
     ))}
    </>
  );
};