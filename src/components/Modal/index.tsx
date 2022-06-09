import React from "react";
import { Button, Modal, ModalBody,  } from "reactstrap";
import { IoMdClose, IoIosBuild, IoIosGlobe } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

interface ModalProp {
  name: string;
  language?: string;
  framework?: string;
  libraries?: string;
}

export const ModalComp = (prop: ModalProp) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const {t} = useTranslation();
 
  return (
    <>
      <Button
        style={{textTransform:"uppercase", fontWeight: 600, width: "9rem" }}
        size="sm"
        color="secondary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <S.Text>{t("tecnology")}</S.Text>
      </Button>
      <Modal style={{ }}toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <S.TextTitle className=" modal-title" id="exampleModalLabel">
            {prop.name}
          </S.TextTitle>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            style={{
              background:"none",
              border: "none"
            }}
          >
          <IoMdClose aria-hidden={true}/>
          </button>
        </div>
        <ModalBody style={{}}>
          <S.ContIcon>
            <IoIosGlobe color="black"/>
            <S.Name>Language:</S.Name>
            <S.Assignment>{prop.language}</S.Assignment>
          </S.ContIcon>
          <S.ContIcon>
            <IoIosBuild color="black"/> 
            <S.Name>Framework:</S.Name>
            <S.Assignment>{prop.framework}</S.Assignment>
          </S.ContIcon>
          <S.ContIcon>
            <MdLibraryBooks color="black"/> 
            <S.Name>Libraries: </S.Name>
            <S.Assignment>{prop.libraries}</S.Assignment>
          </S.ContIcon>
        </ModalBody>
      </Modal>
    </>
  );
}