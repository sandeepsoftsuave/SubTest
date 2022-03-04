import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { availableLanguages } from "../Utils/translations.js";
import { useDispatch, useSelector } from "react-redux";
import { setAppLanguage, setShowLanguageModal } from "../Actions/CommonActions.js";
import ca_flag from "../assets/Images/flags/ca.png";
import en_flag from "../assets/Images/flags/en.png";
import es_flag from "../assets/Images/flags/es.png";
import pt_flag from "../assets/Images/flags/pt.png";
import fr_flag from "../assets/Images/flags/fr.png";
import { getItem } from "../Utils/storage.js";
import { USERNAME } from "../Utils/constants.js";
import { updateUserPreference } from "../Api/updateUserPreference.js";
// import useTranslations from "../Custom Hooks/useTranslations.jsx";
import "./SystemLanguageModal.css";

let flags = {
  ca: ca_flag,
  en: en_flag,
  es: es_flag,
  pt: pt_flag,
  fr: fr_flag,
};

function SystemLanguageModal() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("");
  const { showLanguageModal, appLanguage, userInfo } = useSelector((state) => {
    return {
      showLanguageModal: state.commonReducer.showLanguageModal,
      appLanguage: state.commonReducer.appLanguage,
      userInfo: state.commonReducer.userInfo,
    };
  });

  const systemLanguageText = "systemLanguage";
  const saveText = "save";
  const cancelText = "cancel";

  useEffect(() => {
    setLang(appLanguage);
  }, [appLanguage]);

  const saveBtn_onClick = () => {
    const username = getItem(USERNAME);
    dispatch(setAppLanguage(lang));
    dispatch(setShowLanguageModal(false));
    updateUserPreference(lang, userInfo, username, (res) => {});
  };

  const cancelBtn_onClick = () => {
    dispatch(setShowLanguageModal(false));
  };

  const changeLanguage = (value) => {
    setLang(value);
  };
  return (
    <Modal
      title={systemLanguageText}
      visible={showLanguageModal}
      maskClosable={false}
      onOk={saveBtn_onClick}
      onCancel={cancelBtn_onClick}
      okText={saveText}
      cancelText={cancelText}
      width="300px"
      okButtonProps={{
        disabled: lang === appLanguage,
        style: { color: lang === appLanguage ? "lightgray" : "#007bff" },
      }}
    >
      <div className="custom-modal-body-text">
        {availableLanguages.map((item) => (
          <Button
            key={item.code}
            className={
              "list_language_btn" + (lang === item.code ? " active" : "")
            }
            onClick={() => changeLanguage(item.code)}
          >
            <img src={flags[item.code]} alt="" />
            <span>{item.name}</span>
          </Button>
        ))}
      </div>
    </Modal>
  );
}

export default SystemLanguageModal;
