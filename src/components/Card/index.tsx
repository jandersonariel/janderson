import * as S from './styles';
import {GitIcon} from './assets/gitsvg'
import { ModalComp } from '../Modal';

interface CardProp { 
  src: string;
  src2: string;
  name: string;
  text: string;
  href: string;
  nameModal: string;
  textLanguage?: string;
  textframework?: string;
  textlibraries?: string;
}

export const Card = (prop: CardProp) =>  {
  return (
    <S.CardCont>
      <S.GifCont>
        <S.Gif src={prop.src}/>
        <S.Gif src={prop.src2}/>
      </S.GifCont>
        <S.NameCont>
          <S.Text>{prop.name}</S.Text>
        <a href={prop.href} target="_blank" rel="noopener noreferrer"> 
          <GitIcon/>
        </a>
        </S.NameCont>
        <S.DescriptionCont>
          <S.Text2>{prop.text}</S.Text2>
        </S.DescriptionCont>
        <S.Footer>
          <ModalComp name={prop.nameModal} language={prop.textLanguage} framework={prop.textframework} libraries={prop.textlibraries}/>
        </S.Footer>
    </S.CardCont>
  )
}