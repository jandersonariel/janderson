import React from 'react'
import * as S from './styles';

export const FooterComp = () =>  {
  return (
    <S.Footer>
      <a href="https://github.com/jandersonariel" target="_blank" rel="noopener noreferrer"> 
        <S.ImageIcon src="./github.svg" alt="GitHub"/>
      </a>
      <a href="https://www.linkedin.com/in/janderson-ariel-160053167/" target="_blank" rel="noopener noreferrer"> 
        <S.ImageIcon src="./linkedin.svg"/>
      </a>
      <a href="https://www.instagram.com/jandersonariel/" target="_blank" rel="noopener noreferrer">
        <S.ImageIcon src="./instagram.svg"/>
      </a>
      <a href="https://twitter.com/jandersonariel" target="_blank" rel="noopener noreferrer">
        <S.ImageIcon src="./twitter.svg"/>
      </a>
  </S.Footer>
  )
}