import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { SwitcherLanguage } from "../SwitcherLanguage";
import { TextButton } from "../TextButton";
import { IoIosList } from "react-icons/io";
import * as S from "./styles";

interface HeaderProp { 
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const HeaderComp = (prop: HeaderProp) => {
  const [show, setShow] = useState(false)

  const tooggleMenu = () => {
    setShow(!show) 
  }

  const {t} = useTranslation();
  const router = useRouter()
  return (
      <S.Header>
      <S.LogoCont>
        <S.Image src="./banner.png" alt="day3" onClick={() => {router.push("/")}}/>
      </S.LogoCont>
        <S.ContTextButton>
          <S.ContMenu>
            <IoIosList size={'1.7rem'} onClick={tooggleMenu} width= "50"/>
          </S.ContMenu>
          <S.ContOprionButton show={show}>
            <S.ContCenter>
            <TextButton 
              name={t("home")} 
              onClick={() => {router.push("/"), setShow(false)}}
            />
            <TextButton 
              name={t("projects")}  
              onClick={() => {router.push("/projects"), setShow(false)}} 
            />
            <TextButton 
              name={t("about")} 
              onClick={() => {router.push("/about"), setShow(false)}} 
            />
            </S.ContCenter>
                <S.Contright>
                  <SwitcherLanguage />
                <S.SelectMode>
                  <S.Input id="toggle"  type="checkbox" checked={prop.checked} onChange={prop.onChange}/>
                </S.SelectMode>
              </S.Contright>
          </S.ContOprionButton>
        </S.ContTextButton>
      </S.Header>
  );
};


