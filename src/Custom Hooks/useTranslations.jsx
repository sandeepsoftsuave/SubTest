import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useTranslations(entity) {
  const { appLanguage, appTranslations } = useSelector((state) => {
    return {
      appLanguage: state.commonReducer.appLanguage,
      appTranslations: state.commonReducer.appTranslations,
    };
  });

  return useMemo(() => {
    const dictionary = appTranslations[entity];
    const defaultLanguage = "en";

    if (dictionary) {
      if (dictionary[appLanguage] && dictionary[appLanguage].length) {
        return dictionary[appLanguage];
      } else if (
        dictionary[defaultLanguage] &&
        dictionary[defaultLanguage].length
      ) {
        return dictionary[defaultLanguage];
      } else {
        return "";
      }
    } else {
      return "";
    }
  }, [appLanguage, appTranslations, entity]);
}
